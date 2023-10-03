import {Route, Routes} from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import AuthLayout from "./components/AuthLayout";
import Layout from "./components/Layout";
import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Clients from "./pages/Clients";

function App() {
  return (
      <Routes>
          <Route path="/" element={<AuthLayout/>}>
              <Route path="/clients" element={<Clients/>}/>
              <Route element={<RequireAuth allowedRoles={['ROLE_USER']}/>}>
                  <Route index element={<Home />} />
              </Route>
          </Route>
          <Route path="/login" element={<Layout/>}>
              <Route index element={<Login/>} />
          </Route>
      </Routes>
  );
}

export default App;
