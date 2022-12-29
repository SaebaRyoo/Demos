import React from 'react';

interface IProps {}

// 《4 | DOM查询(上)：页面元素的渲染和行为查询》 & 《5 |DOM查询(下)：页面元素的参照物查询和优先级》
export const DomQuery: React.FC<IProps> = ({}) => {
  return (
    <div>
      <div>test1</div>
      <div>test2</div>
      <button>按钮</button>
    </div>
  );
};
