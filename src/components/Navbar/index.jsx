import React from "react";
import {
    activeStyle,
    Container,
    Logo,
    NavbarBody,
    NavbarWrapper,
    Wrapper,
} from './style'
import { Outlet, NavLink, useNavigate} from 'react-router-dom'
import { navbar } from "../../utils/navbar";

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <Wrapper>
            <Container>
                <NavbarWrapper>
                    <Logo onClick={()=> navigate('/home')}>
                        <Logo.Icon/>
                        <div>
                        <Logo.Title>Luch Stom Interprise</Logo.Title>
                        <Logo.Title1>2005</Logo.Title1>
                        </div>
                    </Logo>
                    <NavbarBody>
                        {
                            navbar.map((value)=>{
                                console.log(value.title);
                                return (
                                    !value.hidden && (
                                        <NavLink style={activeStyle} key={value.id} to={value.path}>
                                            {value.title}
                                        </NavLink>
                                    )
                                )
                            })
                        }
                    </NavbarBody>
                </NavbarWrapper>
            </Container>
            <Outlet/>
        </Wrapper>
    )
}

export default Navbar