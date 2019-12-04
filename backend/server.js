const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();

app.set("port", 8080);

app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

var Pool = require("pg").Pool;
var config = {
	host: "localhost",
	user: "world",
	password: "world",
	database: "world"
};

var pool = new Pool(config);

app.get("/api/largebody", async (req, res) => {
  console.log("HERE!");
  try {
    const templateContinent = "With "
    + "totals(continent, name, code, capital, population) "
    + " as (select c1.continent, c1.name, c1.code, c1.capital, SUM(c2.population) "
    + " FROM country c1 JOIN country c2 ON c1.code = c2.code GROUP BY c1.code), "
    + "ctotals(continent, continentpop) "
    + "  as (select continent, SUM(population) "
    + "  from country group by continent), "
    + "wtotals(worldpop) "
    + " as (select SUM(population) from country) "
    + "select t.continent, t.code, t.name, t.capital, t.population, "
    + " ((t.population*100.0)/wt.worldpop) as worldpercent, "
    + " ((t.population*100.0) / ct.continentpop) AS continentpercent from wtotals wt, "
    + " totals t join ctotals ct on t.continent=ct.continent "
    + "where t.continent ilike $1 order by t.population desc limit 20;"
    const responseContinent = await pool.query(templateContinent, ['%' + req.query.param + '%']);
    //console.log(responseContinent);

    
    const templateCountry = "With "
    + "totals(continent, name, code, capital, population) "
    + "  as (select c1.continent, c1.name, c1.code, c1.capital, SUM(c2.population) "
    + "  FROM country c1 JOIN country c2 ON c1.code = c2.code "
    + "  WHERE c1.code ilike $1 or c1.name ilike $1 GROUP BY c1.code), "
    + "ctotals(continent, continentpop) "
    + "  as (select continent, SUM(population) "
    + "  from country group by continent), "
    + "wtotals(worldpop) "
    + "  as (select SUM(population) "
    + "  from country) "
    + "select t.continent, t.code, t.name, t.capital, t.population, "
    + "  ((t.population*100.0) / wt.worldpop) as worldpercent, "
    + "  ((t.population*100.0) / ct.continentpop) AS continentpercent "
    + "from totals t, ctotals ct, wtotals wt "
    + "where ct.continent=t.continent limit 20;"
    const responseCountry = await pool.query(templateCountry, ['%' + req.query.param + '%']);

    if (responseContinent.rowCount == 0) {
      console.log("continent 0");
      if(responseCountry.rowCount == 0) {
        res.json({ info : responseCountry.rows });
      } else {
        const results = responseCountry.rows.map(function(item) {
          console.log("country results: "+item);
          item.worldpercent = Math.round(item.worldpercent);
          item.continentpercent = Math.round(item.continentpercent);
          return item;
        });      
        //console.log(results);    
        res.json({ info: results });
      }
    } else {
      const resultsContinent = responseContinent.rows.map(function(item) {
        console.log("continent results: "+item);
        item.worldpercent = Math.round(item.worldpercent);
        item.continentpercent = Math.round(item.continentpercent);
        return item;
      });  
      //console.log(responseContinent);
      res.json({ info: resultsContinent });
    }
	} catch (err) {
		console.error("Error running query " + err);
	}
});

app.get("/api/city", async (req, res) => {
    //city name | country | country code | population | population as percent of total
    try {
      const template = "With "
      + "districttotal(district, population) "
      + "  as (select district, sum(d.population) "
      + "  from city d group by district, countrycode), "
      + "countrytotal(code, population) "
      + "  as (select c.code, sum(c.population) "
      + "  from country c group by c.code) "
      + "select cty.name, cty.district, cty.countrycode, cty.population, "
      + "  ((cty.population*100.0)/ct.population) as countrypercent, "
      + "  ((cty.population*100.0)/dt.population) as districtpercent "
      + "from city cty join countrytotal ct on ct.code=cty.countrycode "
      + "  left join districttotal dt on cty.district=dt.district "
      + "where cty.name ilike $1 limit 20;";
      const response = await pool.query(template, ['%' + req.query.city + '%']);
      if (response.rowCount == 0) {
        res.json({ info: response.rows });
      } else { 
        const results = response.rows.map(function(item) {
          item.countrypercent = Math.round(item.countrypercent);
          item.districtpercent = Math.round(item.districtpercent);
          return item;
        });
        res.json({ info: results });
      }
    } catch (err) {
      console.error("Error running query " + err);
    }
  });

app.listen(app.get("port"), () => {
	console.log(`Find the server at http://localhost:${app.get("port")}/`);
});