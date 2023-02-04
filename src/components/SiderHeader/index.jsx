import { Header } from "antd/es/layout/layout";
import { Space } from "antd";
import React from "react";
import "./style.css";

const Index = () => {
  return (
    <Header className='SiderHeader'>
      <button className='avatarBTN'></button>

      <Space>
        <button className='siderHeaderRBTN'>
          <img src='' alt='team' className='siderHeaderIMG'></img>
        </button>

        <button className='siderHeaderRBTN'>
          <img src='' alt='status' className='siderHeaderIMG'></img>
        </button>

        <button className='siderHeaderRBTN'>
          <img src='' alt='chat' className='iconChatIMG'></img>
        </button>

        <button className='siderHeaderRBTN'>
          <img src='' alt='more' className='siderHeaderIMG'></img>
        </button>
      </Space>
    </Header>
  );
};

export default Index;
