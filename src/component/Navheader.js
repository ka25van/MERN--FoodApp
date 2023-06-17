import React from 'react'
import { Link } from 'react-router-dom'

export default function Navheader() {
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1" to="/">BestFood</Link>
         
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active fs-4 " aria-current="page" to="/">Home</Link>
              </li>
              </ul>

              <div className='d-flex'>
              
                <Link className="btn bg-white text-warning m-1" to="/login">Login</Link>
              
                <Link className="btn bg-white text-info m-1" to="/createuser">SignUp</Link>
              
              </div>
              
            
          </div>
          
        </div>
      </nav>


    </div>
  );
}
