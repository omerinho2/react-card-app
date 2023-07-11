import React from 'react'
import './Card.css'

export default function card(props) {
  return (
 <div className='card'>
    <div className='cardBody'>
      <img src={props.img} />
        <div className='about'>
            <h2 className='cardTitle'>{props.title}</h2>
            <p className='cardDescription'>{props.description}</p>
        </div>
        <button>basabilsiniz efendim</button>
    </div>
 </div>
  )
}
