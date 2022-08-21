import React from 'react'
import { useEffect } from 'react';
import { useRouter } from "next/router";
import Header from '@components/layouts/header'
import Aside from '@components/layouts/aside'
import Footer from '@components/layouts/footer'
import routes from "routes.js";
import routes_2 from "routes_2.js";

export default function Layouts({ children }) {

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const router = useRouter();

    const callbackFunction = (childData) => {
        console.log('childData = ',childData)
        setMobileOpen(childData);
        console.log('/////',mobileOpen)
      };

    return <div className='layout-row'>
            <Aside open={mobileOpen} routes={routes} routes_2={routes_2}
            ></Aside>
            <div id="main" className="layout-column flex">
            <Header parentCallback={callbackFunction} ></Header>
            <div id="content" className="flex ">    
            {children}
            </div>
            <Footer></Footer>
        </div>
        </div>
  }
