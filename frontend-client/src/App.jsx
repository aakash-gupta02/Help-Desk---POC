import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./component/Home";
import UserDashboard from "./pages/UserDashboard";
import TechDashboard from "./pages/TechDashboard"
import OperationsDashboard from "./pages/OpsDashboard";
import AdminDashboard from "./pages/AdminDashboard";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home/> } />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/user/dashboard" element={ <UserDashboard/> } />
        <Route path="/technical/dashboard" element={ <TechDashboard/> } />
        <Route path="/operation/dashboard" element={ <OperationsDashboard/> }  />
        <Route path="/admin/dashboard" element={ <AdminDashboard/> } />


      </Routes>
    </div>
  );
};

export default App;
