import React from "react";
import Link from "next/link";
import { Image } from '@chakra-ui/react'
import {
    Box
  } from "@chakra-ui/react";
export default function Logo() {
  return (
    <Box className="navbar-brand align-self-center">
      <Link href="/">
        <Image className="img-fluid" src='/image/Logo_Pumppang.png' />
      </Link>
    </Box>
  );
}
