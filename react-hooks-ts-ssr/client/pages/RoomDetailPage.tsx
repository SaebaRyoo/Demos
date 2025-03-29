import React from "react";
import { useParams, Link } from "react-router-dom";
import { styles } from "../components/styles";

// 房间数据
const roomsData = {
  deluxe: {
    title: "豪华客房",
    price: 1200,
    description:
      "我们的豪华客房提供舒适的住宿体验，适合商务旅行或短期休闲。房间内配有特大床、豪华浴室和所有现代设施，确保您的住宿舒适便利。",
    area: "35平方米",
    capacity: "2人",
    bed: "特大床",
    view: "城市景观",
    amenities: [
      "高速Wi-Fi",
      "42英寸智能电视",
      "迷你吧",
      "保险箱",
      "空调",
      "24小时客房服务",
      "豪华洗浴用品",
      "浴袍和拖鞋",
    ],
    image: "/images/deluxe-room.jpg",
  },
  suite: {
    title: "高级套房",
    price: 2500,
    description:
      "我们的高级套房提供宽敞的空间和豪华设施，适合需要额外空间的客人或小型家庭。套房包括一间带特大床的卧室和一个独立的起居区，配有舒适的沙发床。",
    area: "60平方米",
    capacity: "2-3人",
    bed: "特大床 + 沙发床",
    view: "海景",
    amenities: [
      "高速Wi-Fi",
      "55英寸智能电视",
      "完整迷你吧",
      "保险箱",
      "中央空调",
      "24小时客房服务",
      "高档洗浴用品",
      "浴袍和拖鞋",
      "音响系统",
      "咖啡机",
      "起居区",
      "餐桌",
    ],
    image: "/images/suite.jpg",
  },
  presidential: {
    title: "总统套房",
    price: 5000,
    description:
      "我们最豪华的住宿选择，总统套房为您提供无与伦比的奢华体验。这个套房包括两间卧室、一个宽敞的起居区、一个私人用餐区和一个办公区。总统套房的客人还可以享受专属管家服务和各种定制服务。",
    area: "120平方米",
    capacity: "4人",
    bed: "2张特大床",
    view: "全景海景",
    amenities: [
      "高速Wi-Fi",
      "多间配有65英寸智能电视的房间",
      "全套迷你吧",
      "保险箱",
      "智能控制中央空调",
      "24小时专属管家服务",
      "顶级奢华洗浴用品",
      "浴袍和拖鞋",
      "高端音响系统",
      "专业咖啡机",
      "独立起居区",
      "用餐区",
      "办公区",
      "欢迎饮品和水果盘",
      "优先餐厅预订",
      "免费机场接送",
    ],
    image: "/images/presidential-suite.jpg",
  },
};

export const RoomDetailPage: React.FC = () => {
  const { roomType } = useParams<{ roomType: string }>();

  // 确保房间类型有效
  const room = roomType && roomsData[roomType as keyof typeof roomsData];

  if (!room) {
    return (
      <div style={styles.pageContainer}>
        <h1>找不到该房间</h1>
        <p>抱歉，您请求的房间信息不存在。</p>
        <Link to="/rooms" style={styles.button}>
          返回房间列表
        </Link>
      </div>
    );
  }

  return (
    <div style={styles.pageContainer}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>{room.title}</h1>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            marginBottom: "40px",
          }}
        >
          <div style={{ flex: "1 1 500px" }}>
            <img
              src={room.image}
              alt={room.title}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </div>

          <div style={{ flex: "1 1 400px" }}>
            <div
              style={{
                backgroundColor: "#f9f9f9",
                padding: "25px",
                borderRadius: "8px",
              }}
            >
              <h2 style={{ marginBottom: "15px" }}>房间信息</h2>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#e67e22",
                  marginBottom: "15px",
                }}
              >
                ¥{room.price} / 晚
              </p>

              <div style={{ marginBottom: "20px" }}>
                <p>
                  <strong>面积:</strong> {room.area}
                </p>
                <p>
                  <strong>可住:</strong> {room.capacity}
                </p>
                <p>
                  <strong>床型:</strong> {room.bed}
                </p>
                <p>
                  <strong>景观:</strong> {room.view}
                </p>
              </div>

              <button
                style={{
                  ...styles.button,
                  width: "100%",
                  fontSize: "18px",
                  padding: "15px",
                }}
              >
                立即预订
              </button>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ marginBottom: "20px" }}>房间描述</h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            {room.description}
          </p>
        </div>

        <div>
          <h2 style={{ marginBottom: "20px" }}>设施与服务</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "10px",
            }}
          >
            {room.amenities.map((amenity, index) => (
              <div
                key={index}
                style={{
                  padding: "10px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "4px",
                }}
              >
                {amenity}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "40px" }}>
          <Link
            to="/rooms"
            style={{
              display: "inline-block",
              color: "#333",
              textDecoration: "none",
              marginRight: "20px",
            }}
          >
            &larr; 返回房间列表
          </Link>
        </div>
      </div>
    </div>
  );
};
