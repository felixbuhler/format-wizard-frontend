import React from 'react'
import { useState } from 'react';
import DinIndex from './DinIndex';


function Header() {

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const scrollHandle = (e) => {
    e.preventDefault();
    let id = e.target.id;
    let position = document.getElementById(id.slice(0, id.length - 1)); //removing extra last - (dash)
    window.location.href = "#" + id.slice(0, id.length - 1); // changing the url
    position && position.scrollIntoView({ behavior: "smooth", block: "start" }) //scrolling the page
   }

  return (
    <>
      <header>
        <div className='bubblewrap sticky'>
          <div className='header bubble squared'>
            <h1>FORMAT WIZARD</h1>
            <button onClick={handleClick}>Toggle Index</button>
          </div>


        </div>
      </header>

      <div className={`${active ? 'open' : ''
        }   index`}>
        <div className='bubble squared'>
          <h3>Print</h3>
          <h4>DIN</h4>
          <DinIndex />
          <h4>Other</h4>
          <DinIndex />
          <h3>Digital</h3>
          <h4>Instagram</h4>
          <DinIndex />
          <h4>TikTok</h4>
          <DinIndex />
        </div></div></>
  )
}

export default Header