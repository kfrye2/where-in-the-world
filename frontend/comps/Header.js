import Link from 'next/link';

const linkStyle1 = {
  marginRight: 15,
  border: '1px solid #B00574',
  background: 'rgba(176,5,116,0.25)',
  borderRadius: '5px',
  padding: '10px',
  fontFamily: 'Verdana',
  textDecoration: 'none',
  color: '#B00574',
  textShadow: "0 0 3px rgba(0, 0, 0, 0.75)",
};
const navBar = {
    padding: '20px',
    textAlign: 'right',
    background: "rgb(0, 92, 187)",
    boxShadow: '5px 10px 18px #888888'
};
const foodBackground = {
  background: "rgb(0,40,92)",
  backgroundImage: "url(https://content.fortune.com/wp-content/uploads/2016/08/toc09_a1.png)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
  imageRendering: "-webkit-optimize-contrast",
  imageRendering: "pixelated",
  width: "100%",
  height: "305px",
  boxShadow: "4px 4px 8px #888888"
};
const title = {
  textAlign: "center",
  margin: "auto auto",
  width: "30%",
  height: "100px",
  color: "rgb(0,40,92)",
  background: "rgba(96,217,255,0.75)",
  fontFamily: "Impact, fantasy",
  fontSize: "40px",
  padding: "10px 20px 100px 20px",
  textShadow: "0 0 3px rgba(176,5,116, 0.75)",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
}
const descriptionBar = {
  background: "rgb(176,5,116)",
  height: "30px",
  boxShadow: "4px 4px 8px #888888"
}
const description = {
  background: "rgb(96,217,255)",
  textAlign: "center",
  height: "1px",
  width: "75%",
  margin: "0 auto",
  padding: "0 20px 100px 20px",
}
const descriptionTitle = {
  color: "rgb(0, 92, 187)",
  fontFamily: "Impact, fantasy",
  fontSize: "30px",
  textShadow: "0 0 3px rgba(0, 0, 0, 0.2)",
}
const descriptionSubheader1 = {
  color: "rgb(0, 92, 187)",
  fontSize:"19px",
  fontFamily: "Trebuchet MS, Arial, Helvetica, sans-serif",
  textShadow: "0 0 3px rgba(0, 0, 0, 0.2)",
}
const descriptionSubheader2 = {
  color: "rgb(0, 92, 187)",
  fontSize:"12px",
  fontFamily: "Trebuchet MS, Arial, Helvetica, sans-serif",
  textShadow: "0 0 3px rgba(0, 0, 0, 0.2)",
}

const Header = () => (
  <div>
    <div style={navBar}>
      <Link href="/">
        <a style={linkStyle1}>Home</a>
      </Link>
    </div>
    <div>
      <div style={foodBackground}>
        <br/><br/>
          <div style={title}><br/>WORLD POPULATION DISCOVERY</div>
      </div>
    </div>
  </div>
);

export default Header;