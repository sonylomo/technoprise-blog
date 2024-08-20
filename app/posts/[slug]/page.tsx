"use client";

import { BlogData } from "../../../data/blogData";
import { formatDate } from "../../../lib/formatDate";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Center, Container, Link, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

type BlogDataType = {
  id: number;
  title: string;
  publicationDate: string;
  excerpt: string;
};

const Post = ({ params }: { params: { slug: string } }) => {
  const [post, setPost] = useState<BlogDataType | null>(null);

  useEffect(() => {
    const foundPost = BlogData.find(
      (post) => post.id.toString() === params.slug
    );

    if (foundPost) {
      setPost(foundPost);
    }
  }, [params.slug]);

  if (!post) {
    return <Text>Loading...</Text>;
  }

  return (
    <Container maxW={"1280px"} py={[4, 10]}>
      <Link
        href="/"
        display={"flex"}
        gap={21}
        alignItems={"center"}
        _hover={{ color: "gray.secondary", textDecoration: "underline" }}
      >
        <ArrowBackIcon />
        <Text fontWeight={500}>Back to blog posts</Text>
      </Link>
      <VStack spacing={10} mx={"auto"} pt={[6, 12]}>
        <Box>
          <Text fontWeight={700} fontSize={"4xl"} textAlign={"center"}>
            {post.title}
          </Text>
          <Text textAlign={"center"} mt={4}>
            {formatDate(post.publicationDate)} • 3 min Read
          </Text>
        </Box>
        <Center>
          <Image
            src={"/dummy.png"}
            alt={post.title}
            width={"1168"}
            height="366"
            priority
          />
        </Center>

        <Text py={5} lineHeight={10}>
          {post.excerpt}
        </Text>
      </VStack>
    </Container>
  );
};

export default Post;
