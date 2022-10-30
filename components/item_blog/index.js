import React from "react";
import Link from "next/link";
import Blog_detail from '@components/Modal/blog_detail';
import { Image } from '@chakra-ui/react'

export default function Item_blog(props) {
  return (
    <div className="col-6 col-sm-3">
      <div className="card card_pung text-center">
        <div className="card-header">
          <Image className="img-fluid" src={"image/" + props.image} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.detail}</p>
          <Blog_detail id_blog='115'/>
        </div>
      </div>
    </div>
  );
}
