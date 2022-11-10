import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <NextSeo title="Home" />

      <Box textAlign="center">
        <Heading>Multi Step Form</Heading>
        <Text color="gray">with persisted state between session</Text>
        <Text fontSize="xs" color="gray">
          Powered by react-hook-form + zustand
        </Text>
      </Box>

      <Button as={Link} href="/form/user-data">
        Multi page
      </Button>

      <Button as={Link} href="/form/submission">
        Single page
      </Button>
    </Flex>
  );
};

export default Home;
