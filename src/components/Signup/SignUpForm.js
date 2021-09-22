import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Box,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import * as React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { database } from "../../firebase";
import { useState, useRef } from "react";

export default function SignUpForm() {
  const emailRef = useRef();
  const passRef = useRef();
  const passConRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passRef.current.value !== passConRef.current.value) {
      return setError("Password Does Not Match!");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passRef.current.value).then(
        (cred) => {
          database.ocrdata.doc(cred.user.email).set({
            email: cred.user.email,
            createdAt: database.getCurrentTimestamp(),
            userId: cred.user.uid,
          });
        }
      );
      history.push("/");
    } catch {
      setError("Failed to Create Account!");
    }
    setLoading(false);
  }
  return (
    <>
      <chakra.form onSubmit={handleSubmit}>
        <FormControl>
          <Stack spacing="3">
            {error && (
              <Alert status="error">
                <AlertIcon />
                {error}
              </Alert>
            )}
            <Box>
              <FormLabel>Email address</FormLabel>
              <Input
            
               ref={emailRef} required />
            </Box>
            <Box>
              <FormLabel>Password</FormLabel>
              <Input
               
                ref={passRef}
                autoComplete="password"
                required
              />
            </Box>
            <Box>
              <FormLabel>Re-enter Password</FormLabel>
              <Input
                
                ref={passConRef}
                autoComplete="password"
                required
              />
            </Box>

            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              fontSize="lg"
              onClick={handleSubmit}
              disabled={loading}
            >
              Sign Up
            </Button>
          </Stack>
        </FormControl>
      </chakra.form>
    </>
  );
}
