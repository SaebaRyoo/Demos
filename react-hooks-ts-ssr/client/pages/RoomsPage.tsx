import React from "react";
import { styles } from "../components/styles";
import { Link } from "react-router-dom";

export const RoomsPage: React.FC = () => {
  return (
    <div style={styles.pageContainer}>
      <h1
        style={{ fontSize: "36px", textAlign: "center", marginBottom: "40px" }}
      >
        我们的房间
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <div style={styles.roomCard}>
          <img
            src="/images/deluxe-room.jpg"
            alt="豪华客房"
            style={{ width: "100%", height: "250px", objectFit: "cover" }}
          />
          <div style={{ padding: "20px" }}>
            <h3>豪华客房</h3>
            <p>宽敞的客房配有特大床和城市美景。</p>
            <ul style={{ margin: "15px 0", paddingLeft: "20px" }}>
              <li>房间面积: 35平方米</li>
              <li>可住: 2人</li>
              <li>床型: 特大床</li>
              <li>景观: 城市景观</li>
            </ul>
            <p style={{ fontWeight: "bold" }}>¥1,200 / 晚</p>
            <Link
              to="/rooms/deluxe"
              style={{
                ...styles.button,
                width: "100%",
                display: "block",
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              查看详情
            </Link>
          </div>
        </div>

        <div style={styles.roomCard}>
          <img
            src="/images/suite.jpg"
            alt="套房"
            style={{ width: "100%", height: "250px", objectFit: "cover" }}
          />
          <div style={{ padding: "20px" }}>
            <h3>高级套房</h3>
            <p>豪华套房配有独立起居区和豪华设施。</p>
            <ul style={{ margin: "15px 0", paddingLeft: "20px" }}>
              <li>房间面积: 60平方米</li>
              <li>可住: 2-3人</li>
              <li>床型: 特大床 + 沙发床</li>
              <li>景观: 海景</li>
            </ul>
            <p style={{ fontWeight: "bold" }}>¥2,500 / 晚</p>
            <Link
              to="/rooms/suite"
              style={{
                ...styles.button,
                width: "100%",
                display: "block",
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              查看详情
            </Link>
          </div>
        </div>

        <div style={styles.roomCard}>
          <img
            src="/images/presidential-suite.jpg"
            alt="总统套房"
            style={{ width: "100%", height: "250px", objectFit: "cover" }}
          />
          <div style={{ padding: "20px" }}>
            <h3>总统套房</h3>
            <p>我们最豪华的住宿，提供顶级设施和专属服务。</p>
            <ul style={{ margin: "15px 0", paddingLeft: "20px" }}>
              <li>房间面积: 120平方米</li>
              <li>可住: 4人</li>
              <li>床型: 2张特大床</li>
              <li>景观: 全景海景</li>
              <li>专属管家服务</li>
            </ul>
            <p style={{ fontWeight: "bold" }}>¥5,000 / 晚</p>
            <Link
              to="/rooms/presidential"
              style={{
                ...styles.button,
                width: "100%",
                display: "block",
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              查看详情
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
