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
  Text,
  Center,
  Flex,
  InputGroup,
  CopyIcon,
  InputRightElement,
  Image 
} from "@chakra-ui/react";
import "@node_modules/flickity/css/flickity.css";

export default function ConfirmSender(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <a onClick={onOpen} className="btn_radius pull-right btn btn-sm btn-pum">
        ส่งข้อความ
      </a>

      <Modal
        isOpen={isOpen}
        size={"xxl"}
        onClose={onClose}
        className="modal-w-otp"
      >
        <ModalOverlay />
        <ModalContent w="800px" background="#4bb7ff" rounded="2xl" p="5">
          <ModalHeader className="text-center text-white" fontSize="2xl" p="1">
            สรุปรายการส่ง
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody background="#d9efff">
            <Box h="5" />
            <div className="card btn_radius mb_0">
              <div className="card-body">
                <div className="row">
                  <div className=" col-md-7">
                    <Flex justifyContent="center" gap="2">
                      <Box
                        width='50%'
                        p="1"
                        pl="6"
                        pr="6"
                        maxW="sm"
                        borderWidth="1px"
                        borderRadius="xl"
                        overflow="hidden"
                        bg="#ecf9ff"
                        className="text-center"
                      >
                        <Text fontSize="2xl">
                          เครดิตที่ใช้
                        </Text>
                        <Text fontSize="4xl">
                          47
                        </Text>
                      </Box>
                      <Box
                      width='50%'
                        p="1"
                        pl="6"
                        pr="6"
                        maxW="sm"
                        borderWidth="1px"
                        borderRadius="xl"
                        overflow="hidden"
                        bg="#ecf9ff"
                        className="text-center"
                      >
                        <Text fontSize="2xl">
                          จำนวนผู้รับ
                        </Text>
                        <Text fontSize="4xl">
                          47
                        </Text>
                      </Box>
                    </Flex>
                    <Flex justifyContent="center" gap="2" mt='2'>
                      <Box
                        width='50%'
                        p="1"
                        pl="6"
                        pr="6"
                        maxW="sm"
                        borderWidth="1px"
                        borderRadius="xl"
                        overflow="hidden"
                        bg="#ecf9ff"
                        className="text-center"
                      >
                        <Text  as='b' fontSize="xl">
                          ชื่อแคมเปญ
                        </Text>
                        <Text fontSize="xl">
                          03 Jun 2022
                        </Text>
                      </Box>
                      <Box
                      width='50%'
                        p="1"
                        pl="6"
                        pr="6"
                        maxW="sm"
                        borderWidth="1px"
                        borderRadius="xl"
                        overflow="hidden"
                        bg="#ecf9ff"
                        className="text-center"
                      >
                        <Text as='b' fontSize="xl">
                          เครดิตต่อข้อความ
                        </Text>
                        <Text fontSize="xl">
                          1.00
                        </Text>
                      </Box>
                    </Flex>
                    <Flex justifyContent="center" gap="2" mt='2'>
                      <Box
                        width='50%'
                        p="1"
                        pl="6"
                        pr="6"
                        maxW="sm"
                        borderWidth="1px"
                        borderRadius="xl"
                        overflow="hidden"
                        bg="#ecf9ff"
                        className="text-center"
                      >
                        <Text  as='b' fontSize="xl">
                          ชื่อผู้ส่ง
                        </Text>
                        <Text fontSize="xl">
                          SMSPANG
                        </Text>
                      </Box>
                      <Box
                      width='50%'
                        p="1"
                        pl="6"
                        pr="6"
                        maxW="sm"
                        borderWidth="1px"
                        borderRadius="xl"
                        overflow="hidden"
                        bg="#ecf9ff"
                        className="text-center"
                      >
                        <Text as='b' fontSize="xl">
                          เวลาส่ง
                        </Text>
                        <Text fontSize="md">
                        03 Jun 2022 [13:35:20]
                        </Text>
                      </Box>
                    </Flex>
                  </div>
                  <div className=" col-md-5">
                  <Box>
                    <Box maxW="sm"
                    w='70%'
                    className="position_text_example"
        borderRadius="xl"
        overflow="hidden"
        bg="#e2f4fe">
                    <Text fontSize='lg'> โปรโมชั่นพิเศษ 9.9 ลูกค้าเก่าลดทันที 40% คลิ๊ก https://xxxxxxxx.com</Text>
                    </Box>
                    <Image w="100%"
                      className="flu-id"
                      src="/image/icon_3/preview.png" />
                    </Box>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter
            background="#d9efff"
            className="d-flex justify-content-center"
          >
            <Button background="#fff" mr={3} onClick={onClose}>
              ยกเลิก
            </Button>
            <Button
              variant="ghost"
              background="#4bb7ff"
              color="#fff"
              className="submit_btn_mo"
            >
              ยืนยันการส่ง
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
