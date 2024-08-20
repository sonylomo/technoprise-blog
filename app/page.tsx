"use client";

import {
  ArrowBackIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Container,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { Suspense, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import BlogCard from "../components/blogCard";
import { BlogData } from "../data/blogData";

const POSTS_PER_PAGE = 6;

const Home = ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const pathname = usePathname();
  const { replace } = useRouter();

  const [currentPage, setCurrentPage] = useState(
    Number(searchParams?.page) || 1
  );
  const query = searchParams?.query || "";

  const filteredPosts = BlogData.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;

  const selectedPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  const totalPages = query
    ? Math.ceil(selectedPosts.length / POSTS_PER_PAGE)
    : Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container as={"main"} maxW={"1280px"}>
        {/* {Only appears when you start searching} */}
        {query && (
          <>
            <Link
              href="/"
              display={"flex"}
              gap={21}
              alignItems={"center"}
              _hover={{ color: "gray.secondary", textDecoration: "underline" }}
              py={10}
            >
              <ArrowBackIcon />
              <Text fontWeight={500}>Back to blog posts</Text>
            </Link>
            <VStack mx={"auto"} spacing={8}>
              <Text fontWeight={700} fontSize={32}>
                Search Blogs
              </Text>

              <InputGroup size="lg" mx={"auto"} w={540}>
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
                  defaultValue={query}
                />
                <InputRightElement width="4.5rem">
                  <SearchIcon />
                </InputRightElement>
              </InputGroup>

              <Text fontWeight={700}>
                Showing {selectedPosts.length} Results of{" "}
                <strong>&quot;{query}&quot;</strong>
              </Text>
            </VStack>
          </>
        )}

        <Box py={10}>
          <Text fontWeight={700} fontSize={"4xl"}>
            The Accessibility Blog
          </Text>
          <Text>The voice of the excluded</Text>
        </Box>
        <SimpleGrid columns={{ sm: 2, lg: 3 }} gap={{ base: 10, lg: 20 }}>
          {selectedPosts.map(({ id, title, publicationDate, excerpt }) => (
            <BlogCard
              key={id}
              id={id}
              title={title}
              publicationDate={publicationDate}
              excerpt={excerpt}
            />
          ))}
        </SimpleGrid>

        {/* Pagination */}
        <Center gap={10} py={[10, 20]} mx={"auto"}>
          <Button
            aria-label="Previous page"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            bg={"transparent"}
            border={"1px"}
            borderColor={"#012B55"}
            borderRadius={4}
            px={1}
            _hover={{ bg: "black", color: "white", borderColor: "white" }}
          >
            <ChevronLeftIcon w={13} h={13} />
          </Button>
          <Text>
            Page {currentPage} of {totalPages}
          </Text>
          <Button
            aria-label="Next page"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            bg={"transparent"}
            border={"1px"}
            borderColor={"#012B55"}
            borderRadius={4}
            px={1}
            _hover={{ bg: "black", color: "white", borderColor: "white" }}
          >
            <ChevronRightIcon />
          </Button>
        </Center>
      </Container>
    </Suspense>
  );
};

export default Home;
