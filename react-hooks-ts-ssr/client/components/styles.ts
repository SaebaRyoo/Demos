import React from "react";

// 定义酒店信息样式接口
export interface StyleProps {
  container: React.CSSProperties;
  header: React.CSSProperties;
  heroSection: React.CSSProperties;
  featuresSection: React.CSSProperties;
  featureCard: React.CSSProperties;
  roomsSection: React.CSSProperties;
  roomCard: React.CSSProperties;
  contactSection: React.CSSProperties;
  footer: React.CSSProperties;
  button: React.CSSProperties;
  navigation: React.CSSProperties;
  navItem: React.CSSProperties;
  content: React.CSSProperties;
  pageContainer: React.CSSProperties;
}

// 定义共用样式
export const styles: StyleProps = {
  container: {
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    color: "#333",
    maxWidth: "100%",
    margin: 0,
    padding: 0,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 50px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 1000,
    boxSizing: "border-box",
  },
  navigation: {
    display: "flex",
    gap: "20px",
  },
  navItem: {
    textDecoration: "none",
    color: "#333",
    fontWeight: 500,
    fontSize: "16px",
    padding: "5px 10px",
    borderRadius: "4px",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  heroSection: {
    height: "100vh",
    backgroundImage: "url(/images/hotel-exterior.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
    padding: "0 20px",
  },
  featuresSection: {
    padding: "80px 50px",
    backgroundColor: "#f9f9f9",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  featureCard: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "30px",
    margin: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    width: "300px",
    textAlign: "center",
  },
  roomsSection: {
    padding: "80px 50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  roomCard: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    width: "350px",
    margin: "15px",
  },
  contactSection: {
    padding: "80px 50px",
    backgroundColor: "#f0f5f9",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#e67e22",
    color: "#fff",
    border: "none",
    padding: "12px 30px",
    borderRadius: "4px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  footer: {
    backgroundColor: "#2c3e50",
    color: "#fff",
    padding: "40px 50px",
    textAlign: "center",
  },
  content: {
    marginTop: "80px", // 为固定的header留出空间
  },
  pageContainer: {
    padding: "40px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
};
