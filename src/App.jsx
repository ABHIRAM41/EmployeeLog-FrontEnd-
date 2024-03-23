import { useState } from "react";

import "./App.css";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Employee from "./Components/Dashboardcomponents/Employee";
import Home from "./Components/Dashboardcomponents/Home";
import CreateEmployee from "./Components/Dashboardcomponents/CreateEmployee";
import Register from "./Components/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Dashboard />}>
          <Route path="employee" element={<Employee />} />
          <Route path="home" element={<Home />} />
          <Route path="createEmployee" element={<CreateEmployee />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
