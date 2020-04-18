import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Fragment>
        <div className="navbar-fixed">
           <nav>
        <div class="nav-wrapper #1a237e indigo darken-4">
          <a href="" className="brand-logo" ><span><i className="fab fa-hacker-news-square fa-lg"/>Hacker News</span></a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/top'>Top</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </div>
      </nav> 
      </div> 
        </Fragment>
    )
}

export default Navbar
