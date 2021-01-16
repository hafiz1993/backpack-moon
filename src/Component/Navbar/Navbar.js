import React from 'react';
import logo from '../../images/Logo.png';

const Navbar = () => {
    return (
        <div class=" sticky-top">
            <nav class="navbar navbar-expand-lg navbar-light bg-light container">
  <a class="navbar-brand " href="#">
      <img style={{width:'250px', height:'50px'}} src={logo} alt=""/>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse  sticky-top" id="navbarNav">
    <ul class="navbar-nav ml-auto font-weight-bolder  sticky-top">
      <li class="nav-item   p-3">
        <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item p-3">
        <a class="nav-link" href="#">Products</a>
      </li>
      <li class="nav-item p-3">
        <a class="nav-link" href="#">About Us</a>
      </li>
      <li class="nav-item p-3">
        <a class="nav-link" href="#">Contact Us</a>
      </li>
     
    </ul>
  </div>
</nav>
        </div>
    );
};

export default Navbar;