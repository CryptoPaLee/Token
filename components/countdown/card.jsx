import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Tilt from "react-parallax-tilt";

const CountdownCard = ({ value, label, ...props }) => {
  /* const paddedValue = String(value).padStart(2, "0"); */

  return (
    <Flex
      flex="1"
      bg="#44444450"
      direction="column"
      justify="center"
      align="center"
      py={4}
      px={8}
      borderRadius={8}
      w="100%"
      {...props}
      as={Tilt}
    >
      <Text color="white" fontSize={{ base: "3xl", md: "8xl" }}>
        {value}
      </Text>
      <Text color="white" fontSize={{ base: "xl", md: "3xl" }}>
        {label}
      </Text>
    </Flex>
  );
};

export default CountdownCard;
