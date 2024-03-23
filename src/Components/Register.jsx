import {
  Box,
  InputGroup,
  InputRightElement,
  Input,
  Text,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [rePassword, setRePassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      username.trim() == "" ||
      password.trim() == "" ||
      email.trim() == "" ||
      rePassword.trim() == ""
    ) {
      toast({
        title: "enter all the details.",
        description: "We've created your account for you.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      localStorage.setItem("user", username);
      navigate("/home");
    }
  };
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/home");
    } else {
      navigate("/register");
    }
  }, []);

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
        gap={"30px"}
      >
        <Box width={"600px"}>
          <Text mb={"20px"} fontSize={"35px"} fontWeight={"700"}>
            Register
          </Text>
          <Box display={"flex"} alignItems={"center"} mb={"20px"}>
            <Text width={"150px"}>username</Text>
            <Input
              type="Text"
              placeholder="Enter your email address"
              borderColor={"black.700"}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Box display={"flex"} alignItems={"center"} mb={"20px"}>
            <Text width={"150px"}>Email</Text>
            <Input
              type="email"
              placeholder="Enter your email address"
              borderColor={"black.700"}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box display={"flex"} alignItems={"center"} mb={"20px"}>
            <Text width={"150px"}>Password</Text>
            <InputGroup>
              <Input
                placeholder="Enter your password"
                type={show ? "text" : "password"}
                borderColor={"black.700"}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
          <Box display={"flex"} alignItems={"center"} mb={"20px"}>
            <Text width={"150px"}>Re-password</Text>
            <InputGroup>
              <Input
                placeholder="Enter your password"
                type={show ? "text" : "password"}
                borderColor={"black.700"}
                onChange={(e) => setRePassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
          <Button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            colorScheme="green"
            justifySelf={"left"}
          >
            Register
          </Button>
          <Link to="/login">
            <Button colorScheme="green" justifySelf={"left"} ml={"10px"}>
              login
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Login;
