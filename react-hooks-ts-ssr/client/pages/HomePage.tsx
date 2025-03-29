import React from "react";
import { styles } from "../components/styles";
import { Link } from "react-router-dom";

export const HomePage: React.FC = () => {
  return (
    <>
      <section style={styles.heroSection}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          体验非凡的奢华住宿
        </h1>
        <p
          style={{ fontSize: "20px", maxWidth: "600px", marginBottom: "30px" }}
        >
          我们的梦幻酒店为您提供难忘的住宿体验，结合舒适、豪华与卓越服务
        </p>
        <Link to="/booking" style={styles.button}>
          立即预订
        </Link>
      </section>

      <section style={styles.featuresSection}>
        <h2 style={{ fontSize: "36px", marginBottom: "50px" }}>酒店特色</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div style={styles.featureCard}>
            <img
              src="/images/spa.jpg"
              alt="水疗中心"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
            <h3>豪华水疗中心</h3>
            <p>放松身心，享受我们专业的水疗服务，恢复活力。</p>
          </div>
          <div style={styles.featureCard}>
            <img
              src="/images/restaurant.jpg"
              alt="餐厅"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
            <h3>五星级餐厅</h3>
            <p>由世界级厨师精心准备的美食，为您提供非凡的味觉体验。</p>
          </div>
          <div style={styles.featureCard}>
            <img
              src="/images/pool.jpg"
              alt="游泳池"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
            <h3>无边际泳池</h3>
            <p>俯瞰城市美景，在我们的无边际泳池中畅游。</p>
          </div>
        </div>
      </section>

      <section style={styles.roomsSection}>
        <h2 style={{ fontSize: "36px", marginBottom: "50px" }}>豪华客房</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
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
      </section>

      <section style={styles.contactSection}>
        <h2 style={{ fontSize: "36px", marginBottom: "30px" }}>联系我们</h2>
        <p
          style={{ fontSize: "18px", maxWidth: "600px", margin: "0 auto 30px" }}
        >
          对我们的服务有任何问题？请随时联系我们的客服团队。
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              width: "300px",
            }}
          >
            <h3>地址</h3>
            <p>中国上海市浦东新区世纪大道100号</p>
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              width: "300px",
            }}
          >
            <h3>联系电话</h3>
            <p>+86 21 5888 8888</p>
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              width: "300px",
            }}
          >
            <h3>电子邮件</h3>
            <p>info@dreamhotel.com</p>
          </div>
        </div>
      </section>
    </>
  );
};
