import React from "react";
import Btn_sms from "@components/btm_sms";

export default function Btn_header_sms({ children }) {
  return (
    <div className="d-flex">
      <Btn_sms
        btn_text="ภาพรวม"
        btn_url_path="/sms_service"
        btn_url="/sms_dashboard"
      />
      <Btn_sms
        btn_text="ส่งข้อความ"
        btn_url_path="/sms_service"
        btn_url="/sms_sender"
      />
      <Btn_sms
        btn_text="รายงาน"
        btn_url_path="/sms_service"
        btn_url="/sms_report"
      />
      <Btn_sms btn_text="จัดการรายชื่อ" btn_url_path="/sms_service" btn_url="/sms_contact"  />
      <Btn_sms btn_text="เทมเพลตข้อความ" btn_url_path="/sms_service" btn_url="/sms_template" />
    </div>
  );
}
