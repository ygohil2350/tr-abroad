import React, { useState } from "react";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  background-color: ${(props) => props.theme.primary};
  padding: 1rem;
  display: flex;
  justify-content: space-around;
`;

const MenuButton = styled.button`
  background-color: white;
  color: ${(props) => props.theme.primary};
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: white;
  }
`;

const Popup = styled.div`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border: 1px solid ${(props) => props.theme.primary};
  padding: 1rem;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const Navbar: React.FC = () => {
  const [popup, setPopup] = useState<string | null>(null);

  const handleButtonClick = (menu: string) => {
    setPopup(popup === menu ? null : menu);
  };

  return (
    <NavbarContainer>
      <MenuButton onClick={() => handleButtonClick("menu1")}>Menu 1</MenuButton>
      <MenuButton onClick={() => handleButtonClick("menu2")}>Menu 2</MenuButton>
      <MenuButton onClick={() => handleButtonClick("menu3")}>Menu 3</MenuButton>
      <Popup show={popup === "menu1"}>Content for Menu 1</Popup>
      <Popup show={popup === "menu2"}>Content for Menu 2</Popup>
      <Popup show={popup === "menu3"}>Content for Menu 3</Popup>
    </NavbarContainer>
  );
};

export default Navbar;
