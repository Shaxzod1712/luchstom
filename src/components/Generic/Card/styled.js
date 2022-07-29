
import styled from "styled-components";

export const Container=styled.div`
display: flex;
flex-direction: column;
width: 300px;
height: 460px;
background: #FFFFFF;
box-shadow: -4px 0px 10px rgba(12, 137, 112, 0.25), 4px 0px 10px rgba(12, 137, 112, 0.25), 0px -4px 10px rgba(12, 137, 112, 0.25), 0px 4px 10px rgba(12, 137, 112, 0.25);
border-radius: 10px;
padding: 20px;
justify-content: space-between;
`
export const First=styled.div`
width: 260px;
height: 150px;
`
export const Second=styled.div`
width: 260px;
height: 80px;
font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 25px;
letter-spacing: 0.1em;
text-transform: uppercase;

color: #000000; 
`
export const Third=styled.div`
width: 260px;
height: 100px;
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 160%;
/* or 26px */

letter-spacing: 0.1em;

color: #000000;
`
export const Forth=styled.div`
width: 260px;
height: 30px;
display: flex;
justify-content: space-between;
font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 160%;
letter-spacing: 0.1em;
text-transform: capitalize;
cursor: pointer;
color: #0C8970;
`