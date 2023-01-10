import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: 
    "item item"
    "button button "
  ;
  color: #E1E1E6;
  margin-top: 50px;
  img {
    width: 250px;
    border-radius: 180px;
    border: 3px solid #00B37E;
    
  }

  img:hover {
    transition: 0.3s;
    filter: brightness(0.7);
  }


  .person-item {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    
  
    a {
      text-decoration: none;

      button {
        color: #FFF;
        width: 290px;
        height: 50px;
        position: relative;
        background-color: #00B37E;
        text-transform: uppercase;
        font-size: 1.1rem;
        font-weight: 900;
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
        border-radius: 8px;
        cursor: pointer;
        
      }
      &:hover {
        opacity: 80%;
        transition: 0.3s;
      }

    }

    p {
      padding: 15px 0;
      font-weight: 900;
      color: #FFF;
      font-size: 1.3rem;
    }
  }

  ul {
    list-style: none;
    height: 140px;
  }
`

export const Buttons = styled.div`
  padding: 100px 100px 100px;
  display: flex;
  justify-content: space-between;
`