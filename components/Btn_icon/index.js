import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { Image } from '@chakra-ui/react'

export default function Btn_icon(props) {
  return (
    <>
      <Link href={props.url}>
        <a className={ props.type == 'pending' ? 'min-w-btn2 btn_radius btn btn-white btn-sm mr5' : 'btn_radius btn btn-white btn-sm mr5' }  >
          <Image className="w-20 mar-ri-10 " src={props.icon} />
          <b>{props.text}</b>
        </a>
      </Link>
    </>
  );
}


