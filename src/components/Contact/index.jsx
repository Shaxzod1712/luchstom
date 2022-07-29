import React from 'react'
import { Container, Img,  WrapCard } from './style'
import ContactImg from '../../assets/Contact.png'
import Account from '../../assets/account.png'
import Setting from '../../assets/setting.png'
import Mail from '../../assets/mail.png'
import { Signin } from '../Signin'

export const Contact = () =>{
    return(
        <Container>
            <Img src={ContactImg}/>
            <Signin/>
            <WrapCard>
                <WrapCard.Card>
                    <WrapCard.CardImg src={Account}/>
                    <WrapCard.Text>Manager Phone</WrapCard.Text>
                    <WrapCard.Text2>+998 90 961-69-58</WrapCard.Text2>
                    <WrapCard.Text2>+998 71 261-53-08</WrapCard.Text2>
                </WrapCard.Card>
                <WrapCard.Card>
                    <WrapCard.CardImg src={Mail}/>
                    <WrapCard.Text>E-mail</WrapCard.Text>
                    <WrapCard.Text2>nur.07@mail.ru</WrapCard.Text2>
                </WrapCard.Card>
                <WrapCard.Card>
                    <WrapCard.CardImg src={Setting}/>
                    <WrapCard.Text>Service Center</WrapCard.Text>
                    <WrapCard.Text2>+998 97 747-07-65</WrapCard.Text2>

                </WrapCard.Card>
            </WrapCard>
            
        </Container>
    )
}
