import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <Flex justifyContent="space-between" alignItems="center" py={8}>
      <Flex gap={4} alignItems={"center"}>
        <Link href="/" target={"_blank"}>
          <Image w={12} cursor="pointer" src="/logo.png" />
        </Link>
        {/* {NavLinks.map((link, _) => (
          <Link key={_} href={link.href}>
            <Text
              fontSize="lg"
              fontWeight="bold"
              transition={"all 0.15s ease-in-out"}
              color={router.pathname === link.href ? "blue.400" : "white"}
              _hover={{
                color: "blue.400",
                opacity: 0.8,
              }}
            >
              {link.label}
            </Text>
          </Link>
        ))} */}
      </Flex>
      <ConnectButton></ConnectButton>
    </Flex>
  );
}
