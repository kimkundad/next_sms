import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

export default function Aside(props) {
  const [mobileOpen, setMobileOpen] = React.useState();
  const [isClass, setClass] = useState(false);
  const [isFalse, setisFalse] = useState(false);
  const [isFalseq, setisFalseq] = useState(true);
  const mainPanel = React.createRef();
  const router = useRouter();

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
                        <img className="w-30 " src="image/icon_2/credit.png" />
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
            <Link href={prop.path}>
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
      <div
        id="aside"
        className={
          isClass
            ? "page-sidenav no-shrink bg-light nav-dropdown fade show disblock"
            : "page-sidenav no-shrink bg-light nav-dropdown fade "
        }
        aria-hidden="true"
      >
        <div className="sidenav h-100 modal-dialog bg_wite">
          <div className="navbar bg_yello">
            <Link href="/">
              <a className="navbar-brand ">
                <img src="/image/Logo_Pumppang.png" className="img-fluid" />
              </a>
            </Link>
            <button
              className="close_nav d-md-none d-lg-none d-sm-none btn btn-raised btn-wave btn-icon btn-rounded mb-2 pull-right"
              onClick={handleClose}
              data-dismiss="modal"
            >
              ×
            </button>
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
    </>
  );
}

export async function getStaticProps() {
  return {
    props: "5555",
  };
}
