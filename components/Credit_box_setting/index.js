import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { Box, Center } from "@chakra-ui/react";

export default function Credit_box_settings(props) {
  return (
    <>
      <Box
        maxW="sm"
        w="280px"
        borderWidth="1px"
        borderRadius="xl"
        overflow="hidden"
        bg="#b8e3ff"
      >
        <Box p="4" color="#000" fontSize="2xl">
          <Center>{props.title}</Center>
          {props.url != "" ? (
            <Link href={props.url}>
                <a>
            <Box p="1"
              maxW="sm"
              borderWidth="1px"
              borderRadius="xl"
              overflow="hidden"
              bg="#ecf9ff"
            >
              <Box color="#000" fontSize="xl" h='35px'>
                <Center pt='1'>{props.credit}</Center>
              </Box>
            </Box>
            </a>
            </Link>
          ) : (
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="xl"
              overflow="hidden"
              bg="#ecf9ff"
            >
              <Box color="#000" fontSize="3xl" h='45px'>
                <Center>{props.credit}</Center>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}
