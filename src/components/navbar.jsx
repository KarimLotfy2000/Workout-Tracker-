
import React  from 'react';
 import { Link } from 'react-router-dom';

function Nav() {

  
    return (

    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">

  

  <div className="collapse navbar-collapse" >
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to="/" className="nav-link">Exercises</Link>
      </li>
      <li className="nav-item">
        <Link to="/user" className="nav-link">New User</Link>
      </li>
      <li className="nav-item">
        <Link to="/create" className="nav-link">New Exercise</Link>
      </li>
      
      
    </ul>
  </div>
</nav>
    );
  
}
export default Nav