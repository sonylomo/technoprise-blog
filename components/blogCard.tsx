"use client";

import { formatDate } from "../lib/formatDate";
import { Box, Heading, Link, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const BlogCard = ({
  id,
  publicationDate,
  title,
  excerpt,
}: {
  id: number;
  title: string;
  publicationDate: string;
  excerpt: string;
}) => {
  const formattedDate = formatDate(publicationDate);

  return (
    <Link
      data-testid="blog-card"
      href={"/posts/" + id}
      _hover={{
        textDecoration: "none",
        border: "1px",
        borderColor: "black",
      }}
      w={"full"}
      boxShadow={"xl"}
      p={6}
      bg={"gray.try"}
    >
      <Box h={"179px"} mt={-6} mx={-6} mb={6} pos={"relative"}>
        <Image src={"/dummy.png"} fill alt={title} />
      </Box>
      <Stack>
        <Text fontWeight={600} fontSize={"xs"}>
          {formattedDate} · 3 min read
        </Text>

        <Heading fontWeight={700} fontSize={"medium"}>
          {title}
        </Heading>
        <Text noOfLines={3}>{excerpt}</Text>
      </Stack>
    </Link>
  );
};

export default BlogCard;
