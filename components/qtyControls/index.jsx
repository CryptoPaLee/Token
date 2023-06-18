import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const QtyControls = ({ setMintQty, mintQty }) => {
  return (
    <Flex justify={"center"} align={"center"} gap={5}>
      <Flex
        justify={"center"}
        align={"center"}
        bg={"#44444450"}
        cursor={"pointer"}
        h={8}
        w={8}
        borderRadius={5}
        transition={"all 0.15s ease-in-out"}
        onClick={() => {
          if (mintQty > 1) setMintQty(mintQty - 1);
        }}
        userSelect={"none"}
      >
        -
      </Flex>
      <Text>{mintQty}</Text>
      <Flex
        justify={"center"}
        align={"center"}
        bg={"#44444450"}
        cursor={"pointer"}
        h={8}
        w={8}
        borderRadius={5}
        transition={"all 0.15s ease-in-out"}
        onClick={() => {
          if (mintQty < 5) setMintQty(mintQty + 1);
        }}
        userSelect={"none"}
      >
        +
      </Flex>
    </Flex>
  );
};

export default QtyControls;
