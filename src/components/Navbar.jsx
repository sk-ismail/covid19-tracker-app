import React from 'react'
import './Navbar.css'
import HospitalStats from './HospitalStats/HospitalStats';
import Map from './Map/Map'
import Home from './Home/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
   
    NavLink
  } from "react-router-dom";


const Navbar = () => {
    return (
        <div >
      <Router>
      <div>
        <nav className="NavbarApp">

              <NavLink exact className='pagesLinks' to="/" activeClassName='active-class'>             <button className='btns active' >Home</button></NavLink>
              <NavLink exact className='pagesLinks' to="/hospitalstats" activeClassName='active-class'><button className='btns'>Hospital Beds</button></NavLink>
              <NavLink exact className='pagesLinks' to="/map" activeClassName='active-class'>   <button className='btns'>Visuals</button></NavLink>
          
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/hospitalstats" exact>
              <HospitalStats/>
            
          </Route>
          <Route path="/map" exact>
              <Map/>
            
          </Route>
          <Route path="/" exact>
          <Home/>
          </Route>
        </Switch>
      </div>
    </Router>


            
        </div>
    )
}

export default Navbar
