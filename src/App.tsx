import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import Admin from "./pages/admin/Admin";
import GetAuthenticationCode from "./pages/authentication/GetAuthenticationCode";
import GetNewPassword from "./pages/authentication/GetNewPassword";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/getAuthenticationCode" element={<GetAuthenticationCode />} />
        <Route path="/getNewPassword" element={<GetNewPassword />} />
        <Route path="/admin" element={<Admin />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
