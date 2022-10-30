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
  Box,
  Center,
  Flex,
  Button ,
  FormControl ,
  FormLabel ,
  Input ,
  Textarea ,
  Image
} from "@chakra-ui/react";
import "@node_modules/flickity/css/flickity.css";

export default function Save_template(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    <Flex justify="right">
                    <Button mt='2'  onClick={onOpen}
                      className="btn_cancle"
                      size="xs"
                    >
                      บันทึกเทมเพลต
                    </Button>
                  </Flex>
    <Modal isOpen={isOpen} size={"xl"} onClose={onClose}>
            <ModalOverlay />
            <ModalContent background="#4bb7ff" rounded="2xl" p="5">
              <ModalHeader
                className="text-center text-white"
                fontSize="2xl"
                p="1"
              >
                บันทึกเทมเพลตข้อความ
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody background="#d9efff">
                <FormControl>
                  <FormLabel fontSize="xl">ชื่อเทมเพลต</FormLabel>
                  <Input
                    background="#fff"
                    className="in_br"
                    placeholder="ระบุชื่อเทมเพลต"
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel fontSize="xl">ข้อความ</FormLabel>
                  <Textarea
                        className="card_pung"
                        background="#fff"
                        h="150"
                        placeholder="ระบุข้อความ"
                        size="sm"
                      />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel fontSize="xl">หมายเหตุ</FormLabel>
                  <Input
                    background="#fff"
                    className="in_br"
                    placeholder="ระบุหมายเหตุ"
                  />
                </FormControl>
                <div className="text-center mt-4">
                <button className="btn btn-sender-fix btn_radius mb-1 btn-md btn-white">
                    <div className="d-flex">
                      <span>
                        <Image className="w-50 "
                          src="/image/icon_3/text-message (1).png" />
                      </span>
                      <div className="mx-3 ">
                        <strong className="phone_item_new">
                          จำนวนเครดิตที่ใช้
                        </strong>
                        <small className="strong_new_price">2</small>
                      </div>
                    </div>
                  </button>
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
