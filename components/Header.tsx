import React from 'react'

function Header() {
  return (

    <header>
       <div className='bubblewrap sticky'>
            <div className='header bubble squared'>
                <h1>FORMAT WIZARD</h1><select>
                    <option>Go To &rarr;</option>
                    <optgroup label="Print">
                        <option>DIN A10</option>
                        <option>DIN A9</option>
                        <option>DIN A8</option>
                        <option>DIN A7</option>
                        <option>DIN A6</option>
                        <option>DIN A5</option>
                        <option>DIN A5</option>
                        <option>DIN A4</option>
                        <option>DIN A3</option>
                        <option>DIN A2</option>
                        <option>DIN A1</option>
                        <option>DIN A0</option>
                    </optgroup>
                    <optgroup label="Digital">
                        <option>Tyrannosaurus</option>
                        <option>Velociraptor</option>
                        <option>Deinonychus</option>
                    </optgroup>
                </select>
            </div>


        </div>
    </header>
  )
}

export default Header