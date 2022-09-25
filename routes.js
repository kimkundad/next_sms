/*!

=========================================================
* * NextJS Material Dashboard v1.1.0 based on Material Dashboard React v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons


const dashboardRoutes = [
  {
    path: "/",
    name: "หน้าแรก",
    icon: 'admin.png',
    layout: "/dashboard",
  },
  {
    path: "/sms_dashboard",
    name: "SMS",
    icon: 'text-message (1).png',
    layout: "/sms_service",
  },
  {
    path: "/",
    name: "OTP",
    icon: 'mobile.png',
    layout: "/otp_service",
  },
  {
    path: "/payment_sms",
    name: "เติมเครดิต",
    icon: '/credit.png',
    layout: "/payment",
  },
  {
    path: "/",
    name: "ชื่อผู้ส่ง",
    icon: 'group.png',
    layout: "/contact",
  },
  
];

export default dashboardRoutes;
