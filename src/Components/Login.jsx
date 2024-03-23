import {
  Box,
  InputGroup,
  InputRightElement,
  Input,
  Text,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const Login = () => {
  const [reg, setreg] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() == "" || password.trim() == "") {
      toast({
        title: "enter all the details.",
        description: "enter all the details.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else if (password.trim().length < 5) {
      toast({
        title: "password should be at least 5 characters",
        description: "enter all the details. correctly",
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
      if (reg) navigate("/register");
      else navigate("/login");
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
            Login
          </Text>
          <Box display={"flex"} alignItems={"center"} mb={"20px"} gap={"40px"}>
            <Text width={"100px"}>User Name</Text>
            <Input
              type="text"
              placeholder="Enter your username address"
              borderColor={"black.700"}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Box display={"flex"} alignItems={"center"} mb={"20px"} gap={"40px"}>
            <Text width={"100px"}>Password</Text>
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
          <Button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            colorScheme="green"
            justifySelf={"left"}
          >
            Login
          </Button>
          <Link to="/register">
            <Button
              colorScheme="green"
              onClick={() => setreg(true)}
              justifySelf={"left"}
              ml={"10px"}
            >
              Register
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Login;
