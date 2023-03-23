import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className="content">
            <h1 className='title'>movie name</h1>
            <div className="banner_button">
                <button className='button'>play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </h1>
        </div>
        <div className="fade_bottom"></div>

    </div>
  )
}

export default Banner