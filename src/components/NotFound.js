import { Text, Box, Center, Heading, Link } from "@chakra-ui/react";
import React from "react";
import { Link as ReLink } from "react-router-dom";

const NotFound = () => (
  <Center>
    <Box textAlign="center" p={4}>
      <Heading fontSize="50" mb="2">
        404 page not found
      </Heading>
      <Text mb="5">
        We are sorry but the page you are looking for does not exist.
      </Text>
      <Text mb="5" fontSize="20" color="blue.500">
      <Link mr="5"as={ReLink} to="/">
           Home
        </Link>
       
        <Link  mr="5" as={ReLink} to="/signup">
           Signup
        </Link>
       
        <Link as={ReLink} to="/login">
          Login
        </Link>
      </Text>
    </Box>
  </Center>
);

export default NotFound;
