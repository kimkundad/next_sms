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
  Checkbox,
  CheckboxGroup,
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
} from "@chakra-ui/react";
import "@node_modules/flickity/css/flickity.css";
import CardBlue from "@components/cardBlue";
import { useRef } from "react";

export default function FileContact(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [getcheckbox, setGetCheckbox] = useState([]);
  const ref = useRef([]);
  const handleChange = (item) => {
    setGetCheckbox(item);
    console.log(item);
    React.createElement("input", { type: "checkbox", defaultChecked: false });
  };

  const handleClear = () => {
    for (let i = 0; i < ref.current.length; i++) {
      ref.current[i].checked = false;
    }
  };

  const handleOpen = (e) => {};
  return (
    <>
      <a
        onClick={onOpen}
        className={"tb_btn btn_radius btn btn-white btn-sender-fix"}
      >
        เลือกจากแฟ้มรายชื่อ
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
            เลือกจากแฟ้มรายชื่อ
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody background="#d9efff">
            <Box h="5" />
            <div className="card btn_radius mb_0">
              <div className="card-body">
                <div class="table-responsive">
                  <table className="table table-striped get_coloe_2">
                    <thead>
                      <tr>
                        <th>ชื่อแฟ้ม</th>
                        <th>จำนวนเบอร์</th>
                        <th>เลือก</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>ประกันชีวิต/ประกันสุขภาพ/ประกันอุบัติเหตุ</td>
                        <td>273</td>
                        <td>
                        <div class="checkbox">
                            <label class="ui-check ui-check-md">
                              <input type="checkbox" 
                              ref={(element) => {
                              ref.current[0] = element;
                            }}
                            onChange={handleChange}
                            />
                              <i class="dark-white"></i>
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>สินค้าจีน</td>
                        <td>118</td>
                        <td>
                        <div class="checkbox">
                            <label class="ui-check ui-check-md">
                              <input type="checkbox" 
                              ref={(element) => {
                              ref.current[1] = element;
                            }}
                            onChange={handleChange}
                            />
                              <i class="dark-white"></i>
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>CRM ลูกค้าคลินิค</td>
                        <td>82</td>
                        <td>
                        <div class="checkbox">
                            <label class="ui-check ui-check-md">
                              <input type="checkbox" 
                              ref={(element) => {
                              ref.current[2] = element;
                            }}
                            onChange={handleChange}
                            />
                              <i class="dark-white"></i>
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Scoccerbet 888</td>
                        <td>1,752</td>
                        <td>
                        <div class="checkbox">
                            <label class="ui-check ui-check-md">
                              <input type="checkbox" 
                              ref={(element) => {
                              ref.current[3] = element;
                            }}
                            onChange={handleChange}
                            />
                              <i class="dark-white"></i>
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>สินค้าสำเพ็ง ราคาถูก</td>
                        <td>75</td>
                        <td>
                        <div class="checkbox">
                            <label class="ui-check ui-check-md">
                              <input type="checkbox" 
                              ref={(element) => {
                              ref.current[4] = element;
                            }}
                            onChange={handleChange}
                            />
                              <i class="dark-white"></i>
                            </label>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <Flex justify="right">
                    <Button
                      onClick={handleClear}
                      className="btn_cancle"
                      size="xs"
                    >
                      ยกเลิกทั้งหมด
                    </Button>
                  </Flex>
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
              เลือก
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
