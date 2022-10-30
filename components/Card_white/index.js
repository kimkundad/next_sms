import React, { useEffect, useState } from "react";
import {
  Flex,
  Image,
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Stack,
  Spacer,
  Link,
} from "@chakra-ui/react";
export default function Card_white(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [moneyType, setMoneyType] = useState("");
  useEffect(() => {
    setMoneyType(props.type);
  });

  return (
    <Box onClick={onOpen}>
      <div className="card borber_radius_20">
        <div className="card-body text-center">
          <Box align="center" pb="3">
            <Image boxSize="150px" src={props?.img} />
          </Box>
          <Text fontSize="2xl" as="b">
            {props?.title}
          </Text>
        </div>
        {moneyType == "promptpay" ? (
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{props?.title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Stack>
                  <Flex justify="center" bg="#113566">
                    <Image
                      src="/image/thai-payment.png"
                      h="50px"
                      alt="THAI PAYMENT LOGO"
                    />
                  </Flex>
                  <Stack direction="column" justify="center" align="center">
                    <Box>
                      <Image
                        src="/image/prompt-pay-logo.png"
                        h="30px"
                        alt="Prompt Pay Logo"
                      />
                    </Box>
                    <Image
                      src="https://promptpay.io/0902160080/1500.png"
                    />
                  </Stack>
                  <Flex color="black" spacing="0">
                    <Text fontWeight={600}>SEP SOCIAL MEDIA</Text>
                    <Spacer />
                    <Box textAlign="right">
                      <Text fontSize="3xl" fontWeight={600}>
                        จำนวนเงิน {props?.price}{" "}
                      </Text>
                      <Text fontSize="m" mt="-10px">
                        บาท (BAHT)
                      </Text>
                    </Box>
                  </Flex>
                  <Flex justify="center" bg="#02437b">
                    <Image
                      src="/image/1664707105098.jpg"
                      h="50px"
                      alt="THAI PAYMENT LOGO"
                    />
                  </Flex>
                </Stack>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  ยกเลิก
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        ) : (
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{props?.title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Flex justify="center" mb="2">
                  <Text fontSize="2xl">Payment Card</Text>
                  <Image src="/image/icon_2/cards.png" h="30px" />
                </Flex>
                <hr className="hr-grey"></hr>
                <Box h="3"></Box>
                <div className="form-group">
                  <label className="text-muted" >
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Card Number"
                  />
                </div>
                <Box h="2"></Box>
                <div className="form-group">
                  <label className="text-muted">Expiry Date(mm/YYYY)</label>
                  <select className="form-control">
                    <option>MM</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
                <Box h="3"></Box>
                <div className="form-group">
                  <select className="form-control">
                    <option>YYYY</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
                <Box h="3"></Box>
                <div className="form-group">
                  <label className="text-muted">CVV</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="CVV"
                  />
                </div>
                <Box h="3"></Box>
                <Link href="/payment/payment_detail">
                <a className="btn btn-raised btn-wave mb-2  red text-white btn-block">
                  Pay Now 1,0000 THB
                </a>
                </Link>
                <button
                  className="btn  mb-1 btn-outline-dark btn-block"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <div className="text-center">
                  <Flex justify="center">
                    <Image
                      className="h-35"
                      src="/image/icon_2/1657994456512.jpg"
                    />
                  </Flex>
                </div>
                <hr className="hr-grey"></hr>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  ยกเลิก
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </div>
    </Box>
  );
}
