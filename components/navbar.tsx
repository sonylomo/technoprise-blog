"use client";

import { CloseIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReactNode } from "react";
import { useDebouncedCallback } from "use-debounce";

type NavProps = {
  children: ReactNode;
};

const NavBar = ({ children }: NavProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 200);

  return (
    <>
      <Box bg="gray.primary" px={70} py={15} as={"nav"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <Box>
            <Image
              src="/logo.svg"
              alt="Blog Posts Logo"
              width="144"
              height="57"
              priority
            />
          </Box>

          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={8}
              mx={10}
              display={{ base: "none", md: "flex" }}
            >
              <Box
                as="a"
                px={4}
                py={1}
                fontWeight={500}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
                href={"/"}
              >
                Blogs
              </Box>
              <Box>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type="text"
                    placeholder="Search Blog"
                    borderColor={"#000000"}
                    _hover={{
                      borderColor: "#000000",
                    }}
                    onChange={(e) => {
                      handleSearch(e.target.value);
                    }}
                    defaultValue={searchParams.get("query")?.toString()}
                  />
                  <InputRightElement width="4.5rem">
                    <SearchIcon />
                  </InputRightElement>
                </InputGroup>
              </Box>
            </HStack>
            <Button
              variant={"solid"}
              bg={"gray.secondary"}
              color={"white"}
              size={"md"}
              mr={4}
              borderRadius={4}
              _hover={{
                bg: "transparent",
                color: "gray.secondary",
                border: "1px",
                borderColor: "gray.secondary",
              }}
              onClick={() => router.push("/posts/create")}
            >
              Create Blog Post
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Box
              as="a"
              px={4}
              py={1}
              rounded={"md"}
              fontWeight={500}
              _hover={{
                textDecoration: "none",
              }}
              href={"/"}
            >
              Blogs
            </Box>
          </Box>
        ) : null}
      </Box>

      {/* Body */}
      <Box p={4}>{children}</Box>
    </>
  );
};

export default NavBar;
