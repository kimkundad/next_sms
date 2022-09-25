import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";

export default function Btn_icon_xl(props) {
  return (
    <>
      <Link href={props.url}>
        <a className={'btn_radius fint-26 btn-md min-w-btn2 btn btn-white btn-sm mr5 '+props.bg}  >
          <img className="w-40 mar-ri-10" src={props.icon} />
          <b>{props.text}</b>
        </a>
      </Link>
    </>
  );
}
