import React, { useState } from "react";
import "./MonthPicker.css";

function MonthPicker() {
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState(new Date());

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const handlePrevYear = () => {
    setDate(new Date(date.getFullYear() - 1, date.getMonth(), 1));
  };

  const handleNextYear = () => {
    setDate(new Date(date.getFullYear() + 1, date.getMonth(), 1));
  };

  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const months = Array.from({ length: 12 }, (_, index) => {
    const month = new Date(date.getFullYear(), index, 1);
    return {
      month: month,
      label: month.toLocaleString("en-us", { month: "short" }),
    };
  });

  return (
    <div className="month-picker">
      <div className="month-picker-input" onClick={toggleVisible}>
        <div>
          {date.toLocaleString("default", { month: "long", year: "numeric" })}
        </div>
        <span></span>
      </div>
      {visible && (
        <div className="month-picker-dropdown">
          <div className="month-picker-header">
            <button onClick={handlePrevYear}>{"<<"}</button>
            <button onClick={handlePrevMonth}>{"<"}</button>
            <span>{date.toLocaleString("default", { year: "numeric" })}</span>
            <button onClick={handleNextMonth}>{">"}</button>
            <button onClick={handleNextYear}>{">>"}</button>
          </div>
          <div className="month-picker-grid">
            {months.map((month) => (
              <div
                key={month.label}
                className={`month-picker-cell ${
                  month.month.getMonth() === date.getMonth() &&
                  month.month.getFullYear() === date.getFullYear()
                    ? "selected"
                    : ""
                }`}
                onClick={() => {
                  setDate(month.month);
                  setVisible(false);
                }}
              >
                {month.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MonthPicker;
