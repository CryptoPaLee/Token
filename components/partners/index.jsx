import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";

const Partners = () => {
  return (
    <Flex flexDir="column">
      <Box
        as={Marquee}
        mb={2}
        gap={5}
        borderRadius={8}
        gradientColor={[0, 255, 153]}
        speed={15}
      >
        {PartnerList.map((partner, index) => (
          <Link key={index} href={partner.href} isExternal>
            <Image src={partner.imgSrc} h={{ base: 50 }} mx={2} />
          </Link>
        ))}
      </Box>
      <Text color="black" fontWeight={800}>
        Partners:
      </Text>
      <Flex flexDir="column" ml={4}>
        {PartnerList.map((partner, index) => (
          <Text color="black" key={index}>
            <Link
              href={partner.href}
              style={{
                textDecoration: "underline",
              }}
            >
              {partner.label}
            </Link>
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};

const PartnerList = [
  {
    label: "NFTEAM",
    href: "https://nfteam.eu/",
    imgSrc: "/partners/nfteam.png",
  },
  {
    label: "AMGDAO",
    href: "https://amgdao.com/",
    imgSrc: "/partners/amg_dao.png",
  },
];

export default Partners;
