import React, { useState } from "react";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { contextState } from "../../Contextapi.jsx";
import { emp } from "./Data.js";
const Employee = () => {
  const { employee, setEmployee } = contextState();
  const handleDelete = (id) => {
    const empl = employee.filter((e) => e.id !== id);
    setEmployee(empl);
  };
  return (
    <div>
      <Text m={"20px"} fontSize={"25px"} fontWeight={"500"}>
        EmployeeList
      </Text>
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={"30px"}
        justifyContent={"end"}
        mr={"40px"}
        mb={"30px"}
      >
        <Text>Total Count: {employee.length}</Text>
        <NavLink to="/createEmployee">
          <Button colorScheme={"green"}>Create Employee</Button>
        </NavLink>
      </Box>
      {/* <Box display={"flex"} mb={"30px"} justifyContent={"end"}>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={"30px"}
          mr={"40px"}
          width={"500px"}
        >
          <Text>Search: </Text>
          <Input type="text" placeholder="Enter name or email" />
        </Box>
      </Box> */}
      <Box>
        <Box
          display={"flex"}
          ml={"30px"}
          mb={"18px"}
          justifyContent={"space-between"}
        >
          <Text width={"120px"}>Id</Text>
          <Text width={"120px"}>Name</Text>
          <Text width={"170px"}>Email</Text>
          <Text width={"120px"}>Mobile no</Text>
          <Text width={"120px"}>Designation</Text>
          <Text width={"120px"}>gender</Text>
          {/* <Text width={"120px"}>Course</Text> */}
          <Text width={"200px"}>Action</Text>
        </Box>
        {employee.map((e) => (
          <Box key={e.id}>
            <Box
              display={"flex"}
              ml={"30px"}
              my={"8px"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Text width={"120px"}>{e.id}</Text>
              <Text width={"120px"}>{e.Name}</Text>
              <Text width={"170px"}>{e.Email}</Text>
              <Text width={"120px"}>{e.phone}</Text>
              <Text width={"120px"}>{e.Designation}</Text>
              <Text width={"120px"}>{e.Gender}</Text>
              {/* <Text width={"120px"}>{e.Course}</Text> */}
              <Text width={"200px"} display={"flex"} gap={"30px"}>
                {/* <NavLink to="/createEmployee">
                  <Button colorScheme="yellow">edit</Button>
                </NavLink> */}
                <Button colorScheme="red" onClick={() => handleDelete(e.id)}>
                  delete
                </Button>
              </Text>
            </Box>
            <hr />
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default Employee;
