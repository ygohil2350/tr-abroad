import React from "react";
import styled from "styled-components";

const ToggleButton = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  position: fixed;
  top: 1rem;
  right: 1rem;
`;

interface DarkModeToggleProps {
  toggleTheme: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ toggleTheme }) => (
  <ToggleButton onClick={toggleTheme}>Toggle Dark Mode</ToggleButton>
);

export default DarkModeToggle;
