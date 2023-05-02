import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/typedHooks";

// Cannot access 'Home' before initialization at
// [hmr] Failed to reload /src/routes/root.tsx. This could be due to syntax errors or importing non-existent modules. (see errors above)
// https://zhuanlan.zhihu.com/p/589463077

const getMenuItem = (menus: any): any => {
  return menus.map((menu: any) => {
    if (menu.children) {
      return (
        <div key={menu.url}>
          <Link to={menu.url}>{menu.name}</Link>
          {getMenuItem(menu.children)}
        </div>
      );
    }

    return (
      <div key={menu.url}>
        <Link to={menu.url}>{menu.name}</Link>
      </div>
    );
  });
};

function genMenu(array: any, parentId = "0") {
  const result = [];
  for (const item of array) {
    if (item.parent_id === parentId) {
      const menu = { ...item };
      menu.children = genMenu(array, menu.id);
      result.push(menu);
    }
  }
  return result;
}

function Home() {
  const menuLists = useAppSelector((state) => state.login.menuLists);
  const menuTree = genMenu(menuLists);
  return (
    <div>
      <h1>home page</h1>
      {getMenuItem(menuTree)}
    </div>
  );
}

export default Home;
