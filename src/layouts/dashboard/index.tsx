import { Button, Layout, Menu } from "antd";
import { HomeOutlined, BarsOutlined, DeleteOutlined, LogoutOutlined, GithubOutlined } from '@ant-design/icons';
import React from "react";
import { ContentPages, FootButton, Logo } from "./styles";
import { Link, useNavigate } from "react-router-dom";

interface Props {
    children: React.ReactNode;
  }

const { Content, Footer, Sider } = Layout;

const DashboardLayout: React.FC<Props> = ({ children }) =>{

    const nav = useNavigate();

    function handleLogOut() {
        localStorage.removeItem("token");
        nav("/");
    }

    return(
    <Layout>
        <Sider breakpoint="lg" collapsedWidth="0">
            <Logo>ESP32 SMART</Logo>
            <Menu style={{minHeight:"100vh"}} mode="inline">
                <Menu.Item key="overview" icon={<HomeOutlined />}>
                    <Link to="/dashboard">
                        Resumo
                    </Link>
                </Menu.Item>
                <Menu.Item key="visualize" icon={<BarsOutlined />}>
                    <Link to="/datas">
                        Vizualizar dados
                    </Link>
                </Menu.Item>
                <Menu.Item key="delete" icon={<DeleteOutlined />}>
                    <Link to="/delete-data">
                        Deletar dados
                    </Link>
                </Menu.Item>
                <Menu.SubMenu title="Mais">
                    <Menu.Item icon={<GithubOutlined />}>
                        <a href="https://github.com/brennomeneses/project-smart-home" target="_blank">
                            Código Fonte
                        </a>
                    </Menu.Item>
                    <Menu.Item key="exit" icon={<LogoutOutlined />} danger onClick={handleLogOut}>
                        Sair
                    </Menu.Item>
                </Menu.SubMenu>
            </Menu>
        </Sider>
        <Layout>
            <Content style={{ margin: '24px 16px 0' }}>
                <ContentPages>
                    {children}
                </ContentPages>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Created by: Brenno Araujo.
            </Footer>
        </Layout>
    </Layout>
        );
}

export default DashboardLayout;