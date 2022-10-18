import React from 'react'
import { useState } from 'react';
import DinIndex from './DinIndex';


function Header() {

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

 

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