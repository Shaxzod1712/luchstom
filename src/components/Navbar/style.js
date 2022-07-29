import styled from 'styled-components'
import { ReactComponent as icon } from '../../assets/logo.svg'
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
`

export const activeStyle = ({isActive}) =>{
    return {
        color: isActive ? 'white' : '#000',
        textDecoration: 'none',
        margin: '0 8px',
        padding: '0 14px',
        background: isActive?'#0C8970': '#fff',
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "18px",
        lineHeight: "24px",
    }
}

export const NavbarWrapper = styled.div`
    display: flex;
    height: 64px;
    max-width: 1440px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    width: 100%;
    color: #000;
    padding: 46px 130px;
`
export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
Logo.Title = styled("div")`
  margin-left: 11px;
  margin-top: 16px;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 0.1em;
  border-bottom: 1.6px solid #000;
`;
Logo.Title1 = styled("div")`
  margin-left: 11px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-align: center;
`;
Logo.Icon=styled(icon)`
  width: 54px;
  height: 54px;
`

export const NavbarBody = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    color: #000;
`