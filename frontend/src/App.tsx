import './App.css';
import { Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth/AuthPage";
import { SignUp } from "./pages/signup/SignUpPage";
import { Login } from "./pages/login/LoginPage";
import { Home } from "./pages/home/HomePage";
import { Sidebar } from "./components/sidebar";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
        
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App
