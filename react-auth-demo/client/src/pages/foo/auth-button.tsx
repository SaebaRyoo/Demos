import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/typedHooks";
import AuthButton from "../../components/auth-button/index";
const ButtonPermission: React.FC = () => {
  const role = useAppSelector((state) => state.login.role);
  return (
    <div>
      <h1>Button Permission</h1>
      <AuthButton roles={["admin", "user"]}>添加</AuthButton>
      <AuthButton roles={["admin"]}>编辑</AuthButton>
      <AuthButton roles={["admin"]}>删除</AuthButton>
    </div>
  );
};

export default ButtonPermission;
