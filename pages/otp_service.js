import React, { Fragment, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Layouts from "@components/layouts/index";
import Card from "@components/card";
import Btn_H_sms from "@components/btn_header_sms";
import CardBlue from "@components/cardBlue";
import SelectOp from "@components/selectOp";
import Btn_sender from "@components/btn_sender";
import Link from "next/link";
import Table from "@components/table_otp_service";
import countriesData from "@components/data/opt";


export default function Otp_service() {
    const [countries] = useState([...countriesData]);
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
          <Card>
            <Table data={countries} rowsPerPage={10} />
          </Card>
        </div>
        </div>
      </Layouts>
    </Fragment>
  );
}
