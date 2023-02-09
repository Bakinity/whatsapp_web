import { Header } from "antd/es/layout/layout";
import { MdGroups, MdChat, MdMoreVert } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { TbCircleDashed } from "react-icons/tb";
import { Button, Space } from "antd";
import React from "react";
import "./style.css";

const Index = () => {
  return (
    <Header className='SiderHeader'>
      <Button
        className='RxAvatarBTN'
        type='text'
        icon={<RxAvatar className='RxAvatarICN' />}
        shape={"circle"}
      ></Button>

      <Space className='Space'>
        <Button
          className='rightBTNS'
          type='text'
          icon={<MdGroups className='rightICNS' />}
          shape={"circle"}
        ></Button>

        <Button
          className='rightBTNS'
          type='text'
          icon={<TbCircleDashed className='rightICNS' />}
          shape={"circle"}
        ></Button>

        <Button
          className='rightBTNS'
          type='text'
          icon={<MdChat className='rightICNS' />}
          shape={"circle"}
        ></Button>

        <Button
          className='rightBTNS'
          type='text'
          icon={<MdMoreVert className='rightICNS' />}
          shape={"circle"}
        ></Button>
      </Space>
    </Header>
  );
};

export default Index;
