import { Route, Routes } from "react-router-dom";
import './App.css';
import { Auth } from "./pages/auth/AuthPage";
import { SignUp } from "./pages/signup/SignUpPage";
import { Login } from "./pages/login/LoginPage";
import { Home } from "./pages/home/HomePage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
