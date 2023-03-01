import React from "react";

import Charts from "./Charts";
import Clock from "./Clock";
import _ from "lodash";

const {
  useEffect,
  useState,
  useTransition
} = React;

let cachedData = new Map();
const App = () => {
  const [value, setValue] = useState("")
  const [showDemo, setShowDemo] = useState(true)
  const [showClock, setShowClock] = useState(false)
  const [isPending, startTransition] = useTransition();

  // Random data for the chart
  const getStreamData = (input) => {
    if (cachedData.has(input)) {
      return cachedData.get(input);
    }
    const multiplier = input.length !== 0 ? input.length : 1;
    const complexity =
      (parseInt(window.location.search.substring(1), 10) / 100) * 25 || 25;
    const data = _.range(5).map(t =>
      _.range(complexity * multiplier).map((j, i) => {
        return {
          x: j,
          y: (t + 1) * _.random(0, 255)
        };
      })
    );
    cachedData.set(input, data);
    return data;
  }

  useEffect(() => {

    window.addEventListener("keydown", e => {
      if (e.key.toLowerCase() === "?") {
        e.preventDefault();
        setShowClock(!showClock);
      }
    });

  })

  const handleChartClick = e => {
    if (showDemo) {
      if (e.shiftKey) {
        setShowDemo(false);
      }
      return;
    }
    if (this._ignoreClick) {
      return;
    }
    this._ignoreClick = true;

  };

  const handleChange = e => {
    const value = e.target.value;
    startTransition(() => {

      setValue(value)
    })
  };
  const data = getStreamData(value);

  return (
    <div className="container">
      <input
        placeholder="longer input → more components and DOM nodes"
        onChange={handleChange}
      />
      <div className="demo" onClick={handleChartClick}>
        {showDemo && (
          <Charts data={data} onClick={handleChartClick} />
        )}
        <div style={{ display: showClock ? "block" : "none" }}>
          <Clock />
        </div>
      </div>
    </div>
  );
}

export default App;
