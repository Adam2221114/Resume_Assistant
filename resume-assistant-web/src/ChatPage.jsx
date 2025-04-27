import React from "react";
import Navbar from "./components/Navbar"; // 导航栏

function ChatPage() {
  return (
    <>
      <Navbar />
      <div style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #fbc2eb, #a6c1ee)",
        fontFamily: "Arial, sans-serif",
        color: "#333",
        textAlign: "center",
        paddingTop: "80px"
      }}>
        <h1>聊天界面</h1>
        <p>在这里与智能面试官进行对话！</p>
      </div>
    </>
  );
}

export default ChatPage;

