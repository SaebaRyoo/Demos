import React, { useState, useEffect } from "react";

const Protected = () => {
  useEffect(() => {
    console.log("protected mount");
  });
  return <h1>Protected page</h1>;
};

export default Protected;
