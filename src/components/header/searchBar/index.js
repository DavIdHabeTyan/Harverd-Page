import React from 'react';
import "./style.css"
function SearchBar () {
   return (
      <div className="topnav">
         <a className="active" href="#home">Home</a>
         <a href="#about">About</a>
         <a href="#contact">Contact</a>
         <input type="text" placeholder="Search.."/>
      </div>
   );
}

export default SearchBar;