import React from 'react'
import { useEffect } from 'react';
import Flickity from 'react-flickity-component'
import Item_flickity from '@components/item_flickity/index';
import '@node_modules/flickity/css/flickity.css'
import {
  Box
} from "@chakra-ui/react";

export default function Flickity1( props ) {

    const flickityOptions = {
        wrapAround:true,
        autoPlay: true
    }


    return (
      <div className='card card_pung'>
        <div className='card-body p-b-25'>
        <Flickity 
        classNameName={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
        >

          <Item_flickity 
            image="img1.png" 
            title="SMSPANG บริการส่งข้อความจำนวนมากเข้าถึงลูกค้า กลุ่มเป้าหมายได้ อย่างรวดเร็ว" 
            detail="บริการนี้ใช้ได้เฉพราะในเพจสาธารณะ สามารถเติมยอดได้หากอัตราการลดลง มากกว่า 10 เปอร์เซ็นต์ ขึ้นไป การรับประกันจะขาดทันที หากจำนวนยอดของคุณ ลดต่ำกว่านับเริ่มต้นคำสั่งหรือถูกเปลี่ยนชื่อ" 
            get_href="detail/115"
          ></Item_flickity>
          <Item_flickity 
            image="img1.png" 
            title="SMSPANG บริการส่งข้อความจำนวนมากเข้าถึงลูกค้า กลุ่มเป้าหมายได้ อย่างรวดเร็ว" 
            detail="บริการนี้ใช้ได้เฉพราะในเพจสาธารณะ สามารถเติมยอดได้หากอัตราการลดลง มากกว่า 10 เปอร์เซ็นต์ ขึ้นไป การรับประกันจะขาดทันที หากจำนวนยอดของคุณ ลดต่ำกว่านับเริ่มต้นคำสั่งหรือถูกเปลี่ยนชื่อ" 
            get_href="detail/115"
          ></Item_flickity>
          <Item_flickity 
            image="img1.png" 
            title="SMSPANG บริการส่งข้อความจำนวนมากเข้าถึงลูกค้า กลุ่มเป้าหมายได้ อย่างรวดเร็ว" 
            detail="บริการนี้ใช้ได้เฉพราะในเพจสาธารณะ สามารถเติมยอดได้หากอัตราการลดลง มากกว่า 10 เปอร์เซ็นต์ ขึ้นไป การรับประกันจะขาดทันที หากจำนวนยอดของคุณ ลดต่ำกว่านับเริ่มต้นคำสั่งหรือถูกเปลี่ยนชื่อ" 
            get_href="detail/115"
          ></Item_flickity>
   
        </Flickity>
        </div>
      </div>
  )
  }
