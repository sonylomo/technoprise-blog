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
      mx={"auto"}
      p={"6"}
      borderRadius={8}
      gap={6}
      display={"flex"}
      flexDirection={"column"}
      my={16}
    >
      <Stack spacing={2}>
        <Heading fontWeight={600} fontSize={"sm"}>
          Create Blog Post
        </Heading>
        <Text fontSize={"sm"} textColor={"gray.neutral"}>
          Enter your blog details here. Click save when you're done.
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
                _dark={{
                  color: "gray.500",
                }}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Icon>
              <Flex
                fontSize="sm"
                color="gray.600"
                _dark={{
                  color: "gray.400",
                }}
                alignItems="baseline"
              >
                <FormLabel
                  htmlFor="file-upload"
                  cursor="pointer"
                  rounded="md"
                  fontSize="md"
                  color="brand.600"
                  _dark={{
                    color: "brand.200",
                  }}
                  pos="relative"
                  _hover={{
                    color: "brand.400",
                    _dark: {
                      color: "brand.300",
                    },
                  }}
                >
                  <span>
                    Please upload images in 100x100 pixels size, in either PNG
                    or JPEG format.
                  </span>
                </FormLabel>
              </Flex>
              <Button
                fontSize="sm"
                bg="blue.primary"
                color="white"
                py={6}
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
