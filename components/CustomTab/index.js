import React, { useEffect, Fragment, useState } from "react";
import Head from "next/head";
import Layouts from "@components/layouts/index";
import Card from "@components/card";
import {
  Flex,
  Heading,
  Box,
  Link,
  Spacer,
  Text,
  Input,
  Grid,
  GridItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useTab,
  useMultiStyleConfig,
  Button,
  Center,
  Checkbox,
  CheckboxGrou,
  Stack,
} from "@chakra-ui/react";
import Btn_link from "@components/btn_link";

const CustomTab = React.forwardRef((props, ref) => {
    // 1. Reuse the `useTab` hook
    const tabProps = useTab({ ...props, ref });
    const isSelected = !!tabProps["aria-selected"];

    // 2. Hook into the Tabs `size`, `variant`, props
    const styles = useMultiStyleConfig("Tabs", tabProps);

    return (
      <>
        <Button __css={styles.tab} {...tabProps}>
          <Box as="span" mr="2">
            {isSelected ? (
              <img
                className="w-20  pull-left"
                src="/image/icon_3/check copy.png"
              />
            ) : (
              <i className="fa fa-circle-o "></i>
            )}
          </Box>
          {tabProps.children}
        </Button>
      </>
    );
  });

  CustomTab.displayName = 'CustomTab';

export default CustomTab;