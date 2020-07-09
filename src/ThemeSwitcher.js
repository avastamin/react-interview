import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "./AppProvider";
import { IoMdMoon as Moon, IoMdSunny as Sun } from "react-icons/io";
import Switch from "react-switch";

const ThemeSwitcher = () => {
  const { toggleTheme, themeMode } = useContext(AppContext);
  const handleThemeChange = (e) => {
    console.log(e);
    toggleTheme();
  };
  return (
    <Root>
      <h1>Toggle Theme</h1>
      <Switch
        checked={themeMode === "lightTheme" ? true : false}
        height={50}
        width={120}
        checkedIcon={
          <Sun
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 35,
              paddingLeft: 10,
            }}
            color={themeMode === "lightTheme" ? "white" : "grey"}
            className="light"
          />
        }
        uncheckedIcon={
          <Moon
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 35,
              paddingLeft: 24,
            }}
            color={themeMode === "darkTheme" ? "blue" : "blue"}
            className="dark"
          />
        }
        onChange={handleThemeChange}
      />
    </Root>
  );
};

export default ThemeSwitcher;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .custom-classname .react-toggle--checked .react-toggle-track {
    background-color: red;
    height: 200px;
    width: 200px;
    padding: 30px;
  }
`;
