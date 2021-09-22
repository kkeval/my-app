import {
  Button,
  chakra,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
  Text,
  Stack,
  Box,
  Flex,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { useState, useRef } from "react";
import { Link as ReLink } from "react-router-dom";
import "firebase/auth";
import "firebase/firestore";

export default function LoginForm() {
  const emailRef = useRef();
  const passRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();



  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passRef.current.value);
      history.push("/");
      console.log("Logged in")
    } catch {
      setError("Password or Email is Wrong!");
    }
    setLoading(false);


    
  }




  return (
    <>
      <chakra.form onSubmit={handleSubmit}>
        <Stack spacing="3">
          {error && (
            <Alert status="error">
              <AlertIcon />
              {error}
            </Alert>
          )}
          {currentUser && (
            <Alert borderRadius="8" status="success">
              <AlertIcon />
              {currentUser.email}
            </Alert>
          )}
          <Box>
            <FormLabel>Email address</FormLabel>
            <Input
              name="email"
              type="email"
              autoComplete="email"
              required
              ref={emailRef}
            />
          </Box>

          <Box>
            <Flex>
              <Box>
                <FormLabel> Password </FormLabel>
              </Box>
              <Spacer />
              <Text
                fontSize="md"
                as={ReLink}
                color={useColorModeValue("blue.500", "blue.200")}
                to="/forgot-password"
                style={{ textDecoration: "none" }}
              >
                Forgot Password?
              </Text>
            </Flex>
            <Input
              name="password"
              type="password"
              ref={passRef}
              autoComplete="password"
              required
              style={{ marginBottom: "10px" }}
            />
          </Box>

          <Button
            type="submit"
            colorScheme="blue"
            size="lg"
            fontSize="md"
            onClick={handleSubmit}
            disabled={loading}
          >
            Log in
          </Button>
        </Stack>
      </chakra.form>
    </>
  );
}
