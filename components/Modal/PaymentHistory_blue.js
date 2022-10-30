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
import Card from "@components/card";
import CardBlue2 from "@components/cardBlue2";
import Table from "@components/table_History";
import countriesData from "@components/data/payment_history";

export default function PaymentHistory_blue(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [countries] = useState([...countriesData]);
  return (
    <>
    <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="xl"
        overflow="hidden"
        bg="#4bb7ff"
      >
        <Box p="4" color="#fff" fontSize="3xl">
          <Center >ประวัติการสั่งซื้อ</Center>
            <a onClick={onOpen}>
            <Box p="1"
              maxW="sm"
              borderWidth="1px"
              borderRadius="xl"
              overflow="hidden"
              bg="#ecf9ff"
            >
              <Box color="#000" fontSize="2xl" h='35px'>
                <Center pt='1'>คลิกดูประวัติการสั่งซื้อ</Center>
              </Box>
            </Box>
            </a>
            </Box>
            </Box>
      <Modal
        isOpen={isOpen}
        size={"xxl"}
        onClose={onClose}
        className="modal-w-otp"
      >
        <ModalOverlay />
        <ModalContent w='800px' background="#4bb7ff" rounded="2xl" p="5">
          <ModalHeader className="text-center text-white" fontSize="2xl" p="1">
            ประวัติการสั่งซื้อ
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
