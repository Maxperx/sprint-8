import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 7px;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin: 15px;
`;

export const StyledComponent = styled.div`
  margin-top: 7px;
  border-radius: 5px;
  background-color: #151515;
  width: 900px;
    }
  }};
`;

export const StyledText = styled.p`
margin: 15px;
text-transform: uppercase;
`;

export const StyledImage = styled.img`
  width: 15%;
  height: auto;
`;

export const StyledMenu = styled.div`
padding-bottom: 10px;
border-bottom: 1px solid #A6A6A6;

`;

export const StyledLink = styled.a`
margin-bottom: 15px;
  position: relative;
  margin: 30px;
  text-decoration: none;

  &.active {
    color: #fff;

  &.active::after {
    content: '';
    position: absolute;
    bottom: -13px;
    left: 0;
    width: 100%;
    height: 2px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0px 0px 5px 2px #f7e685;
  }
`;
