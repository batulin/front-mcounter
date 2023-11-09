import {Route, Routes} from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import AuthLayout from "./components/AuthLayout";
import Layout from "./components/Layout";
import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Clients from "./pages/Clients";
import Missing from "./pages/Missing";
import Signup from "./pages/Singup";
import Users from "./pages/Users";

function App() {
  return (
    <Routes>
          <Route path="/" element={<AuthLayout/>}>
              {/*<Route element={<RequireAuth allowedRoles={['ROLE_USER']}/>}>*/}
              {/*    <Route path="/clients" element={<Clients/>}/>*/}
              {/*</Route>*/}
              {/*<Route element={<RequireAuth allowedRoles={['ROLE_USER']}/>}>*/}
              {/*    <Route index element={<Home />} />*/}
              {/*</Route>*/}
              {/*<Route element={<RequireAuth allowedRoles={['ROLE_USER']}/>}>*/}
              {/*    <Route path={"/users"} element={<Users />} />*/}
              {/*</Route>*/}
              <Route index element={<Home/>} />

              <Route path="/client" element={<Clients/>} />


          </Route>
          <Route path="/login" element={<Layout/>}>
              <Route index element={<Login/>} />
          </Route>

        <Route path="/signup" element={<Layout/>}>
            <Route index element={<Signup/>} />
        </Route>
          <Route path="*" element={<Missing />} />
      </Routes>
  );
}

export default App;
