import React from "react";
import styled from "styled-components"
const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 50px;
  right: 20px;
  div= {
    width: 2rem;
    height: 0.25rem;
    
  }
`;

const Burger = () => {
  return (
    <div>
      <StyledBurger>
        <div />
        <div />
        <div />
      </StyledBurger>
    </div>
  );
};

export default Burger;
