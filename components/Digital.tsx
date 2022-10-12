import React from 'react'
import Instagram from './Instagram'
import TikTok from './Tiktok'

function Digital() {
  return (
    <section id="digital">

            <div className='bubblewrap sticky'>
                <h2 className='sticky bubble bg-green'>Digital</h2>
            </div>
           
            
           
            <Instagram />
            <TikTok />
        </section>
  )
}

export default Digital