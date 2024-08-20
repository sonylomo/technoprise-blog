import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

const CreatePost = () => {
  return (
    <Box
      as="form"
      maxW={"2xl"}
      boxShadow={"xl"}
      mx={[4, "auto"]}
      p={"6"}
      borderRadius={8}
      gap={6}
      display={"flex"}
      flexDirection={"column"}
      my={[5, 16]}
    >
      <Stack spacing={2}>
        <Heading fontWeight={600} fontSize={"sm"}>
          Create Blog Post
        </Heading>
        <Text fontSize={"sm"} textColor={"gray.neutral"}>
          Enter your blog details here. Click save when you&apos;re done.
        </Text>
      </Stack>

      <FormControl>
        <FormLabel textColor={"gray.neutral"} fontWeight={500} fontSize={"xs"}>
          Blog Title
        </FormLabel>
        <Input type="text" placeholder="Harry Potter" />
      </FormControl>

      <FormControl>
        <FormLabel textColor={"gray.neutral"} fontWeight={500} fontSize={"xs"}>
          Blog Date
        </FormLabel>
        <Input type="date" placeholder="22-02-1998" />
      </FormControl>

      <FormControl>
        <FormLabel textColor={"gray.neutral"} fontWeight={500} fontSize={"xs"}>
          Slug
        </FormLabel>
        <Input type="text" placeholder="harry-potter" />
      </FormControl>

      <FormControl>
        <FormLabel textColor={"gray.neutral"} fontWeight={500} fontSize={"xs"}>
          Cover photo
        </FormLabel>
        <Box height={174}>
          <Flex
            mt={1}
            justify="center"
            px={6}
            pt={5}
            pb={6}
            borderWidth={2}
            borderStyle="dashed"
            rounded="md"
            height={174}
            position={"relative"}
          >
            <Stack spacing={1} textAlign="center" position={"absolute"}>
              <Icon
                mx="auto"
                boxSize={12}
                color="gray.400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12 12V21M12 12L9.49996 14M12 12L14.5 14M5.03396 9.117C4.08817 9.35499 3.26184 9.93016 2.71021 10.7344C2.15859 11.5387 1.91964 12.5168 2.03827 13.4848C2.15689 14.4528 2.62492 15.3442 3.35443 15.9915C4.08393 16.6388 5.02469 16.9974 5.99996 17H6.99996"
                  stroke="#012B55"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.8299 7.138C15.4881 5.78457 14.6445 4.61174 13.47 3.85726C12.2956 3.10277 10.8782 2.82309 9.50517 3.0749C8.13215 3.32672 6.90625 4.09118 6.07598 5.21334C5.2457 6.33549 4.87318 7.73137 5.03392 9.118C5.03392 9.118 5.18692 10 5.49992 10.5"
                  stroke="#012B55"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 17C17.706 16.9995 18.404 16.8495 19.0479 16.5599C19.6917 16.2702 20.267 15.8475 20.7357 15.3195C21.2045 14.7915 21.5561 14.1702 21.7674 13.4965C21.9787 12.8229 22.045 12.1121 21.9618 11.4109C21.8786 10.7098 21.6479 10.0343 21.2848 9.42874C20.9217 8.82321 20.4345 8.30145 19.8552 7.89778C19.276 7.49412 18.6178 7.21772 17.924 7.08676C17.2302 6.9558 16.5166 6.97327 15.83 7.138L14.5 7.5"
                  stroke="#012B55"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </Icon>
              <Flex fontSize="sm" color="gray.600" alignItems="baseline">
                <FormLabel
                  htmlFor="file-upload"
                  cursor="pointer"
                  rounded="md"
                  fontSize={["xs", "md"]}
                  textAlign={"center"}
                  color="brand.600"
                  pos="relative"
                  _hover={{
                    color: "brand.400",
                  }}
                >
                  <span>
                    Please upload images in 100x100 pixels size, in either PNG
                    or JPEG format.
                  </span>
                </FormLabel>
              </Flex>
              <Button
                data-testid="browse-files-button"
                fontSize="sm"
                bg="blue.primary"
                color="white"
                py={[1, 6]}
                borderRadius={4}
                fontWeight={700}
                w={135}
                mx={"auto"}
                _hover={{
                  bg: "transparent",
                  border: "1px",
                  borderColor: "blue.primary",
                  color: "blue.primary",
                }}
              >
                Browse Files
              </Button>
            </Stack>
            <Input
              id="file-upload"
              name="file-upload"
              type="file"
              height={174}
              width="100%"
              border={2}
              borderColor={"pink.600"}
              hidden={true}
              _hover={{
                cursor: "pointer",
              }}
            />
          </Flex>
        </Box>
      </FormControl>

      <FormControl>
        <FormLabel textColor={"gray.neutral"} fontWeight={500} fontSize={"xs"}>
          Content
        </FormLabel>
        <Textarea placeholder="Body" />
      </FormControl>

      <Button
        bg={"gray.secondary"}
        color={"white"}
        _hover={{ bg: "gray.tertiary" }}
        size={"md"}
        borderRadius={4}
        alignSelf={"flex-end"}
        w={"auto"}
      >
        Save Changes
      </Button>
    </Box>
  );
};

export default CreatePost;
