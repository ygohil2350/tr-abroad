import React from "react";
import styled from "styled-components";

const MainContainer = styled.main`
  padding: 2rem;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

const Main: React.FC = () => (
  <MainContainer>
    <section>
      <h2>At TR Abroad Educational Consultancy</h2>
      <p>We are dedicated to turning your global aspirations into reality...</p>
    </section>
    <section>
      <h3>Student Visas</h3>
      <p>From aspirations to achievements...</p>
    </section>
    <section>
      <h3>Work Visas</h3>
      <p>Opening doors to global opportunities...</p>
    </section>
  </MainContainer>
);

export default Main;
