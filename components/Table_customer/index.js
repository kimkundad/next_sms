import React, { useState } from "react";
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
} from "@chakra-ui/react";
import useTable from "@components/hooks/useTable";
import TableFooter from "@components/Table/TableFooter";
import "react-dropdown/style.css";
import CardBlue from "@components/cardBlue";
import Btn_icon from "@components/Btn_icon";
import Dropzone from "react-dropzone";

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = (acceptedFiles) =>
    setFileNames(acceptedFiles.map((file) => file.name));
  return (
    <>
      <div className="page-title">
        <div className="row">
          <div className=" col-md-8">
            <a
              onClick={onOpen}
              className="btn_radius min-w-btn2 btn btn-white btn-sm"
            >
              <img className="w-20 mar-ri-10" src="/image/icon_3/folder.png" />
              <b>เพิ่มแฟ้มรายชื่อ</b>
            </a>
          </div>
          <Modal isOpen={isOpen} size={"xl"} onClose={onClose}>
            <ModalOverlay />
            <ModalContent background="#4bb7ff" rounded="2xl" p="5">
              <ModalHeader
                className="text-center text-white"
                fontSize="2xl"
                p="1"
              >
                เพิ่มแฟ้มรายชื่อ
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody background="#d9efff">
                <FormControl>
                  <FormLabel fontSize="xl">ชื่อแฟ้ม</FormLabel>
                  <Input
                    background="#fff"
                    className="in_br"
                    placeholder="ระบุชื่อแฟ้ม"
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel fontSize="xl">รายละเอียด</FormLabel>
                  <Input
                    background="#fff"
                    className="in_br"
                    placeholder="ระบุรายละเอียด"
                  />
                </FormControl>

                <Tabs variant="soft-rounded" colorScheme="blue" mt="4">
                  <TabList className="d-flex justify-content-center">
                    <Tab>เพิ่มเบอร์โทรศัพท์</Tab>
                    <Tab>เลือกไฟล์</Tab>
                  </TabList>
                  <TabPanels mt="5">
                    <TabPanel p="1">
                      <Textarea
                        className="card_pung"
                        background="#fff"
                        h="150"
                        placeholder="กรอกเบอร์์โทรศัทย์ บรรทัดละ 1 เบอร์"
                        size="sm"
                      />
                    </TabPanel>
                    <TabPanel>
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
                      <div>
                        <strong>Files:</strong>
                        <ul>
                          {fileNames.map((fileName) => (
                            <li key={fileName}>{fileName}</li>
                          ))}
                        </ul>
                      </div>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
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
          <div className=" col-md-4">
            <div className="input-group">
              <span className="set_border none_bor_r input-group-append">
                <button
                  className="btn btn-white none_bor_r btn-rad btn-sm"
                  type="button"
                >
                  <span className="d-flex text-muted">
                    <img
                      className="w-25 mar-ri-10"
                      src="/image/icon_2/search.png"
                    />
                  </span>
                </button>
              </span>
              <input
                type="text"
                className="none_bor_l btn-rad-in form-control form-control-theme form-control-sm search"
                placeholder="ค้นหา"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <CardBlue>
        <div class="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>วันที่</th>
                <th>ชื่อแฟ้ม</th>
                <th>จำนวนเบอร์์</th>
                <th>รายละเอียด</th>
                <th className="w-200">จัดการ</th>
              </tr>
            </thead>
            <tbody>
              {slice?.map((el, indexl) => (
                <tr>
                  <td>{el.date}</td>
                  <td>{el.fileName}</td>
                  <td>{el.sumNumber}</td>
                  <td>{el.detail}</td>
                  <td className="pull-right">
                    <Btn_icon
                      icon="/image/icon_3/edit.png"
                      text="แก้ไข"
                      url="#"
                    />
                    <Btn_icon
                      icon="/image/icon_3/delete.png"
                      text="ลบ"
                      url="#"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBlue>
      <div className="pull-right">
        <TableFooter
          range={range}
          slice={slice}
          setPage={setPage}
          page={page}
        />
      </div>
    </>
  );
};

export default Table;
