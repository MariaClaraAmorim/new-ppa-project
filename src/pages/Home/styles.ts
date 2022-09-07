import styled from "styled-components";

export const Container = styled.div`
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // flex-direction: column;
  // height: 100vh;
  // gap: 20px;


  
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 25fr;
    grid-template-rows: 80px 1fr 80px;
    grid-template-areas: "aside header""aside main""aside footer";
    height: 100vh;

`;

export const Title = styled.h2``;