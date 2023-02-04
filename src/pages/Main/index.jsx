import { Layout, Divider } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import React from "react";
import { BackHeader, Sider } from "../../components/Index";
import { MainHeader } from "../../components/Index";

import "./style.css";

const Index = () => {
  return (
    <Layout className='Main'>
      <BackHeader />
      <Layout className='sub-main'>
        <Sider />
        <Divider type='vertical' className='siderDivider'></Divider>
        <Layout>
          <MainHeader />
          <Content
            className='content'
            style={{ background: "rgb(239, 235, 227)" }}
          >
            Content
          </Content>
          <Footer style={{ background: "#f0f2f5", height: "50px" }}>
            Footer
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Index;
