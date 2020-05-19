import React, { useEffect, useState } from 'react';
import axios from 'axios';

import NavBar from './navbar.js';
import Masthead from './masthead.js'
import './header.css'

function Header(props) {
  const [headerData, setHeaderData] = useState({});

  useEffect(() => {
    axios.get('/header')
      .then(res => setHeaderData(res.data))
  }, []);
  
  const {heading, subheading} = headerData;

  return(
    <>
      <NavBar/>
      <header className="masthead">
        <Masthead heading={heading} subheading={subheading}/>
      </header>
    </>
);
}

export default Header;
