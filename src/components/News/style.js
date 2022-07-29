import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/arrowpagination.svg";

export const Container=styled.div`
width: 100%;
/* padding: 70px 360px; */
/* margin: auto; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 50px;

`

export const Pagin=styled.div`
width: 1000px;
height: auto;
gap: 40px;
display: flex;
justify-content: space-between;
flex-wrap: wrap;

`
export const Img=styled.img`
width: 100%;
height: 400px;
`
export const Pagination = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 27px;
`;
export const Btn = styled.button`
  cursor: pointer;
  border-style: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: var(--colorWhite);
  :hover {
    background-color: #f6f8f9;
  }
  :active{
      background-color: #f4f4f4;
  }
  :focus{
      background-color:  #f4f4f4;
  }

`;
export const LeftArrow = styled(arrow)``;
export const RightArrow = styled(arrow)`
  transform: rotate(-180deg);
`;