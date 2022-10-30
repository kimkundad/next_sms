import React from 'react'
import Link from 'next/link'
import Blog_detail from '@components/Modal/blog_detail';
import { Image } from '@chakra-ui/react'

export default function Item_flickity( props) {
    return (
        <div className='row'> 
        <div className='col-md-6'>
          <Image className="img-fluid" src={"image/" + props.image} />
        </div>
        <div className='col-md-6'>
          <h5 className="card-title">{ props.title }</h5>
          <p className="card-text">{ props.detail }</p>
          <div className="text-center">
            <br/>
            <Blog_detail id_blog={props.id_blog}/>
          </div>
        </div>
      </div>
    )
}
