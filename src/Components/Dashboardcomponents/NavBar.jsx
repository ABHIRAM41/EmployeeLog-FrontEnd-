import { Box, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";

const NavBar = () => {

  const navigate=useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <Box
      height={"50px"}
      background={"green.200"}
      display={"flex"}
      justifyContent={"space-between"}
    >
      <Box display={"flex"} ml={"30px"} alignItems={"center"} gap={"200px"}>
        <Link to="/home">
          <Text cursor={"pointer"} fontWeight={"600"} fontSize={"20px"}>
            Home
          </Text>
        </Link>
        <Link to={"/employee"}>
          <Text cursor={"pointer"} fontWeight={"600"} fontSize={"20px"}>
            Employee List
          </Text>
        </Link>
      </Box>
      <Box display={"flex"} mr={"30px"} alignItems={"center"} gap={"200px"}>
        <Text cursor={"pointer"} fontWeight={"600"} fontSize={"20px"}>
          Hukum Gupta
        </Text>

        <Text
          onClick={handleLogout}
          cursor={"pointer"}
          fontWeight={"600"}
          fontSize={"20px"}
        >
          Logout
        </Text>
      </Box>
    </Box>
  );
};

export default NavBar;
