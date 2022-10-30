import React from "react";
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
  Link,
  Image,
} from "@chakra-ui/react";

export default function EditProfile(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
        <a onClick={onOpen} className=" min-w-btn2 btn btn-white btn-sm mr5 btn-pum-edit">
          <img className="w-20 mar-ri-10" src="/image/icon_3/edit.png" />
          <b>แก้ไข</b>
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
            แก้ไขโปรไฟล์
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody background="#d9efff">
            <Box className="row">
              <Box className="col-md-6 ">
                <Center mt="5">
                  <Image src="/image/icon_3/user.png" h="200px" />
                </Center>
                <Box mt="5" className="d-flex justify-content-center">
                  <Button
                    variant="ghost"
                    background="#4bb7ff"
                    color="#fff"
                    className="submit_btn_small"
                  >
                    เปลี่ยนรูปโปรไฟล์
                  </Button>
                </Box>

                <Text fontSize="3xl" mt="4">
                  เปลี่ยนชื่อผู้ใช้งาน
                </Text>
                <Box
                  borderWidth="1px"
                  bg="#ebf9ff"
                  p="3"
                  boxShadow="md"
                  borderRadius="xl"
                >
                  <FormControl mt={3}>
                    <Input
                      background="#fff"
                      className="in_br"
                      value="Kim kundad"
                    />
                  </FormControl>
                  <Box mt="5" className="d-flex justify-content-center">
                    <Button
                      variant="ghost"
                      background="#4bb7ff"
                      color="#fff"
                      className="submit_btn_small"
                    >
                      ยืนยัน
                    </Button>
                  </Box>
                </Box>
              </Box>
              <Box className="col-md-6 ">
                <Text fontSize="3xl" mt="10">
                  เปลี่ยนรหัสผ่าน
                </Text>
                <Box
                  borderWidth="1px"
                  bg="#ebf9ff"
                  p="3"
                  boxShadow="md"
                  borderRadius="xl"
                >
                  <FormControl mt={3}>
                    <FormLabel fontSize="xl">รหัสผ่านปัจจุบัน</FormLabel>
                    <Input background="#fff" className="in_br" />
                  </FormControl>
                  <FormControl mt={3}>
                    <FormLabel fontSize="xl">รหัสผ่านใหม่</FormLabel>
                    <Input background="#fff" className="in_br" />
                  </FormControl>
                  <FormControl mt={3}>
                    <FormLabel fontSize="xl">ยืนยันรหัสผ่านใหม่</FormLabel>
                    <Input background="#fff" className="in_br" />
                  </FormControl>
                  <Box mt="5" className="d-flex justify-content-center">
                    <Button
                      variant="ghost"
                      background="#4bb7ff"
                      color="#fff"
                      className="submit_btn_small"
                    >
                      ยืนยัน
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
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
              ยืนยัน
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
