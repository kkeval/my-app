import { useAuth } from "../../contexts/AuthContext";
import { Link as ReLink } from "react-router-dom";
import { Button, Text, Flex, Spacer, Heading } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import Profile from "./Profile";

export default function NavBar() {
  const { currentUser } = useAuth();

  return (
    <Flex
      h={{ base: "70", md: "100" }}
      mb={{ base: "20px", md: "6" }}
      alignItems="center"
      justifyContent="center"
    >
      <Heading
        as={ReLink}
        to="/"
        ml="6"
        fontWeight="extrabold"
        fontSize={{ base: "20px", md: "45", lg: "50" }}
        w={{ base: "400", md: "500", lg: "500" }}
      >
        Products
      </Heading>
      <Spacer />
      {!currentUser && (
        <>
          <Button
            colorScheme="light"
            variant="ghost"
            mr={{ base: "1px", md: "6" }}
            fontSize={{ base: "15", md: "20" }}
          >
            <Text
              as={ReLink}
              style={{ textDecoration: "none" }}
              to="/signup"
            >
              Sign Up
            </Text>
          </Button>
          <Button
            colorScheme="light"
            variant="ghost"
            mr={{ base: "1px", md: "6" }}
            fontSize={{ base: "15", md: "20" }}
          >
            <Text as={ReLink} style={{ textDecoration: "none" }} to="/login">
              Login
            </Text>
          </Button>
        </>
      )}
      {currentUser && (
        <>
          <Text
            mr={{ base: "10px", md: "6" }}
            fontSize={{ base: "12px", md: "sm" }}
            color="gray.400"
          >
            {currentUser.email}
          </Text>
          <Profile />
        </>
      )}
      <ColorModeSwitcher
        ml={{ base: "1px", md: "10px" }}
        mr={{ base: "2px", md: "10px" }}
      />
    </Flex>
  );
}
