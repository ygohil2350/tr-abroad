import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.primary};
  color: white;
  padding: 1rem;
  text-align: center;
`;

const Header: React.FC = () => (
  <HeaderContainer>
    <h1>
      Guiding your journey from complexity to clarity with expertise you can
      trust
    </h1>
  </HeaderContainer>
);

export default Header;
