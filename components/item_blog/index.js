import React from "react";
import Link from "next/link";

export default function Item_blog(props) {
  return (
    <div className="col-6 col-sm-3">
      <div className="card card_pung text-center">
        <div className="card-header">
          <img src={"image/" + props.image} className="img-fluid"></img>
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.detail}</p>
          <Link href={props.get_href}>
            <a className="btn_radius btn btn-sm btn-pum">อ่านเพิ่มเติม</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
