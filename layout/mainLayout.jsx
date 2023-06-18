import { Flex, Image } from "@chakra-ui/react";

export default function MainLayout({ children }) {
  return (
    <Flex
      flexDir={"column"}
      p={{ base: 4, xl: 8 }}
      maxW={1440}
      mx={{ base: 2, xl: "auto" }}
      minH={{ base: "100vh", md: "calc(100vh - 48*2px)" }}
      my={{ base: 0, xl: 12 }}
      borderRadius={12}
      className="main-layout"
    >
      {children}
    </Flex>
  );
}
