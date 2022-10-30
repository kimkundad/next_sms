import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Flex,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

export default function cardBlue(props) {
  return (
    <div className="card card_blue3">
      <div className="card-body">
        <Flex>
          <Box width="100%">
            <FormLabel fontSize="xl">
              {props.nameApp}
            </FormLabel>
            <InputGroup size="md">
              <Input className="in_br" pr="4.5rem" value={props.detail} />
            </InputGroup>
          </Box>
        </Flex>
      </div>
    </div>
  );
}
