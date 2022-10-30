import React, { Fragment, useState } from "react";
import Head from "next/head";
import Layouts from "@components/layouts/index";
import Card from "@components/card";
import Btn_H_sms from "@components/btn_header_sms";
import CardBlue from "@components/cardBlue";
import SelectOp from "@components/selectOp";
import Btn_sender from "@components/btn_sender";
import Link from "next/link";
import Btn_icon_b from "@components/Btn_icon_b";
import Credit_box_setting from "@components/Credit_box_setting";
import EditProfile from '@components/Modal/editProfile';
import PaymentHistory from '@components/Modal/payment_history';
import { Flex, Center, Grid, Box, Text, Image, List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList, } from "@chakra-ui/react";
import Box_price from "@root/components/Box_price";

export default function Setting() {
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
          <Box className="row">
            <Box className="col-md-4">
              <Box borderWidth="1px" p="4" boxShadow="md" borderRadius="xl">
                <Box className="text-center">
                  <Text fontSize="4xl">โปรไฟล์</Text>
                  <Center mt="5">
                    <Image src="/image/icon_3/user.png" h="200px" />
                  </Center>
                  <Text fontSize="3xl" mt="5">
                    ชื่อผู้ใช้งาน : Kim Kundad
                  </Text>
                  <Text fontSize="3xl">รหัสผ่าน : ******</Text>
                  <EditProfile/>
                </Box>
              </Box>
            </Box>

            <Box className="col-md-8">
              <Box borderWidth="1px" p="4" boxShadow="md" borderRadius="xl">
                <Center gap={2} alignItems="center">
                  <Image
                    src="/image/icon_3/text-message (1).png"
                    boxSize="35px"
                  />
                  <Text fontSize="3xl"> SMS</Text>
                </Center>
                <Flex justifyContent="center" gap="4" mt="5">
                  <Credit_box_setting
                    title="เครดิตคงเหลือ"
                    credit="1282"
                    url=""
                  />
                  <Credit_box_setting title="แพ็คเกต" credit="BASIC" url="" />
                  <PaymentHistory/>
                </Flex>
              </Box>
              <Box
                mt="10"
                borderWidth="1px"
                p="4"
                boxShadow="md"
                borderRadius="xl"
              >
                <Center gap={2} alignItems="center">
                  <Image src="/image/icon_3/mobile.png" boxSize="35px" />
                  <Text fontSize="3xl"> OTP</Text>
                </Center>
                <Flex justifyContent="center" gap="4" mt="5">
                  <Credit_box_setting title="เครดิตคงเหลือ" credit="0" url="" />
                  <Credit_box_setting
                    title="แพ็คเกต"
                    credit="ยังไม่เปิดใช้งาน"
                    url=""
                  />
                  <PaymentHistory/>
                </Flex>
              </Box>
              <Box className="row justify-content-center">
                <Box className="col-md-8" >
                    <Box mt="10"
                borderWidth="1px"
                bg="#b8e3ff"
                p="2"
                boxShadow="md"
                borderRadius="xl">
                    <Center gap={2} alignItems="center">
                  <Text fontSize="3xl"> เลือกซื้อแพ็คเกจเพิ่มเติม </Text>
                    <Link href="payment/payment_sms">
                        <a className=" min-w-btn2 btn btn-white btn-sm mr5 btn-pum-edit2">
                            <b>ดูแพ็คเก็จ</b>
                        </a>
                    </Link>
                </Center>
                </Box>
                </Box>
              </Box>
            </Box>
            <Box mt='10' className="col-md-12 align-items-end">
                <Text fontSize='md'>หมายเหตุ</Text>
                <UnorderedList>
                    <ListItem>ราคานี้ยังไม่รวมภาษีมูลค่าเพิ่ม 7%</ListItem>
                    <ListItem>กรณีที่ต้องการหักภาษี ณ. ที่จ่าย 3% ต้องซื้อในนามนิติบุคคลเท่านั้น</ListItem>
                    <ListItem>ทางบริษัทไม่สนับสนุนให้ใช้ไปในทางที่ผิดกฏหมาย หากท่านใดนำไปใช้ในทางที่มิชอบในทางกฏหมาย ทางบริษัทฯจะไม่รับผิดชอบและไม่คืนค่าใช้จ่ายใดๆทั้งสิ้น รวมถึงขอสงวนสิทธิ์ระงับให้บริการทุกกรณี หากเกิดคดีความทางกฏหมาย</ListItem>
                </UnorderedList>
            </Box>
          </Box>
        </div>
        </div>
      </Layouts>
    </Fragment>
  );
}
