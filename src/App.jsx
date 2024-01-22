
import './App.css'
import Header from './components/Header/header'
import Prodect from './components/Prodect/prodect'
import User from './components/User/user'
import { Router, Route, Link } from 'react-router-dom';
function App() {

  return (
   
  //  <Router>
  //   <Route path='/' Component={Header} />
  //   <Route path='/User' Component={User} />
  //   <Route path='/Prodect' Component={Prodect} />
    
    
  //  </Router>
  <div>
    <Header/>
    <User/>
  </div>
   
  )
}

export default App
