import React, { Fragment, useState } from "react";
import Head from "next/head";
import Layouts from "@components/layouts/index";
import Card from "@components/card";
import Link from "next/link";
import { Flex, Center, Grid, Box, Text, Image } from "@chakra-ui/react";

export default function Contact_us() {
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
          <Flex direction="column" gap="4" p="4">
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <Box>
                <Center>
                  <Text fontSize="4xl">ติดต่อแอดมิน</Text>
                </Center>
                <Flex pl="10px" pt="10px">
                  <Image src="/image/icon_3/placeholder.png" boxSize="30px" />
                  <Text pl="10px" fontSize="2xl">
                    บริษัท บีทีวาย มาร์เก็ตติ้ง จำกัด 9/84 ซอย 12 ถนนลงหาดบางแสน
                    ตำบลแสนสุข อำเภอเมืองชลบุรี จังหวัดชลบุรี 20130
                  </Text>
                </Flex>
                <Flex pl="10px" pt="10px">
                  <Image src="/image/icon_3/phone-call.png" boxSize="30px" />
                  <Text pl="10px" fontSize="2xl">
                    087-135-2410 ( คุณต๊อบ )
                  </Text>
                </Flex>
                <Flex pl="10px" pt="10px">
                  <Image src="/image/icon_3/world.png" boxSize="30px" />
                  <Text pl="10px" fontSize="2xl">
                    www.smspang.com
                  </Text>
                </Flex>
                <Flex pl="10px" pt="10px">
                  <Image src="/image/icon_3/email.png" boxSize="30px" />
                  <Text pl="10px" fontSize="2xl">
                    smspang@gmail.com
                  </Text>
                </Flex>
                <Flex pl="10px" pt="10px">
                  <Image src="/image/icon_3/stopwatch.png" boxSize="30px" />
                  <Text pl="10px" fontSize="2xl">
                    ทุกวัน 09.00 น. - 23.00 น.
                  </Text>
                </Flex>
              </Box>
              <Box>

              <Center alignItems='center'>
                <Box borderWidth="1px"
                p="4"
                borderRadius="xl"
                overflow="hidden"
                bg="#b8e3ff">
                    <Image src="/image/icon_3/qr-code.svg" boxSize="240px" />
                    
                </Box>
              </Center>
              <Center alignItems='center'>
              <Flex pl="10px" pt="10px">
                  <Image src="/image/icon_3/facebook.png" boxSize="30px" />
                  <Link href='#' >
                <a>
                 <Text fontSize='3xl' as='b' pl='10px' color='#000'> smspang</Text>
                </a>
                </Link>
                </Flex>
              </Center>
              
              <Center alignItems='center'>
              <Flex pl="10px" pt="10px">
                  <Image src="/image/icon_3/line.png" boxSize="30px" />
                  <Link href='#' >
                <a>
                 <Text fontSize='3xl' as='b' pl='10px' color='#000'> @smspang</Text>
                </a>
                </Link>
                </Flex>
              </Center>
                
              </Box>
            </Grid>
          </Flex>
        </div>
        </div>
      </Layouts>
    </Fragment>
  );
}
