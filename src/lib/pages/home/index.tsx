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
        <Text>with persisted state between session</Text>
        <Text fontSize="xs">Powered by react-hook-form + zustand</Text>
      </Box>

      <Button as={Link} href="/form/user-data">
        Enter form
      </Button>
    </Flex>
  );
};

export default Home;
