import styled from 'styled-components'
import { ReactComponent as list } from '../../assets/list.svg'
import { ReactComponent as call } from '../../assets/call.svg'
import { ReactComponent as up } from '../../assets/up.svg'
import { ReactComponent as bag } from '../../assets/bag.svg'
import { ReactComponent as searchh } from '../../assets/searchh.svg'
import { ReactComponent as parcel } from '../../assets/parcel.svg'
import { ReactComponent as nike } from '../../assets/nike.svg'


export const Container = styled.div`
    width: 100%;
    height: 425vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

Container.Img = styled.img`
    position: relative;
    width: 100%;
    height: 410vh;
    background-repeat: no-repeat;
    background-size: cover;
`

export const Img = styled.img`
    position: absolute;
    width: 100%;
    height: 600px;
    background-repeat: no-repeat;
    background-size: cover;
`

export const Wrap = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 1000px;
    height: 1270px;
    align-items: center;
    border-radius: 8px;
    margin: 500px 0 60px 0;
`
Wrap.Text = styled.div`
    display: flex;
    text-align: center;
    height: 43px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 43px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #4f4f4f;
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
    height: 346px;
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    margin-bottom: 20px;
    padding: 20px;
    align-items: center;
    box-shadow: -4px 0px 10px rgba(12, 137, 112, 0.25), 4px 0px 10px rgba(12, 137, 112, 0.25), 0px -4px 10px rgba(12, 137, 112, 0.25), 0px 4px 10px rgba(12, 137, 112, 0.25);
`
Wrap.List = styled(list)`
    width: 120px;
    height: 120px;
`
Wrap.Call = styled(call)`
    width: 120px;
    height: 120px;
`
Wrap.Up = styled(up)`
    width: 120px;
    height: 120px;
`
Wrap.Bag = styled(bag)`
    width: 120px;
    height: 120px;
`
Wrap.Search = styled(searchh)`
    width: 120px;
    height: 120px;
`
Wrap.Parcel = styled(parcel)`
    width: 130px;
    height: 130px;
`

Wrap.CardText =styled.div`
    font-family: monospace;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.1em;
    color: #000;
    margin-top: 20px;
`

Wrap.CardText2 =styled.div`
    display: flex;
    text-align: center;
    font-family: monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 21px;
    color: #4f4f4f;
    margin-top: 20px;
`
export const Wrap2 = styled.div`
    display: flex;
    width: 100%;
    height: 400px;
    box-shadow: -4px 0px 10px rgba(12, 137, 112, 0.25), 4px 0px 10px rgba(12, 137, 112, 0.25), 0px -4px 10px rgba(12, 137, 112, 0.25), 0px 4px 10px rgba(12, 137, 112, 0.25);
    margin-top: 60px;
    border-radius: 8px;
    background: #fff;
`
Wrap2.Img =styled.div`
    width: 35%;
`
Wrap2.Img2 =styled.img`
    width: 360px;
    height: 410px;
    margin-right: 50px;
    margin-bottom: 10px;
`

Wrap2.Text =styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    align-items: center;
`

Wrap2.Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    height: 220px;
    margin-top: 60px;
    
`
Wrap2.WrapText2 = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`
Wrap2.WrapText = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
`
Wrap2.Icon = styled(nike)`
    width: 40%;
`
Wrap2.IconText = styled.div`
    display: flex;
    font-family: monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    margin-right: auto;
    color: #4f4f4f;
    margin-top: 12px;
    margin-left: 10px;
`








///////////////////////////////////////////////////////////


export const WrapDarmon = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 600px;
    background: #0C8970;
    margin-top: 1850px;
    `

WrapDarmon.Text = styled.div`
    display: flex;
    font-family: monospace;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    color: #fff;
     margin-top: 40px;
`

/////////////////////////////////////////////////////////////////

export const Wrappin  = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px; 
    height: 630px;
    border: 2px solid #E2FFF9;
    border-radius: 6px;
    align-items: center;
    box-shadow: 0px 4px 10px rgba(12, 137, 112, 0.25), 0px -4px 10px rgba(12, 137, 112, 0.25), 4px 0px 10px rgba(12, 137, 112, 0.25), -4px 0px 10px rgba(12, 137, 112, 0.25);
padding-bottom: 10PX;
    margin: 60px 0;
`

