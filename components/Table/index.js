import React, { useState } from "react";

import useTable from "@components/hooks/useTable";
import TableFooter from "@components/Table/TableFooter";
import Dropdown from "react-dropdown";
import image_2 from "@public/image/icon_3/calendar.png";
import "react-dropdown/style.css";
import CardBlue from "@components/cardBlue";
import Btn_icon from "@components/Btn_icon";
import { Image } from '@chakra-ui/react'

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  const options = [
    {
      value: "มีนาคม 2565",
      label: (
        <div>
          <Image  alt="description of image" className="pull-left" h="26px" w="26px" src={image_2.src} /> มีนาคม 2565
        </div>
      ),
    },
    {
      value: "เมษายน 2565",
      label: (
        <div>
          <Image  alt="description of image" className="pull-left" h="26px" w="26px" src={image_2.src} /> มีนาคม 2565
        </div>
      ),
    },
    {
      value: "พฤษภาคม 2565",
      label: (
        <div>
          <Image  alt="description of image" className="pull-left" h="26px" w="26px" src={image_2.src} /> มีนาคม 2565
        </div>
      ),
    },
  ];
  const defaultOption = options[0];
  return (
    <>
      <div className="page-title">
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
      </div>
      <CardBlue>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>วันที่ส่ง</th>
                <th>เบอร์ผู้รับ</th>
                <th>ชื่อแคมเปญ</th>
                <th>ข้อความ</th>
                <th>ชื่อผู้ส่ง</th>
                <th>เครดิตที่ใช้</th>
                <th>สถานะ</th>
              </tr>
            </thead>
            <tbody>
              {slice?.map((el) => (
                <tr key={el.date}>
                  <td>{el.date}</td>
                  <td>{el.phone}</td>
                  <td>{el.campaign}</td>
                  <td>{el.sms}</td>
                  <td>{el.owner}</td>
                  <td>{el.credit}</td>
                  <td>
                    {el.status == "pending" ? (
                      <Btn_icon 
                      icon="/image/icon_2/loading.png" 
                      text="รอดำเนินการ"
                      url="#"
                      type="pending"
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
        <p className="table_bot_text_p">
          <Image  alt="description of image" className="pull-left w-20 mar-ri-10" src="/image/icon_2/check copy.png"  />
          ส่งสำเร็จ - ส่งข้อความไปถึงผู้รับเรียบร้อย
        </p>
        <p className="table_bot_text_p">
          <Image  alt="description of image" className="pull-left w-20 mar-ri-10" src="/image/icon_2/cancel copy.png" />
          ส่งไม่สำเร็จ - ไม่สามารถส่งข้อความไปถึงผู้รับได้ ( เครือข่ายหรือ ระบบ TBS ขัดข้อง,ผู้ส่งอยุ่ใน Blacklist )
        </p>
        <p className="table_bot_text_p">
          <Image  alt="description of image" className="pull-left w-20 mar-ri-10" src="/image/icon_2/loading.png"  />
          รอดำเนินการ - ระบบกำลังส่งข้อความไปยังผู้รับ
        </p>
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
