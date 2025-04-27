import React from "react";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage"; 
import ChatPage from "./ChatPage";
import AboutPage from "./AboutPage";   // ✅ 注意：不要写 ./components/AboutPage！
import LoginPage from "./Loginpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;



