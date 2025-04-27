import React from "react";
import Navbar from "./components/Navbar"; // 导航栏

function WelcomePage() {
  return (
    <>
      <Navbar />
      <div style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #74ebd5, #ACB6E5)",
        fontFamily: "Arial, sans-serif",
        color: "#333",
        textAlign: "center",
        paddingTop: "80px"
      }}>
        <h1>欢迎使用 Resume Assistant</h1>
        <p>你的智能 AI 面试官助手，帮助你高效提升面试表现。</p>
      </div>
    </>
  );
}

export default WelcomePage;



