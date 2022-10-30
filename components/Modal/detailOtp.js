import React, { Fragment, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Textarea,
  Box,
  Grid,
  Select,
  Text ,
  Center,
  Flex,
  InputGroup ,
  CopyIcon,
  InputRightElement 
} from "@chakra-ui/react";
import "@node_modules/flickity/css/flickity.css";
import Card from "@components/card";
import CardBlue2 from "@components/cardBlue2";
import Table from "@components/table_otp_detail";
import countriesData from "@components/data/optDetail";

export default function DetailOtp(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [countries] = useState([...countriesData]);
  return (
    <>
    <a
        onClick={onOpen}
        className="btn_icon_sig btn_radius min-w-btn2 btn btn-white btn-sm mr5"
      >
        <img className="w-20" src="/image/icon_3/report.png" />
      </a>
      
      <Modal
        isOpen={isOpen}
        size={"xxl"}
        onClose={onClose}
        className="modal-w-otp"
      >
        <ModalOverlay />
        <ModalContent w='800px' background="#4bb7ff" rounded="2xl" p="5">
          <ModalHeader className="text-center text-white" fontSize="2xl" p="1">
            รายงาน OTP
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody background="#fff">
          <Table data={countries} rowsPerPage={10} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
