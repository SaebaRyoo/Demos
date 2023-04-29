import React, { useState, useEffect } from "react";

const TestPage = () => {
  const [a, setA] = useState("");
  if (a === "a") {
    const [b, setB] = useState("b");
  }
  const [c, setC] = useState("c");

  useEffect(() => {
    setA("a");
  });
  console.log("a ---> ", a);
  console.log("c ---> ", c);

  return <div>hello world</div>;
};

export default TestPage;
