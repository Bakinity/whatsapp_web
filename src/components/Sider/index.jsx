import React from "react";
import "./style.css";
import Sider from "antd/es/layout/Sider";
import { Header } from "antd/es/layout/layout";
import SiderHeader from "../SiderHeader";
import { Button, Divider, Input } from "antd";
import { BiFilter } from "react-icons/bi";

const Index = () => {
  return (
    <Sider style={{ background: "rgb(255, 255, 255)" }} width={450}>
      <SiderHeader />
      <Header className='Header'>
        <Input className='searchInput' bordered='false'></Input>
        <Button
          type='text'
          className='filterBTN'
          shape='circle'
          icon={<BiFilter className='filterICN' />}
        />
        <Divider className='divider' />
      </Header>
      Sider
    </Sider>
  );
};

export default Index;
