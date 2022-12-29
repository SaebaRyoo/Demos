import React from 'react';

interface IProps {
  onClick: () => void;
}

export const UserEvent: React.FC<IProps> = ({onClick}) => {
  return (
    <div>
      <button onClick={onClick}>点击按钮</button>
    </div>
  );
};
