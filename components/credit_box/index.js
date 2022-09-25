import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { Box, Center } from "@chakra-ui/react";

export default function Credit_box(props) {
  return (
    <>
      <Box
        maxW="sm"
        w="280px"
        borderWidth="1px"
        borderRadius="xl"
        overflow="hidden"
        bg="#4bb7ff"
      >
        <Box p="4" color="#fff" fontSize="3xl">
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
              <Box color="#000" fontSize="2xl">
                <Center>{props.credit}</Center>
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
              <Box color="#000" fontSize="3xl">
                <Center>{props.credit}</Center>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}
