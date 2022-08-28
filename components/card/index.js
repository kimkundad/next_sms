import React from 'react'
import '@node_modules/flickity/css/flickity.css'

export default function Card({ children }) {

    return (
      <div className='card card_pung'>
        <div className='card-body'>
            {children}
        </div>
      </div>
  )
  }
