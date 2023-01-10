import styled from "styled-components"

export const Container = styled.header`
  

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
  }

  img {
    padding-top: 20px;
    padding-bottom: 20px;
    width: 400px;
    
  }
  img:hover {
    transition: 0.2s;
    filter: brightness(1.2);
  }

  h1 {
    color: #E1E1E6;
    font-family: "Pacifico", "Roboto", serif;
  }
`