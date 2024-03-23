import React, { useContext } from "react";
import { Text } from "@chakra-ui/react";
import { contextState } from "../../Contextapi";
const Home = () => {
  const{ legion} =contextState();
  return (
    <div>
      <Text
        fontSize={"40px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"94.5vh"}
      >
        Welcome Admin Panel {legion}
      </Text>
    </div>
  );
};

export default Home;
