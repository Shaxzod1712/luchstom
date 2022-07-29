import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 260vh;
`

export const Wrapper=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: auto;
margin-top: 200px;
`
export const Box=styled.div`
position: relative;
width: 1000px;
height: auto;
display: flex;
/* flex-direction: column; */
justify-content: center;
align-items: center;
padding: 60px 50px;
gap: 40px;
background: #FFFFFF;
box-shadow: -4px 0px 10px rgba(12, 137, 112, 0.25), 4px 0px 10px rgba(12, 137, 112, 0.25), 0px -4px 10px rgba(12, 137, 112, 0.25), 0px 4px 10px rgba(12, 137, 112, 0.25);
border-radius: 10px;
margin-top: 40px;
`
export const WrapperImg = styled.div`

`
export const WrapButton = styled.div`
  display: flex;
  position: relative;
  width: 1000px;
  height: 46px;
    margin-top: 260px;
justify-content: space-between;
`

export const ImgNews=styled.img`
position: absolute;
width: 100%;
height: 400px;
`
export const ImgBackground = styled.img`
position: absolute;
width: 100%;
height: 260vh;
margin-top: 400px;
`



export const Text=styled.div`
font-family: monospace;
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 41px;
letter-spacing: 0.1em;
color: #4f4f4f;
margin-bottom: 20px;
`

Text.Text = styled.div`
    font-family: monospace;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.1em;
    color: #0C8970;
    margin-bottom: 20px;

`

export const Img=styled.img`
width: 440px ;
height: 510px;
`
export const WrapperImgMini = styled.div`
    display: flex;
    justify-content: space-between;
    width: 440px;
    height: 84px;
    border: 1px solid red;
    margin-top: 20px;
`

export const ImgMini=styled.img`
width: 60px ;
height: 84px;
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
export const WrapperText = styled.div`
    display: flex;
    flex-direction: column;
`
export const Pagin=styled.div`
position: relative;
width: 1000px;
height: auto;
gap: 40px;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
margin-top: 40px;
`
Pagin.Text =styled.div`
    position: relative;
    font-family: monospace;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 49px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #000;
margin-top: 40px;

`