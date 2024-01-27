import "./App.css";
import Offer from "./components/Adv/Adv.jsx";
import Cato from "./components/Cato/Cato.jsx";
import {Centert} from "./components/Center/Center";
import Header  from "./components/Header/header.jsx";
import Home from "./components/Home/home.jsx";
import Order from "./components/Order/Order.jsx";
import Model from "./components/Prodect/model/Model.jsx";
import { Prodect } from "./components/Prodect/prodect";
import Section from "./components/Section/Section.jsx";
import { User } from "./components/User/user";
import { BrowserRouter as Router, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
const router=createBrowserRouter([
  {
path:'/',
element:<Home/>
  },
  {
path:'/user',
element:<User/>
  },
  
  {
path:'/prodect',
element:<Prodect/>
  },
  {
path:'/prodect/add',
element:<Model/>
  },
  {
path:'/catogares',
element:<Cato/>
  },
  {
path:'/order',
element:<Order/>

  },
  {
    path:'/Center',
    element:<Centert/>
    },
  {
    path:'/Offer',
    element:<Offer/>
    },
//   {
// path:'/order',
// element:<Order/>
//   },
])
  
  return (
    <>
    <div>
      <Header/>
<RouterProvider router={router}/>
    </div>
     {/* <Router>
      <Header/>
        <Switch>
        <Route path="/" Component={Home} exct> <Home/> </Route> 
        <Route path="/User" Component={User} exct> <User /></Route> 
        <Route path="/prodect" Component={Prodect} exct> <Prodect /> </Route> 
        </Switch>
      </Router> */}
    

    </>
  );
}

export default App;
