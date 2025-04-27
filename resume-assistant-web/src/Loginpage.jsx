import React from "react";
import Navbar from "./components/Navbar";

function LoginPage() {
  return (
    <>
      <Navbar />
      <div style={containerStyle}>
        <h2 style={{ marginBottom: "20px" }}>登录到 Resume Assistant</h2>
        
        <form style={formStyle}>
          <input 
            type="text" 
            placeholder="用户名" 
            style={inputStyle} 
          />
          <input 
            type="password" 
            placeholder="密码" 
            style={inputStyle} 
          />
          <button type="submit" style={buttonStyle}>
            登录
          </button>
        </form>
      </div>
    </>
  );
}

// 页面整体容器
const containerStyle = {
  marginTop: "100px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "Arial, sans-serif",
  color: "#333"
};

// 表单样式
const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  width: "300px"
};

// 输入框样式
const inputStyle = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "1rem"
};

// 登录按钮样式
const buttonStyle = {
  padding: "10px",
  borderRadius: "6px",
  border: "none",
  backgroundColor: "#4f46e5",
  color: "white",
  fontSize: "1rem",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "0.3s",
};

export default LoginPage;
