import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";

export default function Btn_icon(props) {
  return (
    <>
      <Link href={props.url}>
        <a className="btn_radius min-w-btn2 btn btn-white btn-sm mr5"  >
          <img className="w-20 mar-ri-10" src={props.icon} />
          <b>{props.text}</b>
        </a>
      </Link>
    </>
  );
}
