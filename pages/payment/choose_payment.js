import React, { Fragment, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Layouts from "@components/layouts/index";
import Card from "@components/card";
import CardBlue from "@components/cardBlue";
import { Flex, Spacer, Box, Text } from "@chakra-ui/react";
import Btn_link from "@components/btn_link";
import Card_white from "@components/Card_white";

export default function ChoosePayment() {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layouts>
        <div className="page-hero page-container " id="page-hero">
          <div className="padding text-center">
          </div>
        </div>
        <div className="page-content page-container">
          <Card>
          <Flex>
              <Box>
                <Btn_link title="ย้อนกลับ" url="/payment/package" />
              </Box>
            </Flex>
            <Box h="4"></Box>
            <Box >
                <div className="row justify-content-center">
                    <div className="col-md-8">
                    <CardBlue>
                        <Box align="center">
                        <Text as='b' fontSize='4xl'>เลือกช่องทางการชำระเงิน</Text>
                        </Box>
                        <Flex>
                            <Box p="4" w="100%">
                                <Card_white img="/image/icon_2/qr-code.png" title="โอนเงิน สแกน QR Code" price="1500" type="promptpay"/>
                            </Box>
                            <Box p="4" w="100%">
                                <Card_white img="/image/icon_3/credit.png" title="บัตรเดบิต / เครดิต" price="1500" type="credit_card"/>
                            </Box>
                        </Flex>
                    </CardBlue>
                    </div>
                </div>
            </Box>
          </Card>
        </div>
      </Layouts>
    </Fragment>
  );
}