//Main search page (stores/movies search)
import React from "react";
import Layout from '../comps/MyLayout';
import {getInfo} from '../lib/utils.js';
import {getInfoCity} from '../lib/utils.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search:"", display: false, isCity: false };
  }

  async handleUpdate(evt) {
    this.setState({ search: evt.target.value, display: false });
    let data = null;
    const p = evt.target.value;

    data = await getInfo(p);
    if(data.items.info.length===0){
        data = await getInfoCity(p);
        if(data.items.info.length===0){
          this.setState({ display: true, isCity: false });
        } else {
          this.setState({ display: false, isCity: true });
        }
    } else {
      this.setState({ display: false, isCity: false });
    }      
    return this.setState({ data });
  }
  

  render() {
    return (
      <Layout>
        <div>
          <div>
            <div className="info">POPULATION CALCULATOR</div><div className="info">Search by continent, country, or city</div>         
            <div className='input-holder'>
              <p><input className='input-box' 
                type='text' 
                placeholder="Enter search term" 
                value={this.state.search} 
                onChange={this.handleUpdate.bind(this)}/></p>
              {this.state.display ? 
                <div><br/><p className='warning'><b>{this.state.search}</b> Not Found
                <br/><small>Please try another serach</small></p></div>
                : null }
            </div>
          {this.state.data && this.state.display==false && this.state.search!='' ? 
            <div>
              <table id="food-table">
                <thead>
                  {this.state.isCity===false ? 
                    <tr>
                      <th>Continent</th>                
                      <th>Country</th>
                      <th>Country Code</th>
                      <th>Capital City</th>
                      <th>Population</th>
                      <th>Percent of Continent Population</th>
                      <th>Percent of World Population</th>
                    </tr> 
                    :
                    <tr>
                      <th>Country Code</th>                
                      <th>District</th>
                      <th>City</th>
                      <th>Population</th>
                      <th>Percent of District Population</th>
                      <th>Percent of Country Population</th>
                    </tr> }
                </thead>
                {this.state.isCity===false ? 
                  <tbody>
                    {this.state.data.items.info.map((item, key)=>
                      <tr key={item.code}>
                        <td>{item.continent}</td>
                        <td>{item.name}</td>
                        <td>{item.code}</td>
                        <td>{item.capital}</td>
                        <td>{item.population}</td>
                        <td>{item.continentpercent}</td>
                        <td>{item.worldpercent}</td>
                      </tr>
                    )}
                  </tbody>
                  :
                  <tbody>
                    {this.state.data.items.info.map((item, key)=>
                      <tr key={item.name}>
                        <td>{item.countrycode}</td>
                        <td>{item.district}</td>
                        <td>{item.name}</td>
                        <td>{item.population}</td>
                        <td>{item.districtpercent}</td>
                        <td>{item.countrypercent}</td>
                      </tr>
                    )}
                  </tbody> }
              </table>
            </div> 
            :
            null }      
          </div> 
          
          <style jsx>{`
            #food-table {
              font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
              border-collapse: collapse;
              width: 100%;
            }            
            #food-table td, #food-table th {
              border: 1px solid #ddd;
              padding: 8px;
            }
            #food-table tr {
              font-family: "Verdana";
              font-size: 10px;
              padding: .75rem;
              vertical-align: top;
              border-top: 1px solid #dee2e6;
            }            
            #food-table tr:nth-child(even){
              background-color: rgba(208,244,253,0.5);
            }  
            #food-table tr:nth-child(odd){
              background-color: white;
            }            
            #food-table tr:hover {
              background-color: rgba(208,244,253, 1);
            }            
            #food-table th {
              font-family: "Verdana";
              font-size: 14px;
              padding-top: 12px;
              padding-bottom: 12px;
              text-align: left;
              background-color: #B00574;
              color: white;
              text-align: center;
            }
            .input-box {
              margin: auto auto !important;
              display: block;
              padding: 10px;
              margin: 10px;
              border-radius: 7px;
              text-align: center;
              font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
              font-size: "12px";
              box-shadow: 2px 2px 5px #888888;
              border: 2px solid #005CBB
              !important;
              width: 250px;
            }
            .info {
              font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
              color: #005CBB;
              font-size: 20px;
              text-shadow: 0px 0px 3px #00285C;
              text-align: center;
            }
            .info-subtitle{
              font-size: 15px;
            }
            .link {
              font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
              color: #28e0f4;
            }
            .warning {
              font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
              color: white;
              position: relative;
              background: rgba(255,37,64,0.8);
              border-radius: 12px;
              width: 150px;
              margin: auto auto;
              text-align: center;
              padding: 40px 20px 40px 20px;
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            }
            .warning:after {
              content: '';
              position: absolute;
              top: 0;
              left: 50%;
              width: 0;
              height: 0;
              border: 20px solid transparent;
              border-bottom-color: rgba(255,37,64,0.8);
              border-top: 0;
              border-left: 0;
              margin-left: -10px;
              margin-top: -20px;
            }
          `}</style>
        </div>
      </Layout>
    );
  }
}

export default Home;
