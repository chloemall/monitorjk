import React from 'react';
import { Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const SideMenu = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      key: "menu",
      label: 'Home'
    },
    {
      key: "menu/wallet",
      label: 'Wallet'
    },
    {
      key: "report",
      label: 'Report'
    },
    {
      key: "/",
      label: 'Login'
    }
  ];

  return (
    <Menu selectedKeys={[window.location.pathname]} mode="vertical">
      <Menu.SubMenu key="analytics" title="Analytics">
        <Menu.Item key="overview" onClick={() => navigate("overview")}>
          <Link to="/overview">Overview</Link>
        </Menu.Item>
      </Menu.SubMenu>
      {menuItems.map((menuItem) => (
        <Menu.Item key={menuItem.key} onClick={() => navigate(menuItem.key)}>
          <Link to={menuItem.key}>{menuItem.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default SideMenu;
