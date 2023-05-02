import { Button } from "antd";
import type { ButtonProps } from "antd";
import React from "react";
import { useAppSelector } from "../../hooks/typedHooks";

interface AuthButtonProps extends ButtonProps {
  roles: string[];
}

const AuthButton: React.FC<AuthButtonProps> = ({ roles, children }) => {
  const role = useAppSelector((state) => state.login.role);

  if (roles.includes(role)) {
    return <Button>{children}</Button>;
  }
  return null;
};

export default AuthButton;
