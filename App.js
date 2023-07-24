import React from "react";
import ReactDOM from "react-dom/client";

/*Main App Component
-Header
  -Logo
  -Nav items(Home, About us ,Contact us, Add to Cart)
-Body
   -Search
   -ResturantCard Container
      -Resturant Card
         -Resturant Name
         -Resturant logo
         -Cuisines
         -Time of Delivery
         -Star rating     
-Footer
  -copy right
  -links
  -address
  -contact

 */

const Header=()=>{
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo"alt="hot-cheetos-logo" src="https://tse2.mm.bing.net/th?id=OIP.mc3n-sM8sQZDsdNhINru-gHaHk&pid=Api&P=0&h=180"></img>
      </div>
      <div className="nav-items">
        <ul >
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Add to cart</li>
        </ul>
      </div>
    </div>
  )
}
// const StyleCard={
//   backgroundColor:"#f0f0f0",
// }

const ResturantCard=(props)=>
{
  const resObj=props;
  return (<div className="res-card" style={{
    backgroundColor:"#f0f0f0",
  }}>
  <div className="res-logo-container" >
    <img className="res-logo"  alt="Resturant-logo" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf"/>
  </div>
  <h3 className="res-name">{resObj.resName}</h3>
  <h4 className="cuisine">{props.cuisine}</h4>
  <h4 className="star-rating">4.4*</h4>
  <h4 className="delivery-time">38 mins</h4>
</div>)
}

const Body=()=>{
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-card-container">
        <ResturantCard resName="Meghana Foods" cuisine="Biryani,South Indian,North Indian"/>
        <ResturantCard resName="KFC" cuisine="Fast Food,American"/>
       
      </div>
    </div>
  )
}
const AppComponent=()=>{
  return (<div className="app-container">
    <Header/>
    <Body/>
  </div>)
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent/>)




