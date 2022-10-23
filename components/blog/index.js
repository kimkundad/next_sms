import React from "react";
import Item_blog from "@components/item_blog/index";
import Link from "next/link";

export default function Blog(props) {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
            <Link href="/blogs">
                <a className="btn_radius btn btn-sm btn-pum pull-right">ดูทั้งหมด</a>
          </Link>
        </div>
        <br/><br/>
      </div>
      <div className="row">
        <Item_blog
          image="img1.png"
          title="SMSPANG กลุ่มเป้าหมายได้ อย่างรวดเร็ว"
          detail="บริการนี้ใช้ได้เฉพราะในเพจสาธารณะ สามารถเติมยอดได้หากอัตราการลดลง มากกว่า 10 เปอร์เซ็นต์ ขึ้นไป การรับประกันจะขาดทันที "
          get_href="detail/115"
        ></Item_blog>
        <Item_blog
          image="img1.png"
          title="SMSPANG กลุ่มเป้าหมายได้ อย่างรวดเร็ว"
          detail="บริการนี้ใช้ได้เฉพราะในเพจสาธารณะ สามารถเติมยอดได้หากอัตราการลดลง มากกว่า 10 เปอร์เซ็นต์ ขึ้นไป การรับประกันจะขาดทันที "
          get_href="detail/115"
        ></Item_blog>
        <Item_blog
          image="img1.png"
          title="SMSPANG กลุ่มเป้าหมายได้ อย่างรวดเร็ว"
          detail="บริการนี้ใช้ได้เฉพราะในเพจสาธารณะ สามารถเติมยอดได้หากอัตราการลดลง มากกว่า 10 เปอร์เซ็นต์ ขึ้นไป การรับประกันจะขาดทันที "
          get_href="detail/115"
        ></Item_blog>
        <Item_blog
          image="img1.png"
          title="SMSPANG กลุ่มเป้าหมายได้ อย่างรวดเร็ว"
          detail="บริการนี้ใช้ได้เฉพราะในเพจสาธารณะ สามารถเติมยอดได้หากอัตราการลดลง มากกว่า 10 เปอร์เซ็นต์ ขึ้นไป การรับประกันจะขาดทันที "
          get_href="detail/115"
        ></Item_blog>
      </div>
    </>
  );
}
