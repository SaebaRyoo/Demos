import React from "react";
import { styles } from "../components/styles";

export const FacilitiesPage: React.FC = () => {
  return (
    <div style={styles.pageContainer}>
      <h1
        style={{ fontSize: "36px", textAlign: "center", marginBottom: "40px" }}
      >
        酒店设施
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
        <div>
          <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
            豪华水疗中心
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
            <div style={{ flex: "1 1 400px" }}>
              <img
                src="/images/spa.jpg"
                alt="水疗中心"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
            <div style={{ flex: "1 1 400px" }}>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                我们的豪华水疗中心提供全面的放松和恢复服务，包括各种按摩、面部护理和身体护理。
                由专业的水疗师提供服务，使用高品质的产品，让您彻底放松身心。
              </p>
              <ul style={{ paddingLeft: "20px" }}>
                <li>各种专业按摩</li>
                <li>面部和身体护理</li>
                <li>桑拿和蒸汽浴</li>
                <li>水疗池</li>
                <li>冥想和瑜伽课程</li>
              </ul>
              <p style={{ marginTop: "20px" }}>
                <strong>营业时间:</strong> 每日 10:00 - 22:00
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>五星级餐厅</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
            <div style={{ flex: "1 1 400px" }}>
              <img
                src="/images/restaurant.jpg"
                alt="餐厅"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
            <div style={{ flex: "1 1 400px" }}>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                我们的五星级餐厅提供精致的美食体验，由世界级厨师精心准备的菜肴，使用最新鲜的本地和进口食材。
                餐厅提供各种国际美食和当地特色菜肴，满足各种口味。
              </p>
              <ul style={{ paddingLeft: "20px" }}>
                <li>精选国际美食</li>
                <li>本地特色菜肴</li>
                <li>优质葡萄酒和烈酒收藏</li>
                <li>私人用餐区域</li>
                <li>浪漫晚餐设置</li>
              </ul>
              <p style={{ marginTop: "20px" }}>
                <strong>早餐:</strong> 06:30 - 10:30
                <br />
                <strong>午餐:</strong> 12:00 - 14:30
                <br />
                <strong>晚餐:</strong> 18:00 - 22:30
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>无边际泳池</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
            <div style={{ flex: "1 1 400px" }}>
              <img
                src="/images/pool.jpg"
                alt="泳池"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
            <div style={{ flex: "1 1 400px" }}>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                我们的无边际泳池提供壮丽的城市全景，是放松身心、欣赏美景的理想场所。
                泳池区域配有舒适的躺椅和私人凉亭，提供全面的池畔服务。
              </p>
              <ul style={{ paddingLeft: "20px" }}>
                <li>无边际设计</li>
                <li>恒温水控制</li>
                <li>池畔服务</li>
                <li>私人凉亭</li>
                <li>池畔酒吧</li>
              </ul>
              <p style={{ marginTop: "20px" }}>
                <strong>营业时间:</strong> 每日 07:00 - 20:00
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>其他设施</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            <div
              style={{
                backgroundColor: "#f9f9f9",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>健身中心</h3>
              <p>配备最新的健身设备，提供个人培训服务</p>
              <p>
                <strong>营业时间:</strong> 24小时
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#f9f9f9",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>商务中心</h3>
              <p>完善的办公设施，提供会议室和商务服务</p>
              <p>
                <strong>营业时间:</strong> 每日 08:00 - 20:00
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#f9f9f9",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>儿童乐园</h3>
              <p>为小客人提供安全、有趣的活动和游戏</p>
              <p>
                <strong>营业时间:</strong> 每日 09:00 - 18:00
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#f9f9f9",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>礼宾服务</h3>
              <p>为您安排各种服务，包括交通、旅游和票务</p>
              <p>
                <strong>服务时间:</strong> 24小时
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
