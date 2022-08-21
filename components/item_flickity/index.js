import React from 'react'
import Link from 'next/link'

export default function Item_flickity( props) {
    return (
        <div className='row'> 
        <div className='col-md-6'>
          <img src={ 'image/'+props.image } className='img-fluid'></img>
        </div>
        <div className='col-md-6'>
          <h5 className="card-title">{ props.title }</h5>
          <p className="card-text">{ props.detail }</p>
          <div className="text-center">
            <br/>
            <Link href={ props.get_href } >
            <a className="btn_radius btn btn-sm btn-pum "><b>ดูรายละเอียด</b> </a>
            </Link>
          </div>
        </div>
      </div>
    )
}
