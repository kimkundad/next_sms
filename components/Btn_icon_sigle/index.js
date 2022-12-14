import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { Image } from '@chakra-ui/react'

export default function Btn_icon_sigle(props) {
  return (
    <>
      <Link href={props.url}>
        <a className="btn_icon_sig btn_radius btn btn-white btn-sm mr5"  >
          <Image className="w-20 " src={props.icon} />
        </a>
      </Link>
    </>
  );
}
