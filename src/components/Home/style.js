import styled from 'styled-components'

import { ReactComponent as facebook } from "../../assets/facebook.svg";
import { ReactComponent as twitter } from "../../assets/twitter.svg";
import { ReactComponent as instagram } from "../../assets/instagram.svg";
import { ReactComponent as linkedin } from "../../assets/telegram.svg";
import { Radio } from 'antd';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    /* background-color: #0C8970; */
    width: 100%;
    height: 680px;
`

Wrap.Img = styled.img`
    width: 100%;
    height: 89vh;
    position: relative;
    /* margin-left: auto; */
    /* margin-top: auto; */
`

Wrap.WrapIcons = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 48px;
    margin-left: 40px;
    margin-top: 80px;
`

Wrap.IconsFacebook = styled(facebook)`
    width: 40px;
    height: 40px;
    cursor: pointer;
    margin-bottom: 50px;
`
Wrap.IconsInstagram = styled(instagram)`
    width: 40px;
    height: 40px;
    cursor: pointer;
    margin-bottom: 50px;

`
Wrap.IconsLinkedin = styled(linkedin)`
    width: 40px;
    height: 40px;
    cursor: pointer;
    margin-bottom: 50px;
`
Wrap.IconsTwitter = styled(twitter)`
    width: 40px;
    height: 40px;
    cursor: pointer;
    margin-bottom: 50px;

`

Wrap.Text = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 660px;
    height: 360px;
    margin-left: 260px;
    margin-top: 200px;
`

Wrap.Text1 = styled.div`
width: 619px;
height: 108px;
font-family: monospace;
font-style: normal;
font-weight: 500;
font-size: 30px;
line-height: 160%;
letter-spacing: 0.1em;
color: #FFFFFF;
margin-bottom: 20px;
`

Wrap.Text2 = styled.div`
width: 574px;
height: 58px;
font-family: monospace;
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 160%;
letter-spacing: 0.1em;
color: #FFFFFF;
margin-bottom: 20px;
`

Wrap.TextButton =styled.button`
    width: 166px;
    height: 45px;
    background: linear-gradient(284deg, #FFFFFF 17.51%, #C4C4C4 100%);
    box-shadow: -26.5214px -6.61253px 54.6667px rgba(51, 51, 51, 0.366), inset 10.3728px 2.58623px 10.6904px #B5B5B5, inset -10.3728px -2.58623px 10.6904px #FFFFFF;
    border-radius: 6px;
    border: none;
    cursor: pointer;
`

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 5260px;
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: center;
    /* align-items: center; */
`
