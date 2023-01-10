import styled from "styled-components";

export const Container = styled.div`
  button {
    padding: 20px;
    background-color: #00B37E;
    border: 0;
    width: 200px;
    border-radius: 8px;
    color: white;
    font-size: 1.3rem;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      opacity: 80%;
      transition: 0.2s;
    }
  }
`