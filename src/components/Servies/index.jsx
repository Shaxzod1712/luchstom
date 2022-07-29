import React, { useState } from 'react'
import { Box, Container, Img, Wrap, Wrap2, WrapDarmon, Wrappin } from './style'
import Group from  '../../assets/Group26.png'
import Medical from '../../assets/Medicall.png'
import ImgServies from '../../assets/ImgServies.png'
import { Button, Input } from '../Generic'
import { useNavigate } from 'react-router-dom'


export const About = () =>{
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const onSubmit = () => {
        console.log(name, phone, email)
        setName('')
        setPhone('')
        setEmail('')
    }

    const navigate = useNavigate();

       const onclick = () => {
       navigate('/contact');
       }
    return(
        <Container>

            <Container.Img src={Group}/>
            <>
            <Img src={ImgServies}/>
            <Box>
                <Box.Text1>Services Center</Box.Text1>
                <Box.Text2>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel</Box.Text2>
                <Button onClick={onclick} ml={'430'} mt={'30'} width={'170px'} height={'40px'}>CALL THE MASTER</Button>
                
            </Box>
            </>
            <Wrap>
                <Wrap.CardWrap>
                    <Wrap.Card>
                        <Wrap.Parcel/>
                        <Wrap.CardText>BRAND WARRANTY</Wrap.CardText>
                        <Wrap.CardText2>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, </Wrap.CardText2>
                    </Wrap.Card>
                    <Wrap.Card>
                        <Wrap.Search/>
                        <Wrap.CardText>FREE DIAGNOSTICS</Wrap.CardText>
                        <Wrap.CardText2>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, </Wrap.CardText2>
                    </Wrap.Card>
                    <Wrap.Card>
                        <Wrap.Call/>
                        <Wrap.CardText>CALL CENTER</Wrap.CardText>
                        <Wrap.CardText2>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, </Wrap.CardText2>
                    </Wrap.Card>
                    <Wrap.Card>
                        <Wrap.List/>
                        <Wrap.CardText>URGENT REPAIR</Wrap.CardText>
                        <Wrap.CardText2>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, </Wrap.CardText2>
                    </Wrap.Card>
                    <Wrap.Card>
                        <Wrap.Bag/>
                        <Wrap.CardText>17 YEARS OF EXPERENCE</Wrap.CardText>
                        <Wrap.CardText2>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, </Wrap.CardText2>
                    </Wrap.Card>
                    <Wrap.Card>
                        <Wrap.Up/>
                        <Wrap.CardText>SATISFIED CUSTEMER</Wrap.CardText>
                        <Wrap.CardText2>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, </Wrap.CardText2>
                    </Wrap.Card>
                </Wrap.CardWrap>
                <Wrap.Text>Medical Equipment Servicing,<br /> Repair and Maintenance</Wrap.Text>
                <Wrap2>
                    <Wrap2.Img>
                        <Wrap2.Img2 src={Medical}/>
                    </Wrap2.Img>
                    <Wrap2.Text>
                        <Wrap.Text>Why contact our service <br />   center?</Wrap.Text>
                        <Wrap2.Wrap>
                            <Wrap2.WrapText2>
                                <Wrap2.WrapText>
                                    <Wrap2.Icon/>
                                    <Wrap2.IconText>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</Wrap2.IconText>
                                </Wrap2.WrapText>
                                <Wrap2.WrapText>
                                    <Wrap2.Icon/>
                                    <Wrap2.IconText>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</Wrap2.IconText>
                                </Wrap2.WrapText>
                            </Wrap2.WrapText2>
                            <Wrap2.WrapText2>
                                <Wrap2.WrapText>
                                    <Wrap2.Icon/>
                                    <Wrap2.IconText>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</Wrap2.IconText>
                                </Wrap2.WrapText>
                                <Wrap2.WrapText>
                                    <Wrap2.Icon/>
                                    <Wrap2.IconText>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</Wrap2.IconText>
                                </Wrap2.WrapText>
                            </Wrap2.WrapText2>
                        </Wrap2.Wrap>
                    </Wrap2.Text>
                </Wrap2>
            </Wrap>
                <WrapDarmon>
                    <WrapDarmon.Text>What they say about us</WrapDarmon.Text>
                </WrapDarmon>
                <Wrappin>
                <Wrappin.Text >We can help answer your <br /> questions relating to:</Wrappin.Text>
                <Wrappin.Wrap>
                    <Wrappin.Wrap2>
                        <Wrappin.Label>Name</Wrappin.Label>
                        <Input width={'420px'} value={name} mb={'28'} onChange={({target:{value}})=> setName(value)}/>
                        <Wrappin.Label>Phone</Wrappin.Label>
                        <Input width={'420px'} value={phone} mb={'28'} onChange={({target:{value}})=> setPhone(value)}/>
                        <Wrappin.Label>Organization</Wrappin.Label>
                        <Input width={'420px'} value={email} mb={'28'} onChange={({target:{value}})=> setEmail(value)}/>
                    </Wrappin.Wrap2>
                    <Wrappin.Wrap2>
                        <Wrappin.Label>What questions did you want to say?</Wrappin.Label>
                        <Wrappin.Textarea name="" id="" cols="30" rows="9" placholder='Text...'></Wrappin.Textarea>
                        <Button onClick={onSubmit} ml={'240'}  type={'primary'} width={'220px'} height={'44px'}>
                        SEND MASSEGE
                        </Button>
                    </Wrappin.Wrap2>
                </Wrappin.Wrap>
                </Wrappin>
        </Container>
    )
}

export default About








































// import React from "react";
// import { Container,  Wrap, Img, WrapWrap } from "./style";
// import { Button } from "../Generic";
// import ImgServies from '../../assets/ImgServies.png'
// import {useNavigate} from 'react-router-dom'


// export const Servies =()=>{
//     const navigate = useNavigate();

//     const onclick = () => {
//     navigate('/contact');
//     }
//     return(
//         <Container>
//             <Img src={ImgServies}/>
//         <Wrap>
//             <Wrap.Text>
//                 Services Center
//             </Wrap.Text>
//             <Wrap.Text1>
//             Lorem ipsum dolor sit amet, and o consectetur adipiscing elit ut aliquam, purus sit ameeeet luctus    venenatis, lectus magna fringilla urna, porttitor rhoncus  dolor dolor purus nono enim praesent elementum facilisis leo, vel
//             </Wrap.Text1>
//             <Button onClick={onclick} ml={'430'} mt={'30'} width={'170px'} height={'40px'}>CALL THE MASTER</Button>
//                 {/* <Wrap.Text>
//                     <Wrap.Text1>Servies Center</Wrap.Text1>
//                     <Wrap.Text2>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel</Wrap.Text2> */}
//                     {/* <Button onClick={onclick} width={'166px'} height={'42px'}>SHOW MORE</Button> */}
//                 {/* </Wrap.Text> */} 
//             </Wrap>
//             <WrapWrap>
// dwdwd
//             </WrapWrap>
//         </Container>
//     )
// }

// export default Servies