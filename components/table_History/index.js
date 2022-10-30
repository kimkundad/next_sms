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
  Box
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
      <CardBlue>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>วันที่</th>
                <th>รหัสคำสั่งซื้อ</th>
                <th>แพ็คเกจ</th>
                <th>จำนวนเงิน</th>
                <th>สถานะ</th>
              </tr>
            </thead>
            <tbody>
              {slice?.map((el) => (
                <tr key={el.date}>
                  <td>{el.date}</td>
                  <td>{el.invoid}</td>
                  <td>{el.package}</td>
                  <td>{el.credit}</td>
                  <td>
                    {el.status == "pending" ? (
                      <Btn_icon 
                      icon="/image/icon_2/loading.png" 
                      text="รอดำเนินการ"
                      url="#"
                      />
                    ) : el.status == "success" ? (
                      <Btn_icon 
                      icon="/image/icon_2/check copy.png" 
                      text="สำเร็จ"
                      url="#"
                      />
                    ) : (
                      <Btn_icon 
                      icon="/image/icon_2/cancel copy.png" 
                      text="ยกเลิก"
                      url="#"
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBlue>
      <div className="d-flex justify-content-between">
        <Box >
        <p className="table_bot_text_p ">
          <img className="pull-left w-20 mar-ri-10" src="/image/icon_2/check copy.png" />
          ส่งสำเร็จ - ส่งข้อความไปถึงผู้รับเรียบร้อย
        </p>
        <p className="table_bot_text_p  mt-1">
          <img className="pull-left w-20 mar-ri-10" src="/image/icon_2/cancel copy.png" />
          ส่งไม่สำเร็จ - ไม่สามารถส่งข้อความไปถึงผู้รับได้ ( เครือข่ายหรือ ระบบ TBS ขัดข้อง,ผู้ส่งอยุ่ใน Blacklist )
        </p>
        <p className="table_bot_text_p  mt-1">
          <img className="pull-left w-20 mar-ri-10" src="/image/icon_2/loading.png" />
          รอดำเนินการ - ระบบกำลังส่งข้อความไปยังผู้รับ
        </p>
        </Box>
        <div className="pull-right">
          <TableFooter
            range={range}
            slice={slice}
            setPage={setPage}
            page={page}
          />
        </div>
      </div>
    </>
  );
};

export default Table;
