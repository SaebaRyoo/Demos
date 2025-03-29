import React from "react";
import { styles } from "../components/styles";

export const ContactPage: React.FC = () => {
  return (
    <div style={styles.pageContainer}>
      <h1
        style={{ fontSize: "36px", textAlign: "center", marginBottom: "40px" }}
      >
        联系我们
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        <div style={{ flex: "1 1 400px", maxWidth: "500px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>联系信息</h2>

          <div style={{ marginBottom: "30px" }}>
            <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>地址</h3>
            <p style={{ lineHeight: "1.6" }}>
              中国上海市浦东新区世纪大道100号
              <br />
              邮编: 200120
            </p>
          </div>

          <div style={{ marginBottom: "30px" }}>
            <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>联系电话</h3>
            <p style={{ lineHeight: "1.6" }}>
              总机: +86 21 5888 8888
              <br />
              预订: +86 21 5888 8000
              <br />
              客服: +86 21 5888 8111
            </p>
          </div>

          <div style={{ marginBottom: "30px" }}>
            <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>电子邮件</h3>
            <p style={{ lineHeight: "1.6" }}>
              一般咨询: info@dreamhotel.com
              <br />
              预订: reservations@dreamhotel.com
              <br />
              客户服务: service@dreamhotel.com
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>营业时间</h3>
            <p style={{ lineHeight: "1.6" }}>
              前台: 24小时
              <br />
              预订办公室: 每日 08:00 - 22:00
              <br />
              客户服务: 每日 08:00 - 22:00
            </p>
          </div>
        </div>

        <div style={{ flex: "1 1 400px", maxWidth: "500px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>给我们留言</h2>

          <form
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <div>
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                }}
              >
                姓名 *
              </label>
              <input
                type="text"
                id="name"
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
                htmlFor="email"
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                }}
              >
                电子邮件 *
              </label>
              <input
                type="email"
                id="email"
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
                htmlFor="phone"
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                }}
              >
                电话
              </label>
              <input
                type="tel"
                id="phone"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ddd",
                }}
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                }}
              >
                主题 *
              </label>
              <input
                type="text"
                id="subject"
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
                htmlFor="message"
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                }}
              >
                留言内容 *
              </label>
              <textarea
                id="message"
                rows={5}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ddd",
                  resize: "vertical",
                }}
                required
              />
            </div>

            <button
              type="submit"
              style={{
                ...styles.button,
                marginTop: "10px",
                width: "100%",
              }}
            >
              提交
            </button>
          </form>
        </div>
      </div>

      <div>
        <h2
          style={{
            fontSize: "24px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          如何到达
        </h2>
        <div
          style={{
            height: "300px",
            backgroundColor: "#f0f0f0",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>这里将显示地图</p>
        </div>

        <div style={{ marginTop: "30px" }}>
          <h3 style={{ fontSize: "18px", marginBottom: "15px" }}>交通指南</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            <div style={{ flex: "1 1 300px" }}>
              <h4 style={{ marginBottom: "10px" }}>从浦东国际机场</h4>
              <p style={{ lineHeight: "1.6" }}>
                乘坐出租车约30分钟，距离约25公里。
                <br />
                乘坐地铁2号线到陆家嘴站，步行5分钟即可到达。
              </p>
            </div>
            <div style={{ flex: "1 1 300px" }}>
              <h4 style={{ marginBottom: "10px" }}>从虹桥国际机场</h4>
              <p style={{ lineHeight: "1.6" }}>
                乘坐出租车约45分钟，距离约20公里。
                <br />
                乘坐地铁2号线到陆家嘴站，步行5分钟即可到达。
              </p>
            </div>
            <div style={{ flex: "1 1 300px" }}>
              <h4 style={{ marginBottom: "10px" }}>从上海火车站</h4>
              <p style={{ lineHeight: "1.6" }}>
                乘坐出租车约20分钟，距离约10公里。
                <br />
                乘坐地铁1号线换乘2号线到陆家嘴站，步行5分钟即可到达。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
