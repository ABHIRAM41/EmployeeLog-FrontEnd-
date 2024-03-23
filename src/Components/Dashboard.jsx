import React from "react";
import NavBar from "./Dashboardcomponents/NavBar";
import { Outlet } from "react-router-dom";
import { Text } from "@chakra-ui/react";
const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
