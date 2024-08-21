import { Avatar, Button, Layout, theme } from "antd";
import { Menu } from "../../components/Menu";
import { Header } from "antd/es/layout/layout";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { ReactChild } from "react";

const { Content, Sider } = Layout;

export const LayoutComponent = ({ children }: { children: ReactChild }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="min-h-screen">
      <Header className="flex justify-between items-center bg-yellow-200 mb-4">
        <div>
          <img src="/ryazan_logo.png" />
        </div>
        <Button
          type="primary"
          shape="circle"
          icon={<LogoutOutlined />}
          onClick={() => alert("logout")}
        />
        <Avatar size={46} icon={<UserOutlined />} />
      </Header>
      <Layout>
        <Sider width={250} style={{ background: colorBgContainer }}>
          <Menu />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
