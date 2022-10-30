import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Image
} from "@chakra-ui/react";
import Drawer from '@components/layouts/Drawer';
import routes from "routes.js";
import routes_2 from "routes_2.js";

export default function Header(props) {
  const [mobileOpen, setMobileOpen] = React.useState(true);
  const handleOpen = (e) => {
    setMobileOpen(true);
    props.parentCallback(mobileOpen);
  };

  return (
    <div id="header" className="page-header bg_yello ">
      <div className="navbar navbar-expand-lg">
        <Link href="/dashboard">
          <a className="navbar-brand d-lg-none">
            <Image className="img-fluid" src='/image/Logo_Pumppang.png' />
          </a>
        </Link>
        <ul className="nav navbar-menu order-1 order-lg-2">
          <li className="nav-item dropdown d-none d-sm-block">
            <div
              className="alert_nav alert alert-light alert-dismissible fade show"
              role="alert"
            >
              <div className="d-flex">
                <span>
                  <Image className="w-30 " src='/image/icon_3/text-message (1).png' />
                </span>
                <div className="mx-3 hi-30">
                  <strong className="nav_item_new">เครดิตคงเหลือ</strong>
                  <small className="nav_item_new_price">1,282 ปัง</small>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown d-none d-sm-block">
            <Link href="/payment/payment_sms">
              <a>
                <div
                  className="alert_nav alert alert-light alert-dismissible fade show"
                  role="alert"
                >
                  <div className="d-flex">
                    <span>
                      <Image className="w-30 " src='/image/icon_2/wallet.png' />
                    </span>
                    <div className="mx-3 hi-30">
                      <small className="nav_item_new_price2">เครดิต</small>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </li>
          <li className="nav-item dropdown text-center">
            <a className="nav-link d-flex align-items-center px-2 text-color">
              <span className="username_nav text-write mx-2 d-none l-h-1x d-lg-block text-right">
                <small className="text-fade text-center d-block mb-1">
                  Hello, Super Owners
                </small>
                Pablo Nouvelle
              </span>
            </a>
          </li>

          <li className="nav-item d-lg-none">
            <Drawer routes={routes} routes_2={routes_2}/>
          </li>
        </ul>
      </div>
    </div>
  );
}
