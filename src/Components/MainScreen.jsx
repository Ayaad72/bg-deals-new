import { React, useState } from "react";
import logo from "../assets/IMAGES/logoHorizontal.svg";
import Header from "./Header/index.";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Drawer, Button } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Grid } from "antd";
const { useBreakpoint } = Grid;
const MainScreen = () => {
  const screens = useBreakpoint();
  const [visible, setVisible] = useState(false);
  const toggleDrawer = () => {
    setVisible(!visible);
  };
  return (
    <>
      {!screens.lg ? (
        <div>
          <StyledNav>
            <Link to={"/"} className="homepageLink">
              <img src={logo} alt="" />
            </Link>
            <Button style={{ border: "none" }} onClick={toggleDrawer}>
              <MenuUnfoldOutlined />
            </Button>
          </StyledNav>
          <Drawer
            title="MENU"
            placement="right"
            closable={true}
            onClose={toggleDrawer}
            open={visible}
            width={400}
          >
            <Header
              fd={"column"}
              headerAlign={"column-reverse"}
              ta={"center"}
            />
          </Drawer>
        </div>
      ) : (
        <Header />
      )}
    </>
  );
};
export default MainScreen;
const StyledNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 9px !important;
`;
