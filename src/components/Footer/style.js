import styled from "styled-components";

import { ReactComponent as facebook } from "../../assets/facebook.svg";
import { ReactComponent as twitter } from "../../assets/twitter.svg";
import { ReactComponent as instagram } from "../../assets/instagram.svg";
import { ReactComponent as linkedin } from "../../assets/linkedin.svg";

import { ReactComponent as telegram } from "../../assets/telegram.svg";
import { ReactComponent as logo } from "../../assets/logogo.svg";

export const MainContainer = styled.div`
  background: #0C8970;
  color: var(--colorWhite);
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  background: #0C8970;
  color: var(--colorWhite);
  justify-content: space-between;
  padding: 100px 240px 30px 200px;
  flex-wrap: wrap;
  align-items: center;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction:column ;
  margin-top: 12px;
`

Wrap.Text = styled.a`
  color: #fff;
  font-size: 16px;
  margin-bottom: 28px;
  cursor: pointer;
`

Wrap.Icons = styled.div`
  display: flex;
  width: 100%;
`
export const Logos = styled(logo)`
  width: 197px;
  height: 197px;
  margin-left: 44px;
  opacity: 0.2;
  left: 2.6%;
  right: 74.9%;
  top: 5%;
  bottom: 6.94%;
  opacity: 0.8;
  path {
    fill: #fff;
  }
`;



export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: ${({ margin }) => !margin && "27px"};
`;

export const Icons = styled.div`
  display: flex;
  width: 100%;
  margin-top: auto;
  margin-bottom: 60px;
`;

export const Text = styled.a`
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  color: #fff;

`;
Icons.Instagram = styled(instagram)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-right: 12px;
`;
Icons.Facebook = styled(facebook)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-right: 12px;

`;
Icons.Linkedin = styled(linkedin)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-right: 12px;

`;
Icons.Twitter = styled(twitter)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const Iconlink = styled.a`
  width: 36px;
  height: 36px;

  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  border-radius: 3px;
  :hover {
    background: #323559;
  }
`;

Wrap.WrapInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 40px;
`

export const Input = styled.input`
  font-family: monospace;
  width: 269px;
  height: 30px;
  position: relative;
  outline: none;
  border-style: none;
  border-radius: 8px;
  padding-left: 20px;
  background-color: #fff;
  `;

Input.InputText = styled.div`
  font-family: monospace;
  font-weight: 20;
  color: #fff;
  font-size: 16px;
  margin-bottom: 6px;
`

Input.InputButton= styled.button`
  display: flex;
  align-items: center;
  background-color: #78D4C2;
  position: absolute;
  border-radius: 3px;
  color: #fff;
  margin-left: 222px;
  padding: 6.4px 14.6px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  height: 30px;
`

export const Telegram = styled(telegram)`
  position: absolute;
  margin-left: -50px;
  margin-top: 8px;
  border-radius: 3px;
  box-sizing: initial;
  padding: 12px;
  background: var(--colorBlue);
  margin-left: auto;
`;

/* ---------------Footer Bottom-------------------*/
export const Wrapper = styled.div`
  border-top: 1px solid #fff;
  margin: 0 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  color: #fff;
`;


