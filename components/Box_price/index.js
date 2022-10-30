import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { Box, Center, Button } from "@chakra-ui/react";

export default function Box_price(props) {
  return (
    <>
      <Box
        alignItems='center'
        className="items"
        maxW="sm"
        boxShadow="md"
        borderWidth="1px"
        borderRadius="xl"
        overflow="hidden"
        bg="#fff"
      >
        {props.type == "recommended" && (
          <div className="ribbon_3 popular">
            <span>แนะนำ</span>
          </div>
        )}
        <Box p="1">
          {props.type == "recommended" ? (
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="xl"
              overflow="hidden"
              bg="#4ab7ff"
              pt="2"
              pb="2"
            >
              <Center color="#fff" fontSize="3xl">
                {props.title}
              </Center>
              <Center height="40px" color="#fff" fontSize="5xl">
                {props.price} <span className="bath_sx"> บาท</span>
              </Center>
            </Box>
          ) : (
            <Box
              maxW="sm"
              borderRadius="xl"
              overflow="hidden"
              bg="#fff"
              pt="2"
              pb="2"
            >
              <Center color="#4ab7ff" fontSize="3xl">
                {props.title}
              </Center>
              <Center height="40px" color="#000" fontSize="5xl">
                {props.price} <span className="bath_sx"> บาท</span>
              </Center>
            </Box>
          )}
          <Box p={[2, 4]}>
            <Box borderBottom="1px" borderStyle="dashed" borderColor="gray.200">
              <Center color="#666" fontSize="xl">
                0.79 บาท/ข้อความ
              </Center>
            </Box>
            <Box
              pt="1"
              borderBottom="1px"
              borderStyle="dashed"
              borderColor="gray.200"
            >
              <Center color="#666" fontSize="xl">
                1,500 เครดิต
              </Center>
            </Box>
            <Box
              pt="1"
              borderBottom="1px"
              borderStyle="dashed"
              borderColor="gray.200"
            >
              <Center color="#666" fontSize="xl">
                อายุการใช้งาน 3 เดือน
              </Center>
            </Box>
            <Box
              pt="1"
              borderBottom="1px"
              borderStyle="dashed"
              borderColor="gray.200"
            >
              <Center color="#666" fontSize="xl">
                1 Sender Name
              </Center>
            </Box>
            <Box
              pt="1"
              borderBottom="1px"
              borderStyle="dashed"
              borderColor="gray.200"
            >
              <Center color="#666" fontSize="xl">
                ทีมซัพพอร์ต
              </Center>
            </Box>
            <Box pt="3">
              <Center>
                <Link href="/payment/package">
                <a className="btn_radius pull-right btn btn-sm btn-pum">
                  เลือกแพ็คเกจ{" "}
                </a>
                </Link>
              </Center>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
