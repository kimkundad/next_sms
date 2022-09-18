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
  Text ,
  Center,
  Flex
} from "@chakra-ui/react";
import "@node_modules/flickity/css/flickity.css";

export default function addOtp(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <a
        onClick={onOpen}
        className="btn_radius min-w-btn2 btn btn-white btn-sm"
      >
        <img className="w-20 mar-ri-10" src="/image/icon_3/plus.png" />
        <b>เพิ่มแอป OTP</b>
      </a>
      <Modal
        isOpen={isOpen}
        size={"xl"}
        onClose={onClose}
        className="modal-w-otp"
      >
        <ModalOverlay />
        <ModalContent w='800px' background="#4bb7ff" rounded="2xl" p="5">
          <ModalHeader className="text-center text-white" fontSize="2xl" p="1">
            เพิ่มแอป OTP
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody background="#d9efff">
            <FormControl>
              <FormLabel fontSize="xl">ชื่อแอป OTP</FormLabel>
              <Input
                background="#fff"
                className="in_br"
                placeholder="ระบุเพิ่มแอป OTP"
              />
            </FormControl>
            <div className="row">
              <div className="col-md-6 p-0">
                <FormControl mt={3}>
                  <FormLabel fontSize="xl">ข้อความก่อนเข้ารหัส</FormLabel>
                  <Input
                    background="#fff"
                    className="in_br"
                    placeholder="ระบุข้อความ"
                  />
                </FormControl>
                <FormControl mt={3}>
                  <FormLabel fontSize="xl">ความยาวรหัส OTP</FormLabel>
                  <Select  className="in_br">
                    <option value='4'>4</option>
                    <option value='6'>6</option>
                    </Select>
                </FormControl>
                <FormControl mt={3}>
                  <FormLabel fontSize="xl">ข้อความหลังเข้ารหัส</FormLabel>
                  <Input
                    background="#fff"
                    className="in_br"
                    placeholder="ระบุข้อความ"
                  />
                </FormControl>
                <FormControl mt={3}>
                  <FormLabel fontSize="xl">ระยะเวลาของ OTP</FormLabel>
                  <Select className="in_br">
                    <option value='5' >5 นาที</option>
                    <option value='10'>10 นาที</option>
                    </Select>
                </FormControl>
                <FormControl mt={3}>
                  <FormLabel fontSize="xl">ส่งครั้งถัดไปภายในเวลา</FormLabel>
                  <Select className="in_br">
                    <option value='1'>ไม่มีกำหนด</option>
                    <option value='5'>5 นาที</option>
                    <option value='10'>10 นาที</option>
                    </Select>
                </FormControl>
                <FormControl mt={3}>
                  <FormLabel fontSize="xl">จำนวนครั้งในการกรอก PIN ผิดพลาด</FormLabel>
                  <Select className="in_br">
                    <option value='1'>ไม่มีกำหนด</option>
                    <option value='5'>5 นาที</option>
                    <option value='10'>10 นาที</option>
                    </Select>
                </FormControl>
                <Flex mt={3}>
                    <img className="w-20 mar-ri-10" src="/image/icon_3/check copy.png" />
                    <Text fontSize='xl'> รหัสอ้างอิง</Text>
                </Flex>
              </div>
              <div className="col-md-6 ">
              <Text fontSize='xl' className="text-center" mt={5}> ตัวอย่างข้อความ</Text>
              <img
                      className="flu-id"
                      src="/image/icon_3/preview.png"
                    />
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
              บันทึก
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
