import React, { useState } from "react";
import reactLogo from "../../assets/react.svg";
import pic from "../../assets/pic.jpeg";
import "./App.css";
import { SliderContainer } from "../../components/SilderContainer";

const list = [
  { key: "1", name: "列表项1" },
  { key: "2", name: "列表项2" },
  { key: "3", name: "列表项3" },
  { key: "4", name: "列表项4" },
  { key: "5", name: "列表项5" },
  { key: "6", name: "列表项6" },
  { key: "7", name: "列表项7" },
  { key: "8", name: "列表项8" },
  { key: "9", name: "列表项9" },
  { key: "10", name: "列表项10" },
];
function App() {
  return (
    <div className="App">
      <SliderContainer width={300}>
        <>
          {list.map((item) => (
            <div style={{ width: 100 }} key={item.key}>
              {item.name}
            </div>
          ))}
        </>
      </SliderContainer>
    </div>
  );
}

export default App;
