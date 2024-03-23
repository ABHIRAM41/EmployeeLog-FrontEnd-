import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  Button,
  Select,
  RadioGroup,
  Radio,
  Stack,
  Checkbox,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { contextState } from "../../Contextapi";
const CreateEmployee = () => {
  const [value, setValue] = useState("Male");
  const toast = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [designtion, setDesignation] = useState("");
  const [mobileno, setMobileNo] = useState("");
  const { employee, setEmployee,index } = contextState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() == "" ||
      email.trim() == "" ||
      designtion.trim() == "" ||
      mobileno.trim().length != 10 ||
      value.trim() == ""
    ) {
      toast({
        title: "enter all the details. (incorrect entry)",
        description: "(incorrect entry)",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      const n = index.current + 1;
      index.current=n;
      setEmployee((prev) => [
        ...prev,
        {
          id: n,
          Name: name,
          Email: email,
          phone: mobileno,
          Designation: designtion,
          Gender: value,
        },
      ]);
      // console.log(employee, gender);
      navigate("/Employee");
    }
  };

  return (
    <div>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"94.5vh"}
        gap={"30px"}
      >
        <Box width={"600px"}>
          <Text mb={"20px"} fontSize={"35px"} fontWeight={"700"}>
            CreateEmployee
          </Text>
          <Box
            display={"flex"}
            alignItems={"center"}
            mb={"20px"}
            justifyContent={"space-between"}
          >
            <Text width={"140px"}>Name</Text>
            <Input
              type="text"
              placeholder="Enter your Name"
              onChange={(e) => setName(e.target.value)}
              borderColor={"black.700"}
            />
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            mb={"20px"}
            justifyContent={"space-between"}
          >
            <Text width={"140px"}>Email</Text>
            <Input
              type="email"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
              borderColor={"black.700"}
            />
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            mb={"20px"}
            justifyContent={"space-between"}
          >
            <Text width={"140px"}>Mobile</Text>
            <Input
              type="text"
              placeholder="Enter your Mobile number"
              onChange={(e) => setMobileNo(e.target.value)}
              borderColor={"black.700"}
            />
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            mb={"20px"}
            justifyContent={"space-between"}
          >
            <Text width={"140px"}>Designation</Text>
            <Select
              placeholder="Select option"
              borderColor={"black.700"}
              onChange={(e) => {
                if (e.target.value == "option1") setDesignation("Hr");
                if (e.target.value == "option2") setDesignation("Manager");
                if (e.target.value == "option3") setDesignation("Sales");
              }}
            >
              <option value="option1">HR</option>
              <option value="option2">Manager</option>
              <option value="option3">Sales</option>
            </Select>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            mb={"20px"}
            justifyContent={"space-between"}
          >
            <Text width={"140px"}>Gender</Text>
            <RadioGroup onChange={setValue} value={value}>
              <Stack direction="row">
                <Radio value="Male">Male</Radio>
                <Radio value="Female">Female</Radio>
              </Stack>
            </RadioGroup>
          </Box>
          {/* <Box
            display={"flex"}
            alignItems={"center"}
            mb={"20px"}
            justifyContent={"space-between"}
          >
            <Text width={"140px"}>Course</Text>
            <Stack spacing={5} direction="row">
              <Checkbox colorScheme="green">MCA</Checkbox>
              <Checkbox colorScheme="green">BCA</Checkbox>
              <Checkbox colorScheme="green">BSC</Checkbox>
            </Stack>
          </Box> */}
          <Button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            colorScheme="green"
            justifySelf={"left"}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default CreateEmployee;
