import React, { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import Layouts from "@components/layouts/index";
import styles from "../../styles/Home.module.css";
import Flickity1 from "@components/flickity";
import Btn_sms from "@components/btm_sms";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layouts>
        <div className="page-hero page-container " id="page-hero">
          <div className="padding text-center"></div>
        </div>
        <div className="page-content page-container">
          <div className="d-flex">
            <Btn_sms btn_text="ภาพรวม" btn_url_path="/sms_service" btn_url="/sms_dashboard" />
            <Btn_sms btn_text="ส่งข้อความ" btn_url_path="/sms_service" btn_url="/sms_sender" />
            <Btn_sms btn_text="รายงาน" btn_url="sms_report" />
            <Btn_sms btn_text="จัดการรายชื่อ" btn_url="sms_customer" />
            <Btn_sms btn_text="เทมเพลตข้อความ" btn_url="sms_template" />
          </div>
        </div>
      </Layouts>
    </Fragment>
  );
}
