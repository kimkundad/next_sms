import React, { useState } from "react";
import {
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
  useDisclosure,
  Image
} from "@chakra-ui/react";
import useTable from "@components/hooks/useTable";
import TableFooter from "@components/Table/TableFooter";
import "react-dropdown/style.css";
import CardBlue from "@components/cardBlue";
import Btn_icon_sigle from "@components/Btn_icon_sigle";
import Btn_icon from '@components/Btn_icon';
import Dropzone from "react-dropzone";
import AddOtp from '@components/Modal/addOtp';
import EditOtp from '@components/Modal/editOtp';
import DetailOtp from '@components/Modal/detailOtp';

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = (acceptedFiles) =>
    setFileNames(acceptedFiles.map((file) => file.name));
  return (
    <>
      <div className="page-title">
        <div className="row">
          <div className=" col-md-8">
            <AddOtp/>
          </div>
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
                <th>ชื่อ</th>
                <th>App Key</th>
                <th>สถานะ</th>
                <th className="w-200">จัดการ</th>
              </tr>
            </thead>
            <tbody>
              {slice?.map((el) => (
                <tr key={el.date}>
                  <td>{el.date}</td>
                  <td>{el.name}</td>
                  <td>{el.AppKey}</td>
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
                  <td className="pull-right">
                    <DetailOtp/>
                    <EditOtp/>
                    {el.status == "success" ? (
                    <Btn_icon_sigle
                      icon="/image/icon_3/cancel copy.png"
                      url="#"
                    />
                    ) : (
                    <Btn_icon_sigle
                      icon="/image/icon_3/check copy.png"
                      url="#"
                    />
                    )}
                    <Btn_icon_sigle
                      icon="/image/icon_3/delete.png"
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
