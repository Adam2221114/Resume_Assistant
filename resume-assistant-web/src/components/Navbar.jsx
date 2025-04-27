import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={navStyle}>
      
      {/* 左边整体 (Logo + 菜单) */}
      <div style={leftSectionStyle}>
        <div style={logoStyle}>Resume Assistant</div>
        <div style={menuStyle}>
          <Link to="/" style={linkStyle}>首页</Link>
          <Link to="/chat" style={linkStyle}>聊天</Link>
          <Link to="/about" style={linkStyle}>关于</Link>
          <Link to="/login" style={loginButtonStyle}>登录</Link>
        </div>
      </div>

    </nav>
  );
}

// 整个导航栏nav
const navStyle = {
  width: '100%',
  height: '70px',
  background: 'linear-gradient(to right, #6a11cb, #2575fc)',
  display: 'flex',
  alignItems: 'center',
  padding: '0 40px',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000,
  fontFamily: 'Arial, sans-serif',
  boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
};

// 左边整体 (Logo + 菜单)
const leftSectionStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '40px' // Logo 和菜单之间的间距
};

// Logo 样式
const logoStyle = {
  fontSize: '1.8rem',
  fontWeight: 'bold',
  color: 'white',
  textDecoration: 'none'
};

// 菜单区域
const menuStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px'
};

// 普通链接样式
const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.1rem',
  fontWeight: '500',
  transition: '0.3s',
};

// 登录按钮样式
const loginButtonStyle = {
  padding: '6px 14px',
  backgroundColor: 'white',
  color: '#4f46e5',
  borderRadius: '20px',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1rem',
  border: '2px solid white',
  transition: '0.3s',
};

export default Navbar;








