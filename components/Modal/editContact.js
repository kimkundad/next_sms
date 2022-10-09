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
  Flex,
  RadioGroup,
  Stack,
  Radio,
  Checkbox, CheckboxGroup, Link
} from "@chakra-ui/react";
import "@node_modules/flickity/css/flickity.css";
import Dropzone from "react-dropzone";


export default function EditContact(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleDrop = (acceptedFiles) =>
    setFileNames(acceptedFiles.map((file) => file.name));
  return (
    <>
      <a
        onClick={onOpen}
        className="btn_icon_sig btn_radius min-w-btn2 btn btn-white btn-sm mr5"
      >
        <img className="w-20" src="/image/icon_3/edit.png" />
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
            แก้ไขข้อมูลผู้ส่ง
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody background="#d9efff">
            <Box className="form-row">
                <Box className="form-group col-md-6">
                <label >ชื่อ-นามสกุล</label>
                <input type="text" className="form-control in_br" placeholder="ระบุชื่อ-นามสกุล ผู้ใช้งาน"/>
                </Box>
                <Box className="form-group col-md-6">
                <label >E-mail</label>
                <input type="text" className="form-control in_br" placeholder="ระบุ E-mail"/>
                </Box>
            </Box>
            <Box className="row justify-content-center" mt="4">
                <Box className="col-md-9">
                    <Box className="card card_blue3">
                        <Box className="card-body row">
                        <label className="col-md-3 ">ชื่อ-นามสกุล</label>
                        <input type="text" className="col-md-9 form-control in_br" placeholder="ระบุชื่อ-นามสกุล ผู้ใช้งาน"/>
                        </Box>
                    </Box>
                </Box>
                <Box className="col-md-9" mt="5" alignItems='center'>
                    <RadioGroup defaultValue='2'>
                    <Stack spacing={5} direction='row'>
                    <Text>ประเภทการจดทะเบียน</Text>
                        <Radio colorScheme='green' value='1' className="bot_radio">
                        บุคคลธรรมดา
                        </Radio>
                        <Radio colorScheme='green' value='2' className="bot_radio">
                        นิติบุคคล
                        </Radio>
                    </Stack>
                    </RadioGroup>
                    <Box mt="4">
                    <Text>อัพโหลดเอกสารยืนยันตัวตน</Text>
                    <Dropzone
                        onDrop={handleDrop}
                        accept="*"
                        minSize={1024}
                        maxSize={3072000}
                      >
                        {({
                          getRootProps,
                          getInputProps,
                          isDragActive,
                          isDragAccept,
                          isDragReject,
                        }) => {
                          const additionalClass = isDragAccept
                            ? "accept"
                            : isDragReject
                            ? "reject"
                            : "";

                          return (
                            <div
                              {...getRootProps({
                                className: `dropzone ${additionalClass}`,
                              })}
                            >
                              <input {...getInputProps()} />
                              <span className="d-flex justify-content-center">
                                {isDragActive ? (
                                  <img
                                    className="w-50"
                                    src="/image/icon_3/upload (6).png"
                                  />
                                ) : (
                                  <img
                                    className="w-50"
                                    src="/image/icon_3/upload (6).png"
                                  />
                                )}
                              </span>
                              <p>เลือกไฟล์</p>
                            </div>
                          );
                        }}
                      </Dropzone>
                    </Box>
                    <Box mt="4">
                    <Stack spacing={5} direction='row'>
                    <Checkbox colorScheme='green' >
                        ยอมรับ 
                    </Checkbox>
                    <Link href="/term" className="text-primary term_ml">
                        <a>
                            คำยินยอมปฏิบัติตามกฏการสั่งข้อความสั้น (SMS)
                        </a>
                    </Link>
                    </Stack>
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
              แก้ไข
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
