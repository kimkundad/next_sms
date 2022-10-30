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
  Image 
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
              <Image  alt="description of image" className="w-20 mar-ri-10" src="/image/icon_3/plus.png" />
              <b>เพิ่มเทมเพลตข้อความ</b>
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
                เพิ่มเทมเพลตข้อความ
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
                        <Image  alt="description of image" className="w-50 "
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
          <div className=" col-md-4">
            <div className="input-group">
              <span className="set_border none_bor_r input-group-append">
                <button
                  className="btn btn-white none_bor_r btn-rad btn-sm"
                  type="button"
                >
                  <span className="d-flex text-muted">
                    <Image  alt="description of image" className="w-25 mar-ri-10"
                      src="/image/icon_2/search.png" />
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
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>วันที่</th>
                <th>ชื่อเทมเพลต</th>
                <th>ข้อความ</th>
                <th>จำนวนเครดิต</th>
                <th>หมายเหตุ</th>
                <th className="w-200">จัดการ</th>
              </tr>
            </thead>
            <tbody>
              {slice?.map((el) => (
                <tr key={el.date}>
                  <td>{el.date}</td>
                  <td>{el.nameTemplate}</td>
                  <td>{el.massage}</td>
                  <td>{el.credit}</td>
                  <td>{el.remark}</td>
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
