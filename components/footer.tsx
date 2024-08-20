import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as={"footer"}
      bg="gray.primary"
      px={[4, 70]}
      py={15}
      justify={"space-between"}
      alignItems={"center"}
      direction={["column", "row"]}
      gap={[4, 0]}
    >
      <Box>
        <Image
          src="/logo.svg"
          alt="Blog Posts Logo"
          width="144"
          height="57"
          priority
        />
      </Box>
      <Box fontWeight={500}>Copyright @{currentYear} . BlogPost</Box>
    </Flex>
  );
};

export default Footer;
