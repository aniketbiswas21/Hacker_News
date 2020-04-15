import React, { Fragment } from 'react'

const Navbar = () => {
    return (
        <Fragment>
        <div className="navbar-fixed">
           <nav>
        <div class="nav-wrapper #1a237e indigo darken-4">
          <a href="" className="brand-logo" ><span><i className="fab fa-hacker-news-square fa-lg"/>Hacker News</span></a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav> 
      </div> 
        </Fragment>
    )
}

export default Navbar
