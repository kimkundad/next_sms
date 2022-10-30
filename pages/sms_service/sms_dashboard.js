import React, { Fragment } from "react";
import Head from "next/head";
import Layouts from "@components/layouts/index";
import styles from "../../styles/Home.module.css";
import Card from "@components/card";
import Btn_H_sms from "@components/btn_header_sms";
import Doughnut1 from "@components/Doughnut";
import Dropdown from "react-dropdown";
import image_2 from "@public/image/icon_3/calendar.png";
import LineChart1 from "@components/LineChart";
import BarChart1 from "@components/BarChart";
import "react-dropdown/style.css";
import { Image } from '@chakra-ui/react'

export default function Sms_dashboard() {
  console.log("-----", image_2.src);
  const options = [
    {
      value: "มีนาคม 2565",
      label: (
        <div>
          <Image className="pull-left" src={image_2.src} h="26px" w="26px" /> มีนาคม 2565
        </div>
      ),
    },
    {
      value: "เมษายน 2565",
      label: (
        <div>
          <Image className="pull-left" src={image_2.src} h="26px" w="26px" /> มีนาคม 2565
        </div>
      ),
    },
    {
      value: "พฤษภาคม 2565",
      label: (
        <div>
          <Image className="pull-left" src={image_2.src} h="26px" w="26px" /> มีนาคม 2565
        </div>
      ),
    },
  ];
  const defaultOption = options[0];

  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layouts>
        <div className="page-content page-container">
        <div className='padding'>
          <Btn_H_sms></Btn_H_sms>
          <br />
          <Card>
            <div className="row">
              <div className="col-md-12 ">
              <div className="d-inline-flex mb-4 toolbar pull-right">
              <Dropdown
                id="dropdown-Nav"
                options={options}
                value={defaultOption}
                placeholder="Select an option"
              />
              
            </div>
              </div>
              <div className="col-md-4 ">
                <Doughnut1 title="จำนวนการส่งทั้งหมด"></Doughnut1>
              </div>
              <div className="col-md-4 ">
                <Doughnut1 title="เครดิตที่ใช้ทั้งหมด"></Doughnut1>
              </div>
              <div className="col-md-4">
                <Doughnut1 title="สถานะการเปิดอ่าน"></Doughnut1>
              </div>
            </div>
          </Card>
          <Card>
            <div className="row">
              <div className="col-md-6 ">
                <LineChart1 title="สถานะการเปิดอ่าน"></LineChart1>
              </div>
              <div className="col-md-6 ">
                <BarChart1 title="สถานะการเปิดอ่าน"></BarChart1>
              </div>
            </div>
          </Card>
        </div>
        </div>
      </Layouts>
    </Fragment>
  );
}


