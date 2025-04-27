import React from "react";
import Navbar from "./components/Navbar";

function AboutPage() {
  return (
    <>
      <Navbar />
      <div style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #d4fc79, #96e6a1)",
        fontFamily: "Arial, sans-serif",
        color: "#333",
        textAlign: "center",
        paddingTop: "80px"
      }}>
        <h1>关于我们</h1>
        <p>了解 Resume Assistant 项目的背景与目标。</p>
      </div>
    </>
  );
}

export default AboutPage;  // ✅ 注意：必须写这一句！！！！


