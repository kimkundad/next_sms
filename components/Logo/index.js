import React from "react";
import Link from "next/link";
import {
    Box
  } from "@chakra-ui/react";
export default function Logo() {
  return (
    <Box className="navbar-brand align-self-center">
      <Link href="/">
        <img src="/image/Logo_Pumppang.png" className="img-fluid" />
      </Link>
    </Box>
  );
}
