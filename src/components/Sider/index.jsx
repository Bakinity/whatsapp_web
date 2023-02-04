import React from "react";
import "./style.css";
import Sider from "antd/es/layout/Sider";
import { Header } from "antd/es/layout/layout";
import SiderHeader from "../SiderHeader";

const Index = () => {
  return (
    <Sider style={{ background: "rgb(255, 255, 255)" }}>
      <SiderHeader />
      <Header style={{ background: "rgb(255, 255, 255)" }}>Search</Header>
      Sider
    </Sider>
  );
};

export default Index;
