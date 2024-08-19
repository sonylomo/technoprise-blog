"use client";

import { BlogData } from "@/data/blogData";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Center, Container, Link, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

const Post = ({ params }: { params: { slug: number } }) => {
  console.log(params);
  return (
    <Container maxW={"1280px"} py={10}>
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
      <VStack spacing={10} mx={"auto"} pt={12}>
        <Box>
          <Text fontWeight={700} fontSize={"4xl"} textAlign={"center"}>
            Understanding Compensatory Damages in an ADA Context
          </Text>
          <Text textAlign={"center"} mt={4}>
            Dec 2023 • 5 min Read
          </Text>
        </Box>
        <Center>
          <Image
            src="/dummy.png"
            alt={"Blog Post Image"}
            width={"1168"}
            height="366"
            priority
          />
        </Center>

        <Text py={5} lineHeight={10}>
          In ADA cases, prevailing plaintiffs are often awarded what’s known as
          compensatory damages. These, along with punitive damages, help make up
          the sum of penalties owed by defendants found guilty of ADA
          violations. In this piece, we will provide a brief introduction to
          compensatory damages and the role they serve in ADA cases. What are
          compensatory damages? The Equal Employment Opportunity Commission
          (EEOC) defines compensatory damages as legal damages that “pay victims
          for out-of-pocket expenses caused by the discrimination (such as costs
          associated with a job search or medical expenses).” The EEOC also
          explains that compensatory damages may also cover “any emotional harm
          suffered (such as mental anguish, inconvenience, or loss of enjoyment
          of life).” To put it another way, compensatory damages cover the
          financial costs that a prevailing plaintiff suffers as a result of a
          claimed offense. Are there damages other than compensatory?
          Compensatory damages differ from punitive damages. Punitive damages
          serve the sole purpose of reprimanding a defendant. The logic behind
          these damages is that they will deter the guilty defendant from
          committing similar future offenses. The different kinds of
          compensatory damages There are two kinds of compensatory damages. The
          first is special damages. Special damages refer to easily calculable
          damages. Medical bills, for instance, count as an easily calculable
          amount because their value is confirmed. The other kind of
          compensatory damages is what’s known as general damages. These refer
          to reparations for items such as pain, suffering, and emotional
          well-being. These damages are difficult to calculate as the amount
          required to satisfy them is much more subjective than in special
          damages.
        </Text>
      </VStack>
    </Container>
  );
};

export default Post;


// export const generateStaticParams = () => {
//   return BlogData.map(({ id }) => ({
//     slug: id,
//   }));
// };