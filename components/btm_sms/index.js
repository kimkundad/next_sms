import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";


export default function Btn_sms(props) {

    const router = useRouter();
    function activeRoute(routeName) {
        return router.route.indexOf(routeName) > -0 ? true : false;
      }
      var listItemClasses;
 
        listItemClasses = classNames({
          ["  btn-pum"]: activeRoute(props.btn_url),
        });
        console.log('z---z', activeRoute(listItemClasses))
      
  return (
    <>
      <div className="item_head_icon">
        <Link href={props.btn_url_path+props.btn_url}>
          <a className={listItemClasses+' tb_btn btn_radius btn btn-white btn-block'}>{props.btn_text}</a>
        </Link>
      </div>
    </>
  );
}
