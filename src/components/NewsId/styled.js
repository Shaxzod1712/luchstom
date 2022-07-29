import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 280vh;
`

export const Wrapper=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: auto;
`
export const Box=styled.div`
position: relative;
width: 1000px;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 60px 50px;
gap: 40px;
background: #FFFFFF;
box-shadow: -4px 0px 10px rgba(12, 137, 112, 0.25), 4px 0px 10px rgba(12, 137, 112, 0.25), 0px -4px 10px rgba(12, 137, 112, 0.25), 0px 4px 10px rgba(12, 137, 112, 0.25);
border-radius: 10px;
margin-top: 120px;
`
export const WrapperImg = styled.div`

`

export const ImgText = styled.div`
    position: relative;
    font-family: monospace;
    font-style: normal;
    font-weight: 500;
    font-size: 80px;
    line-height: 109px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #FFFFFF;
    padding-top: 120px;
    padding-right: 820px;
`
ImgText.ImgText2 = styled.div`
    position: relative;
    font-family: monospace;
    font-style: normal;
    font-weight: 500;
    font-size: 80px;
    line-height: 109px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #FFFFFF;
    padding-right: 460px;

`

export const ImgNews=styled.img`
position: absolute;
width: 100%;
height: 400px;
`
export const ImgBackground = styled.img`
position: absolute;
width: 100%;
height: 280vh;
margin-top: 62px;
`



export const Text=styled.div`
font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 41px;
text-align: center;
letter-spacing: 0.1em;
text-transform: uppercase;

color: #000000;
`
export const Img=styled.img`
width: 900px ;
height: 340px;
`
export const Texts=styled.div`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 160%;
letter-spacing: 0.2em;
color: #000000;
`