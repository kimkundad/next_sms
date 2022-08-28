import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

export default function Btn_sender(props) {
   
    const [btnfix, setBtnfix] = React.useState(props.type);

    function getType(routeName) {

        if(routeName == 'fix'){
            setBtnfix("btn-pum");
        }

        if(routeName == 'book'){
            setBtnfix("btn-pum");
        }
        if(routeName == 'file'){
            setBtnfix("btn-pum");
        }

      }


    const handleOpen = (item) => {
        getType(item)
        console.log('z---z', btnfix)
    };

  return (
    <>
      <div className="item_head_icon top_15">
          <a className={' tb_btn btn_radius btn btn-white btn-sender-fix'} onClick={() => { handleOpen(props.type); }}>{props.btn_text}</a>
      </div>
    </>
  );
}
