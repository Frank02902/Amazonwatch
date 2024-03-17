import heart from './heart-pulse-solid (1).svg';
import classes from './App.module.css';
import black from './black.png';
import red from './red.png';
import purple from './purple.png';
import blue from './blue.png';
import product from './ProductData-1'
/*const hour = new Date().getHours() > 9? new Date().getHours(): '0' + new Date().getHours();
const minutes = new Date().getMinutes()>9? new Date().getMinutes(): '0' + new Date().getMinutes();*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <nav className = {classes.topbar}>
       <img src="https://i.dlpng.com/static/png/197684_preview.png" alt = "Amazon"/>
       </nav>
      </header>
      <div className={classes.maincontainer}>
      <div className={classes.productpreview}>
      <img src={black} alt = "product" />
     {/* <div className= {classes.watchtime}>
      <p>{hour+":"+minutes}</p>
      </div>*/}
      <div className= {classes.watchheart}>
      <img src={heart} alt =""/>
      <p>78</p>
      </div>
      </div>
      
      <div className= {classes.productdata} >
      <h1 className= {classes.producttitle}>{product.title}</h1>
      <p className={classes.productdescription}>{product.description}</p>
      <h3 className= {classes.sectionheading}> select color</h3>
      <div >
      <img className={classes.image} src={black} alt = ""/>
      <img className={[classes.image, classes.selectedimage].join(' ')} src={red}alt = ""/>
      <img className={classes.image} src={blue} alt=""/>
      <img className={classes.image} src={purple} alt =""/>
      </div>
      <h3 className= {classes.sectionheading}> Features</h3>
      <div>
      
      <button className={[classes.time, classes.timeitem].join(' ')}>Time</button>
      <button className={classes.time}>Heart Rate</button>
      </div>
      <button className={classes.buy}>Buynow</button>
      </div>
      </div>
    </div>
  );
}

export default App;
