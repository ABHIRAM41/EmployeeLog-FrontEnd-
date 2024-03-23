import React, { createContext, useContext, useRef, useState } from "react";
import { emp } from "./Components/Dashboardcomponents/Data";
const ContextProvider = createContext();

const ContextAPI = ({ children }) => {
  const [legion, setLegion] = useState("legion");
  const [employee, setEmployee] = useState(emp);
  const index= useRef(emp.length);
  return (
    <ContextProvider.Provider
      value={{ legion, setLegion, employee, setEmployee,index }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export const contextState = () => {
  return useContext(ContextProvider);
};

export default ContextAPI;