Wrappin.Text = styled.div`
    font-family: monospace;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 49px;
    letter-spacing: 0.1em;
    margin: 60px 0;
`
Wrappin.Wrap =styled.div`
    display: flex;
`
Wrappin.Wrap2= styled.div`
display: flex;
flex-direction: column;
width: 460px;
margin-left: 14px;
`

Wrappin.Label = styled.label`
    font-family: monospace;
    margin-bottom: 8px;
    font-size: 15px;
`

Wrappin.Textarea= styled.textarea`
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(12, 137, 112, 0.25), 0px -4px 10px rgba(12, 137, 112, 0.25), 4px 0px 10px rgba(12, 137, 112, 0.25), -4px 0px 10px rgba(12, 137, 112, 0.25);
    margin-bottom: 30px;
    border-radius: 4px;
    padding: 20px;
    color: #000;
    font-size: 15px;
    border: none;
    outline: none;
`

export const Box = styled.div`
    position: absolute;
    /* border: 1px solid red; */
    width: 620px;
    height: 300px;
    margin-top: 180px;
    margin-left: 380px;
`

Box.Text1 = styled.div`
    font-family: monospace;
font-style: normal;
font-weight: 600;
font-size: 63px;
line-height: 89px;
letter-spacing: 0.1em;
color: #FFFFFF;
text-shadow: 4px 0px 10px rgba(0, 0, 0, 0.4), -4px 0px 10px rgba(255, 255, 255, 0.4), 0px 4px 10px rgba(0, 0, 0, 0.4), 0px -4px 10px rgba(255, 255, 255, 0.4);
`
Box.Text2 = styled.div`
    font-family: monospace;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 160%;
    text-align: right;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    margin-top: 8px;
`















































// import styled from 'styled-components'


// export const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     width: 100%;
//     height: fit-content;
//     justify-content: center;
//     align-items: center;
//     /* background: linear-gradient(270deg, rgba(2, 250, 207, 0) 18.39%, rgba(6, 173, 143, 0.93) 56.78%, #096754 92.07%), url(P1655500.00_00_10_25.Still004.jpg);
//     transform: matrix(-1, 0, 0, 1, 0, 0); */
//     `
//     export const Wrap = styled.div`
//         position: relative;
//         display: flex;
//         flex-direction: column;
//         width: 600px;
//         height: 320px;
//         margin-top: 60px;
//         margin-left: 230px;
//     `
//     Wrap.Text = styled.div`
//         font-family: monospace;
//         font-style: normal;
//         font-weight: 600;
//         font-size: 58px;
//         /* line-height: 160%; */
//         display: flex;
//         letter-spacing: 0.1em;
//         color: #fff;
//         margin-left: auto;
//     `
//     Wrap.Text1 = styled.div`
//     display: flex;
//     font-family: monospace;
//     font-style: normal;
//     font-weight: 500;
//     font-size: 17px;
//     /* line-height: 160%; */
//     letter-spacing: 0.1em;
//     color: #fff;
//     margin-top: 26px;
//     margin-right: auto;
//     margin-left: 80px;

// /* margin-bottom: 20px; */
// `
    
// export const Img = styled.img`
//     width: 100%;
//     height: 100%;
// `
// export const WrapWrap = styled.div`
//     /* position: absolute; */
//     display: flex;
//     flex-direction: column;
//     width: 1000px;
//     height: 600px;
//     background-color: #0C8970;
//     align-items: center;
//     color: #fff;
//     border-radius: 8px;
//     /* margin: 620px 0 60px 0; */
//     margin-bottom: 600px;
// `































// // Wrap.WrapIcons = styled.div`
// //     position: absolute;
// //     display: flex;
// //     flex-direction: column;
// //     width: 48px;
// //     margin-left: 40px;
// //     margin-top: 80px;
// // `


// // Wrap.Text1 = styled.div`
// // width: 619px;
// // height: 108px;
// // font-family: monospace;
// // font-style: normal;
// // font-weight: 500;
// // font-size: 46px;
// // line-height: 160%;
// // letter-spacing: 0.1em;
// // color: #FFFFFF;
// // /* margin-bottom: 10px; */
// // `

// // Wrap.Text2 = styled.div`
// // width: 574px;
// // height: 58px;
// // font-family: monospace;
// // font-style: normal;
// // font-weight: 300;
// // font-size: 18px;
// // line-height: 160%;
// // letter-spacing: 0.1em;
// // color: #FFFFFF;
// // /* margin-bottom: 20px; */
// // `