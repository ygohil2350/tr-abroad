import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.primary};
  color: white;
  padding: 1rem;
  text-align: center;
`;

const Footer: React.FC = () => (
  <FooterContainer>
    <p>© 2024 TR Abroad Educational Consultancy</p>
  </FooterContainer>
);

export default Footer;
