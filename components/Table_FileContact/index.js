import React, { useState } from "react";
import {
    Box , Image 
  } from "@chakra-ui/react";
import useTable from "@components/hooks/useTable";
import TableFooter from "@components/Table/TableFooter";
import Dropdown from "react-dropdown";
import image_2 from "@public/image/icon_3/calendar.png";
import "react-dropdown/style.css";
import CardBlue from "@components/cardBlue";
import Btn_icon from "@components/Btn_icon";
import CardBlue_h_otp from "@components/CardBlue_h_otp";

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  const options = [
    {
      value: "มีนาคม 2565",
      label: (
        <div>
          <Image  alt="description of image" src={image_2.src} className="pull-left" h="26px" w="26px" /> มีนาคม 2565
        </div>
      ),
    },
    {
      value: "เมษายน 2565",
      label: (
        <div>
          <Image  alt="description of image" src={image_2.src} className="pull-left" h="26px" w="26px" /> เมษายน 2565{" "}
        </div>
      ),
    },
    {
      value: "พฤษภาคม 2565",
      label: (
        <div>
          <Image  alt="description of image" src={image_2.src} className="pull-left" h="26px" w="26px" /> พฤษภาคม 2565{" "}
        </div>
      ),
    },
  ];
  const defaultOption = options[0];
  return (
    <>
      <CardBlue>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>วันที่ส่ง</th>
                <th>หมดอายุ</th>
                <th>เบอร์ผู้รับ</th>
                <th>PIN</th>
                <th>สถานะ</th>
              </tr>
            </thead>
            <tbody>
              {slice?.map((el) => (
                <tr key={el.date}>
                  <td>{el.date}</td>
                  <td>{el.enddate}</td>
                  <td>{el.phone}</td>
                  <td>{el.pin}</td>
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
    </>
  );
};

export default Table;
