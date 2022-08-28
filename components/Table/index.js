import React, { useState } from "react";

import useTable from "@components/hooks/useTable";
import TableFooter from "@components/Table/TableFooter";

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <>
      <div className="page-title">
        <div className="row">
          <div className=" col-md-6">
              <div className="input-group">
                <span className="set_border input-group-append">
                  <button
                    className="btn btn-white btn-rad no-border btn-sm" type="button"
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
                  className="none-bor btn-rad-in form-control form-control-theme form-control-sm search"
                  placeholder="ค้นหา"
                  required
                />
              </div>
          </div>
          <div className=" col-md-6">
            
          </div>
        </div>
      </div>
      <br/>
      <div class="table-responsive">
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
            {slice?.map((el,indexl) => (
              <tr >
                <td>{el.date}</td>
                <td>{el.phone}</td>
                <td>{el.campaign}</td>
                <td>{el.sms}</td>
                <td>{el.owner}</td>
                <td>{el.credit}</td>
                <td>
                  {el.status == "pending" ? (
                    <a className="btn_radius min-w-btn2 btn btn-white btn-sm">
                      <img
                        className="w-20 mar-ri-10"
                        src="/image/icon_2/loading.png"
                      />
                      <b>รอดำเนินการ</b>{" "}
                    </a>
                  ) : el.status == "success" ? (
                    <a className="btn_radius btn btn-white btn-sm">
                      <img
                        className="w-20 mar-ri-10"
                        src="/image/icon_2/check copy.png"
                      />
                      <b>สำเร็จ</b>{" "}
                    </a>
                  ) : (
                    <a className="btn_radius btn btn-white btn-sm">
                      <img
                        className="w-20 mar-ri-10"
                        src="/image/icon_2/cancel copy.png"
                      />
                      <b>ยกเลิก</b>{" "}
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default Table;
