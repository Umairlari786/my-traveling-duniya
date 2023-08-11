import React from 'react'
import"./hero.css";

const Hero = (props) => {
  return (
    <div className={props.cName}>
        <img alt='hero-img' src={props.heroImg}></img>

        <div className='hero-text'>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btn}>
            {props.buttonTxt}
        </a>
        </div>
    </div>
  )
}

export default Hero
