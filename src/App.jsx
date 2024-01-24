import "./App.css";
import Cato from "./components/Cato/Cato.jsx";
import Header  from "./components/Header/header.jsx";
import Home from "./components/Home/home.jsx";
import Order from "./components/Order/Order.jsx";
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
path:'/catogares',
element:<Cato/>
  },
  {
path:'/order',
element:<Order/>
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
