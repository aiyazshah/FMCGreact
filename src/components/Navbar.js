import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css";
export default function Navbar () {
  const login=()=>{
    document.getElementById("login").style.display="block";
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      
      <a className="navbar-brand" href="/">Khan Sales</a>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <Link to='/about'>
          <li className="nav-item nav-link"> About
             </li>
          </Link>
          <Link to='/orderpage'>
          <li className="nav-item nav-link"> Order Page
             </li>
          </Link>
          
          <Link to='/contactus'>
          <li className="nav-item nav-link"> Contact Us
             </li>
          </Link>
          <Link to='/adminpage'>
          <li className="nav-item nav-link"> Admin
             </li>
          </Link>
          <Link to='/registration'>
          <li className="nav-item nav-link"> Regisration
             </li>
          </Link>
          {/* <Link to='/test'>
          <li className="nav-item nav-link"> Test
             </li>
          </Link> */}
        </ul>
        <button className="btn btn-outline-success" onClick={login} type="submit">Login</button>
        
      </div>
    </div> 
  </nav>
  )
}
