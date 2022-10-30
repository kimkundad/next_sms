import React, { Fragment, useState } from "react";
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
  Image,
  Box
} from "@chakra-ui/react";
import "@node_modules/flickity/css/flickity.css";
import Card from "@components/card";
import CardBlue2 from "@components/cardBlue2";
import Table from "@components/table_History";
import blogs_data from "@components/data/blogs";


    const Blog_details = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [blogsData] = useState([...blogs_data]);
  console.log('-xxxxx----', props.id_blog)
  return (
    <>
      <a className="btn_radius btn btn-sm btn-pum" onClick={onOpen}>
        อ่านเพิ่มเติม
      </a>
      <Modal
        isOpen={isOpen}
        size={"xxl"}
        onClose={onClose}
        className="modal-w-otp"
      >
        <ModalOverlay />
        <ModalContent w="800px" background="#4bb7ff" rounded="2xl" p="5">
          <ModalHeader className="text-center text-white" fontSize="2xl" p="1">
            {blogsData[0].name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody background="#fff">
            <Image w='100%' src={"image/" + blogsData[0].image} className="img-fluid"/>
            <Box h='5'/>
          {blogsData[0].detail}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export async function getServerSideProps({ query }) {
    
      return {
        props: {
        }
      }
    }
    
export default Blog_details
