import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (

  <header>
    <nav>
    <div class="topnav">

  <a href="#home" class="active"><Link to='/'>Homepage</Link></a>
        <a  href="#gallery"><Link to='/gallery'>Gallery</Link></a>

</div>
      <ul>

      </ul>
    </nav>
  </header>
)

export default Header
