import React from 'react'
import '@node_modules/flickity/css/flickity.css'

export default function cardBlue({ children }) {

    return (
      <div className='card card_blue2'>
        <div className='card-body'>
            {children}
        </div>
      </div>
  )
  }
