import { Flex, Icon, Link, Text } from "@chakra-ui/react";
import React from "react";
import { BsDiscord, BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = ({...props}) => {
  return (
    <Flex
      mt={{ base: 8, lg: "auto" }}
      flexDir={{
        base: "column",
        md: "row",
      }}
      gap={{ base: 8, md: 0 }}
      justify="space-between"
      align="center"
      {...props}
    >
      <Flex>
        <Text fontWeight={600}>© 2023 TIPONT. All rights reserved.</Text>
      </Flex>
      <Flex gap={5}>
        {SocialLinks.map((link, index) => (
          <Link key={index} href={link.href} isExternal>
            <Icon
              as={link.icon}
              w={8}
              h={8}
              color="white"
              _hover={{
                color: link.color,
              }}
              transition={"all 0.15s ease-in-out"}
            />
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

const SocialLinks = [
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: BsTwitter,
    color: "#00ACEE",
  },
  {
    label: "Discord",
    href: "https://discord.gg",
    icon: BsDiscord,
    color: "#5865F2",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    icon: BsFacebook,
    color: "#3b5998",
  },
];

export default Footer;
