import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure 
  } from '@chakra-ui/react'

export default function drawer(props) {
  const [mobileOpen, setMobileOpen] = React.useState();
  const [isClass, setClass] = useState(false);
  const [isFalse, setisFalse] = useState(false);
  const [isFalseq, setisFalseq] = useState(true);
  const mainPanel = React.createRef();
  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('left')

  function activeRoute(routeName) {
    return router.route.indexOf(routeName) > -1 ? true : false;
  }
  const { routes, routes_2 } = props;

  console.log("2--->", props.open);

  useEffect(() => {
    if (window.innerWidth >= 767) {
      setMobileOpen(false);
      console.log("close--->");
    }
    console.log("get close--->", window.innerWidth);
  }, []);

  useEffect(() => {
    setMobileOpen(props.open);
    setClass(props.open);
    console.log("1--->", isClass);
  }, [props]);

  const handleClose = async () => {
    setMobileOpen(isFalse);
    setClass(isFalse);
    setisFalseq(isFalse);

    console.log("xxx--->", isClass);
  };


  var links = (
    <ul className="nav bg">
      <br />
      <li className=" d-md-none d-lg-none d-sm-none">
                  <Link href="/">
                    <a href="#" className="">
                      <span className="nav-icon text-primary">
                        <img className="w-30 " src="/image/icon_3/text-message (1).png" />
                      </span>
                      <span className="nav-text">
                        ปังคงเหลือ <b>1,282</b> ปัง
                      </span>
                    </a>
                  </Link>
                </li>
      {routes.map((prop) => {
        var listItemClasses;

        listItemClasses = classNames({
          ["  active"]: activeRoute(prop.layout),
        });

        return (
          <li>
            <Link href={ prop.layout + prop.path}>
              <a className={listItemClasses}>
                <span className="nav-icon text-primary">
                  <img className="w-30 " src={'/image/icon_3/'+prop.icon}/>
                </span>
                <span className="nav-text">{prop.name}</span>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );


  var links_2 = (
    <ul className="nav bg">
      <br />
      {routes_2.map((prop) => {
        var listItemClasses;

        listItemClasses = classNames({
          ["active"]: activeRoute(prop.layout),
        });

        return (
          <li>
            <Link href={prop.layout + prop.path}>
              <a className={listItemClasses}>
                <span className="nav-icon text-primary">
                <img className="w-30 " src={'/image/icon_3/'+prop.icon}/>
                </span>
                <span className="nav-text">{prop.name}</span>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
    <a
                onClick={onOpen}
                className="nav-link px-1 font-w"
                data-toggle="modal"
                data-target="#aside"
              >
                <i className="fa fa-bars" aria-hidden="true"></i>
              </a>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
        <div
        id="aside"
        className='page-sidenav no-shrink bg-light nav-dropdown fade show disblock'
        aria-hidden="true"
      >
        <div className="sidenav h-100 modal-dialog bg_wite page-sidenav_xx">
          <div className="navbar bg_yello">
            <Link href="/">
              <a className="navbar-brand ">
                <img src="/image/Logo_Pumppang.png" className="img-fluid" />
              </a>
            </Link>
          </div>
          <div className="flex scrollable hover">
            <div className="nav-active-text-primary" data-nav>
                {links}
            </div>
          </div>
          <div className="no-shrink ">
            <div className="nav-active-text-primary" data-nav>
                {links_2}
              <br />
            </div>
          </div>
        </div>
      </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: "5555",
  };
}
