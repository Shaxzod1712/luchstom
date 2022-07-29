import styled from 'styled-components'
import { ReactComponent as vector } from "../../assets/Vector.svg";
import { ReactComponent as globe } from "../../assets/globe.svg";
import { ReactComponent as chart } from "../../assets/chart.svg";
import { ReactComponent as ProjectImg1 } from "../../assets/image2.svg";
import { ReactComponent as ProjectImg2 } from "../../assets/image3.svg";
import { ReactComponent as ProjectImg3 } from "../../assets/image4.svg";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    
    `
Container.Img = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
`

export const Wrap =styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 1000px;
    align-items: center;
`

// Wrap.Text = styled.div`
//     height: 43px;
//     font-family: 'Montserrat';
//     font-style: normal;
//     font-weight: 600;
//     font-size: 24px;
//     line-height: 43px;
//     letter-spacing: 0.1em;
//     text-transform: uppercase;
//     color: #000;
//     margin-top: 8px;
// `

// Wrap.CardWrap = styled.div`
//     display: flex;
//     justify-content: space-between;
//     width: 100%;
//     flex-wrap: wrap;
// `

// Wrap.Card = styled.div`
//     display: flex;
//     flex-direction: column;
//     width: 300px;
//     height: 426px;
//     background: #fff;
//     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//     border-radius: 6px;
//     margin-top: 20px;
//     padding: 20px;
//     align-items: center;
// `

Wrap.CardImg = styled.img`
    width: 260px;
    height: 260px;
`
Wrap.CardText =styled.div`
    font-family: monospace;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 27px;
    letter-spacing: 0.1em;
    color: #000;
    margin-top: 20px;
`

Wrap.CardText2 =styled.div`
    font-family: monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 21px;
    color: #000;
    margin-top: 10px;
`

// /////////////////////////////////////////

// export const Wrap =styled.div`
//     position: absolute;
//     display: flex;
//     flex-direction: column;
//     width: 1000px;
//     align-items: center;
// `

Wrap.Text = styled.div`
    height: 43px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 43px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #000;
    margin-top: 38px;
`

Wrap.CardWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
`

Wrap.Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 426px;
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    margin-top: 20px;
    padding: 20px;
    align-items: center;
`

Wrap.Card2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 426px;
    background: #0C8970;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    margin-top: 20px;
    padding: 20px;
    align-items: center;
`

Wrap.CardImg = styled.img`
    width: 260px;
    height: 260px;
`
Wrap.CardText =styled.div`
    font-family: monospace;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 27px;
    letter-spacing: 0.1em;
    color: #000;
    margin-top: 20px;
`

Wrap.CardText2 =styled.div`
    font-family: monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 21px;
    color: #000;
    margin-top: 10px;
    text-align: center;
`

Wrap.CardText12 =styled.div`
    font-family: monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 21px;
    color: #fff;
    margin-top: 10px;
    text-align: center;
`

Wrap.Button = styled.button`
    width: 100%;
    height: 40px;
    background: #78D4C2;
    border-radius: 6px;
    color: #fff;
    margin-top: 10px;
    border: none;
    cursor: pointer;
`

// /////////////////////////////////////////

Wrap.WrapAbout = styled.div`
    display: flex;
    width: 1000px;
    height: 426px;
    margin-top: 40px;
    align-items: center;
`

Wrap.HomeAbout =styled.img`
    display: flex;
    margin-right: auto;
    width: 660px;
    height: 426px;
    border-radius: 6px;
`

Wrap.HomeAboutText = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 480px;
    height: 326px;
    margin-left: 520px;
    background-color: #0C8970;
    border-radius: 6px;
    padding: 0 20px;
`

Wrap.HomeAboutText1 = styled.div`
    width: 440px;
    font-family: monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    margin-top: 25px;
`

// /////////////////////////////////////////////


Wrap.ChooseWrap =styled.div`
    display: flex;
    justify-content: space-between;
    width: 1000px;
    height: 260px;
    margin-top: 40px;
`

Wrap.ChooseCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100%;
    background-color: #0C8970;
    border-radius: 6px;
    padding: 20px;
    align-items: center;
`
Wrap.ChooseCardText1 = styled.div`
    width: 185px;
    height: 54px;
    font-family: monospace;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 20px;
`

Wrap.ChooseCardText2 = styled.div`
    width: 259px;
    height: 131px;
    font-family: monospace;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 160%;
    text-align: center;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    margin-top: 20px;

`

Wrap.ChooseCardImgChart = styled(chart)`
position: absolute;
width: 220px;
height: 220px;
`
Wrap.ChooseCardImgGlobe = styled(globe)`
position: absolute;
width: 220px;
height: 220px;
`
Wrap.ChooseCardImgVector = styled(vector)`
position: absolute;
width: 210px;
height: 210px;
opacity: 0.2;
`

// //////////////////////////////////////////////


Wrap.ProjectText =styled.div`
    width: 950px;
    height: 87px;
    font-family: monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    text-align: center;
    letter-spacing: 0.1em;
    color: #000000;
    margin-top: 20px;
`

Wrap.ProjectWrap =styled.div`
    display: flex;
    justify-content: space-between;
    width: 1000px;
    height: 200px;
    margin-top: 80px;
