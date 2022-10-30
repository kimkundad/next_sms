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
      <div className="page-title">
      <CardBlue>
        <div className="row">
          <div className=" col-md-5">
            <CardBlue_h_otp 
            nameApp="ชื่อแอฟ"
            detail="OPT สมัครใช้งานบรอดแคส์ต"
            />
          </div>
          <div className=" col-md-7">
          <CardBlue_h_otp 
            nameApp="ตัวอย่างข้อความ"
            detail="ข้อความก่อนส่งรหัส {xxxx} ข้อความหลังรหัส จะหมดอายุใน 5 นาที (Ref:xxxxx)"
            />
          </div>
        </div>
      </CardBlue>
      </div>

      <CardBlue>
      <div className="row">
          <div className=" col-md-6">
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
          <div className=" col-md-6">
            <div className="d-inline-flex mb-4 toolbar pull-right">
              <Dropdown
                id="dropdown-Nav"
                options={options}
                value={defaultOption}
                placeholder="Select an option"
              />
              <a className="btn_radius min-w-btn2 btn btn-white btn-sm">
                <Image  alt="description of image" className="w-20 mar-ri-10"
                  src="/image/icon_3/cloud-computing.png" />
                <b>ดาวน์โหลดรายงาน</b>{" "}
              </a>
            </div>
          </div>
        </div>
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
                <tr key={el.phone}>
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
      <div className="d-flex justify-content-between">
        <Box >
        <p className="table_bot_text_p ">
          <Image  alt="description of image" className="pull-left w-20 mar-ri-10" src="/image/icon_2/check copy.png"  />
          ส่งสำเร็จ - ส่งข้อความไปถึงผู้รับเรียบร้อย
        </p>
        <p className="table_bot_text_p  mt-1">
          <Image  alt="description of image" className="pull-left w-20 mar-ri-10" src="/image/icon_2/cancel copy.png" />
          ส่งไม่สำเร็จ - ไม่สามารถส่งข้อความไปถึงผู้รับได้ ( เครือข่ายหรือ ระบบ TBS ขัดข้อง,ผู้ส่งอยุ่ใน Blacklist )
        </p>
        <p className="table_bot_text_p  mt-1">
          <Image  alt="description of image" className="pull-left w-20 mar-ri-10" src="/image/icon_2/loading.png" />
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
