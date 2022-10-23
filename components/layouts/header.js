import React from 'react'
import Link from 'next/link'
import PropTypes from "prop-types";

export default function Header(props) {

    const [mobileOpen, setMobileOpen] = React.useState(true);
    const handleOpen = (e) => {
        setMobileOpen(true);
        props.parentCallback(mobileOpen);
    };
    
    return <div id="header" className="page-header bg_yello ">
        <div className="navbar navbar-expand-lg">
            <Link href="/dashboard">
            <a className="navbar-brand d-lg-none">
                <img src="/image/Logo_Pumppang.png" className="img-fluid" />
            </a>
            </Link>
            <ul className="nav navbar-menu order-1 order-lg-2">
                <li className="nav-item dropdown d-none d-sm-block">
                    <div className="alert_nav alert alert-light alert-dismissible fade show" role="alert" >
                        <div className="d-flex">
                            <span><img className="w-30 " src="/image/icon_3/text-message (1).png"/></span>
                            <div className="mx-3 hi-30">
                                <strong className="nav_item_new">ปังคงเหลือ</strong>
                                <small className="nav_item_new_price">1,282 ปัง</small> 
                            </div>
                        </div>
                    </div>
                </li>
                <li className="nav-item dropdown d-none d-sm-block">
                    <Link href="/">
                    <a >
                        <div className="alert_nav alert alert-light alert-dismissible fade show" role="alert" >
                            <div className="d-flex">
                                <span><img className="w-30 " src="/image/icon_2/wallet.png"/></span>
                                <div className="mx-3 hi-30">
                                    <small className="nav_item_new_price2">เติมปัง</small> 
                                </div>
                            </div>
                        </div>
                    </a>
                    </Link>
                </li>
                <li className="nav-item dropdown text-center">
                    <Link href="/">
                    <a data-toggle="dropdown" className="nav-link d-flex align-items-center px-2 text-color" aria-expanded="false">
                        <span className="username_nav text-write mx-2 d-none l-h-1x d-lg-block text-right"><small className="text-fade text-center d-block mb-1">Hello, Super Owners</small>Pablo Nouvelle</span>
                    </a>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right w mt-3 animate fadeIn">
                        <Link href="/setting">
                        <a className="dropdown-item" href="setting.html">
                            <span>ตั้งค่าโปรไฟล์</span>
                        </a>
                        </Link>
                        <Link href="/logout">
                        <a className="dropdown-item" href="login.html">ออกจากระบบ</a>
                        </Link>
                    </div>
                </li>
                
                <li className="nav-item d-lg-none">
                    <Link href="#">
                    <a onClick={handleOpen}  className="nav-link px-1 font-w" data-toggle="modal" data-target="#aside">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </a>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  }

  