import "./destination.css"
import React from 'react'

const DestinationData = (props) => {
  return (
    <div className='first-desc'>
    <div className='des-txt'>
        <h2>{props.heading}</h2>
        <p>{props.text}</p>

    </div>
    <div className='Img'>
        <img alt='img' src={props.img1}></img>
        <img alt='img2' src={props.img2}></img>
    </div>
    </div>
  )
}

export default DestinationData
