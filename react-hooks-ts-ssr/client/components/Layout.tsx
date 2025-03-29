import React from "react";
import { Link } from "react-router-dom";
import { styles } from "./styles";

interface LayoutProps {
  children: React.ReactNode;
  isServer?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  isServer = false,
}) => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div>
          <h1 style={{ margin: 0, fontSize: "24px" }}>梦幻酒店</h1>
        </div>
        <nav style={styles.navigation}>
          {isServer ? (
            <>
              <a href="/" style={styles.navItem}>
                主页
              </a>
              <a href="/rooms" style={styles.navItem}>
                房间
              </a>
              <a href="/facilities" style={styles.navItem}>
                设施
              </a>
              <a href="/contact" style={styles.navItem}>
                联系我们
              </a>
              <a
                href="/booking"
                style={{
                  ...styles.navItem,
                  backgroundColor: "#e67e22",
                  color: "#fff",
                }}
              >
                立即预订
              </a>
            </>
          ) : (
            <>
              <Link to="/" style={styles.navItem}>
                主页
              </Link>
              <Link to="/rooms" style={styles.navItem}>
                房间
              </Link>
              <Link to="/facilities" style={styles.navItem}>
                设施
              </Link>
              <Link to="/contact" style={styles.navItem}>
                联系我们
              </Link>
              <Link
                to="/booking"
                style={{
                  ...styles.navItem,
                  backgroundColor: "#e67e22",
                  color: "#fff",
                }}
              >
                立即预订
              </Link>
            </>
          )}
        </nav>
      </header>

      <div style={styles.content}>{children}</div>

      <footer style={styles.footer}>
        <p>© 2023 梦幻酒店 版权所有</p>
        <div style={{ marginTop: "20px" }}>
          <span style={{ margin: "0 10px" }}>隐私政策</span>
          <span style={{ margin: "0 10px" }}>条款与条件</span>
          <span style={{ margin: "0 10px" }}>网站地图</span>
        </div>
      </footer>
    </div>
  );
};
