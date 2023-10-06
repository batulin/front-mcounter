import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserStore from "./store/UserStore";
import SidebarIsOpen from "./store/SidebarIsOpen";

const root = ReactDOM.createRoot(document.getElementById('root'));
export const AuthContext = createContext(null);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <AuthContext.Provider value={{
              user: new UserStore(),
              sidebar: new SidebarIsOpen()
          }}>
              <Routes>
                  <Route path="/*" element={<App />} />
              </Routes>
          </AuthContext.Provider>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
