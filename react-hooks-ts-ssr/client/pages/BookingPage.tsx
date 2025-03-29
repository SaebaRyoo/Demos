import React from "react";
import { styles } from "../components/styles";

export const BookingPage: React.FC = () => {
  return (
    <div style={styles.pageContainer}>
      <h1
        style={{ fontSize: "36px", textAlign: "center", marginBottom: "40px" }}
      >
        预订客房
      </h1>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div
          style={{
            backgroundColor: "#f9f9f9",
            padding: "30px",
            borderRadius: "8px",
            marginBottom: "40px",
          }}
        >
          <h2 style={{ fontSize: "24px", marginBottom: "25px" }}>查询空房</h2>

          <form
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
            }}
          >
            <div>
              <label
                htmlFor="checkIn"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "bold",
                }}
              >
                入住日期 *
              </label>
              <input
                type="date"
                id="checkIn"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ddd",
                }}
                required
              />
            </div>

            <div>
              <label
                htmlFor="checkOut"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "bold",
                }}
              >
                退房日期 *
              </label>
              <input
                type="date"
                id="checkOut"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ddd",
                }}
                required
              />
            </div>

            <div>
              <label
                htmlFor="adults"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "bold",
                }}
              >
                成人 *
              </label>
              <select
                id="adults"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ddd",
                }}
                required
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="children"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "bold",
                }}
              >
                儿童
              </label>
              <select
                id="children"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ddd",
                }}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <div style={{ gridColumn: "1 / -1" }}>
              <button
                type="submit"
                style={{
                  ...styles.button,
                  width: "100%",
                  padding: "12px",
                }}
              >
                搜索空房
              </button>
            </div>
          </form>
        </div>

        <h2 style={{ fontSize: "24px", marginBottom: "25px" }}>可选房型</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <div style={{ flex: "0 0 300px" }}>
                <img
                  src="/images/deluxe-room.jpg"
                  alt="豪华客房"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 300px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
                    豪华客房
                  </h3>
                  <p style={{ marginBottom: "10px" }}>
                    宽敞的客房配有特大床和城市美景。
                  </p>
                  <ul style={{ paddingLeft: "20px", marginBottom: "15px" }}>
                    <li>房间面积: 35平方米</li>
                    <li>可住: 2人</li>
                    <li>床型: 特大床</li>
                  </ul>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                    ¥1,200 / 晚
                  </p>
                  <button style={styles.button}>预订此房型</button>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <div style={{ flex: "0 0 300px" }}>
                <img
                  src="/images/suite.jpg"
                  alt="套房"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 300px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
                    高级套房
                  </h3>
                  <p style={{ marginBottom: "10px" }}>
                    豪华套房配有独立起居区和豪华设施。
                  </p>
                  <ul style={{ paddingLeft: "20px", marginBottom: "15px" }}>
                    <li>房间面积: 60平方米</li>
                    <li>可住: 2-3人</li>
                    <li>床型: 特大床 + 沙发床</li>
                  </ul>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                    ¥2,500 / 晚
                  </p>
                  <button style={styles.button}>预订此房型</button>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <div style={{ flex: "0 0 300px" }}>
                <img
                  src="/images/presidential-suite.jpg"
                  alt="总统套房"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                style={{
                  flex: "1 1 300px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
                    总统套房
                  </h3>
                  <p style={{ marginBottom: "10px" }}>
                    我们最豪华的住宿，提供顶级设施和专属服务。
                  </p>
                  <ul style={{ paddingLeft: "20px", marginBottom: "15px" }}>
                    <li>房间面积: 120平方米</li>
                    <li>可住: 4人</li>
                    <li>床型: 2张特大床</li>
                    <li>专属管家服务</li>
                  </ul>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                    ¥5,000 / 晚
                  </p>
                  <button style={styles.button}>预订此房型</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
