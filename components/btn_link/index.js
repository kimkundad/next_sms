import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";

export default function Btn_link(props) {
      
  return (
    <>
      <Link href={props.url}>
                  <a className="btn_radius pull-right btn btn-sm btn-pum">
                    <i className="fa fa-angle-left faicon"></i> {props.title}
                  </a>
                </Link>
    </>
  );
}