`

Wrap.ProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #0C8970;
    width: 150px;
    height: 100%;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
`

Wrap.ProjectCardText = styled.div`
width: 110px;
height: 100px;
font-family: monospace;
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 25px;
letter-spacing: 0.1em;
color: #FFFFFF;
`

Wrap.ProjectImg11 =styled(ProjectImg1)`
    width: 150px;
    height: 100%;
    border-radius: 6px;
    box-shadow: -26.5214px -16.61253px 54.6667px rgba(51, 51, 51, 0.366);
`
Wrap.ProjectImg22 =styled(ProjectImg2)`
    width: 150px;
    height: 100%;
    border-radius: 6px;
    box-shadow: -26.5214px -16.61253px 54.6667px rgba(51, 51, 51, 0.366);
`
Wrap.ProjectImg33 =styled(ProjectImg3)`
    width: 150px;
    height: 100%;
    border-radius: 6px;
    box-shadow: -26.5214px -16.61253px 54.6667px rgba(51, 51, 51, 0.366);
`

// ////////////////////////////////////

Wrap.DailyWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1000px;
    height: 496px;
    margin-top: 20px;
`

Wrap.DailyCard =styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100%;
    background-color: #0C8970;
    border-radius: 6px;
    align-items: center;
    padding: 20px 0;
    `

Wrap.DailyImg =styled.img`
    width: 85%;
    height: 160px;
`

Wrap.DailyText = styled.div`
    width: 260px;
    height: 54px;
    font-family: monospace;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 27px;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    margin-top: 20px;
`

Wrap.DailyText2 = styled.div`
    width: 260px;
    height: 100px;
    font-family: monospace;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 0.0.5em;
    color: #FFFFFF;
    margin-top: 20px;
`

Wrap.DailyText3 = styled.div`
    width: 260px;
    height: 54px;
    font-family: monospace;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 27px;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    margin-top: 10px;
    margin-left: 280px;
`

Wrap.DailyButton = styled.button`
    width: 85%;
    height: 40px;
    background: #78D4C2;
    border-radius: 6px;
    color: #fff;
    /* margin-top: 10px; */
    border: none;
    cursor: pointer;
`

// ///////////////////////////////////////////////

Wrap.GalleryWrap =styled.div`
    display: flex;
    flex-direction: column;
    width: 1518px;
    height: 500px;
    margin-top: 40px;
    margin-bottom: 40px;
`

Wrap.GalleryWrap2 = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
`

Wrap.GalleryImg1 = styled.img`
    width: 50%;
    height: 100%;
`

Wrap.GalleryImg2 = styled.img`
    width: 25%;
    height: 100%;
`

// //////////////////////////////////////////////

Wrap.BuildWrap = styled.div`
    display: flex;
    width: 1518px;
    height: 180px;
    background-color: #0C8970;
    margin-top: 40px;
    justify-content: center;
    align-items: center;
`

Wrap.BuildCard =styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 100%;
    align-items: center;
    justify-content: center;
`

Wrap.BuildBorder = styled.div`
    border-left: 2px solid white;
    height: 80%;
`

Wrap.BuildText1 =styled.div`
    font-family: monospace;
    font-style: normal;
    font-weight: 600;
    font-size: 50px;
    line-height: 160%;
    text-align: center;
    letter-spacing: 0.1em;
    color: #FFFFFF; 
    opacity: 0.5;
`
Wrap.BuildText2 =styled.div`
    font-family: monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    text-align: center;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    opacity: 0.9;
`

// ////////////////////////////////////


Wrap.OrderinWrap =styled.div`
    display: flex;
    width: 100%;
    height: 400px;
    margin-top: 40px;
`

Wrap.OrderinForm = styled.form`
    display: flex;
`

Wrap.OrderinWrap2= styled.div`
display: flex;
flex-direction: column;
width: 460px;
margin-left: 14px;
`

Wrap.OrderinNameInput = styled.input`
    width: 310px;
    height: 46px;
    border-radius: 4px;
    border: none;
    background-color: #fff;
    margin-bottom: 32px;
    color: #000;
    font-size: 15px;
    padding-left: 20px;
    box-shadow: 4px 0px 10px rgba(12, 137, 112, 0.25), -4px 0px 10px rgba(12, 137, 112, 0.25), 0px -4px 10px rgba(12, 137, 112, 0.25), 0px 4px 10px rgba(12, 137, 112, 0.25);
`

Wrap.OrderinTextarea= styled.textarea`
    background-color: #fff;
    margin-bottom: 30px;
    border-radius: 6px;
    padding: 20px;
    color: #000;
    font-size: 15px;
    border: none;
    box-shadow: 4px 0px 10px rgba(12, 137, 112, 0.25), -4px 0px 10px rgba(12, 137, 112, 0.25), 0px -4px 10px rgba(12, 137, 112, 0.25), 0px 4px 10px rgba(12, 137, 112, 0.25);

`

Wrap.OrderinLabel = styled.label`
    font-family: monospace;
    margin-bottom: 8px;
    font-size: 15px;
`

Wrap.OrderinButton =styled.button`
    width: 100%;
    height: 46px;
    background-color: #48BFA7;
    border-radius: 6px;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    border: none;
    cursor: pointer;
`