import React from "react";
import { Container, Wrap } from "./style";
import Backgraund from '../../assets/Group26.png'
import Card1 from '../../assets/unsplash1.png'
import Card2 from '../../assets/unsplash2.png'
import Card3 from '../../assets/unsplash3.png'
import Card4 from '../../assets/unsplash4.png'
import Card5 from '../../assets/unsplash5.png'
import Card6 from '../../assets/unsplash6.png'

import HomeAboutImg from '../../assets/HomeAbout.png'
import DailyImg1 from '../../assets/unsplash_1.png'
import DailyImg2 from '../../assets/unsplash_2.png'
import DailyImg3 from '../../assets/unsplash_3.png'

import GalleryIMG1 from '../../assets/gallery1.png'
import GalleryIMG2 from '../../assets/gallery2.png'
import GalleryIMG3 from '../../assets/gallery3.png'
import GalleryIMG4 from '../../assets/gallery4.png'
import GalleryIMG5 from '../../assets/gallery5.png'
import GalleryIMG6 from '../../assets/gallery6.png'
import { Signin } from "../Signin";
import { Button } from "../Generic";

export const Card =()=>{
    return(
        <Container>
            <Container.Img src={Backgraund}/>
            <Wrap>
                <Wrap.Text>Our divisions</Wrap.Text>
                <Wrap.CardWrap>
                    <Wrap.Card>
                        <Wrap.CardImg src={Card6}/>
                        <Wrap.CardText>Ophthalmology</Wrap.CardText>
                        <Wrap.CardText2>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus </Wrap.CardText2>
                    </Wrap.Card>
                    <Wrap.Card>
                        <Wrap.CardImg src={Card5}/>
                        <Wrap.CardText>Sterilization</Wrap.CardText>
                        <Wrap.CardText2>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus </Wrap.CardText2>
                    </Wrap.Card>
                    <Wrap.Card>
                        <Wrap.CardImg src={Card4}/>
                        <Wrap.CardText>Patient Life Support</Wrap.CardText>
                        <Wrap.CardText2>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus </Wrap.CardText2>
                    </Wrap.Card>
                    <Wrap.Card>
                        <Wrap.CardImg src={Card3}/>
                        <Wrap.CardText>Stomatology </Wrap.CardText>
                        <Wrap.CardText2>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus </Wrap.CardText2>
                    </Wrap.Card>
                    <Wrap.Card>
                        <Wrap.CardImg src={Card2}/>
                        <Wrap.CardText>Hospital Furniture</Wrap.CardText>
                        <Wrap.CardText2>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus </Wrap.CardText2>
                    </Wrap.Card>
                    <Wrap.Card>
                        <Wrap.CardImg src={Card1}/>
                        <Wrap.CardText>Service Center</Wrap.CardText>
                        <Wrap.CardText2>    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus </Wrap.CardText2>
                    </Wrap.Card>
                </Wrap.CardWrap>
            {/* //////////////////////////// */}
            
                <Wrap.Text>The biggest demand</Wrap.Text>
                <Wrap.CardWrap>
                    <Wrap.Card2>
                        <Wrap.CardImg src={Card6}/>
                        <Wrap.CardText12>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus </Wrap.CardText12>
                        <Wrap.Button>See More</Wrap.Button>
                    </Wrap.Card2>
                    <Wrap.Card2>
                        <Wrap.CardImg src={Card5}/>
                        <Wrap.CardText12>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus </Wrap.CardText12>
                        <Wrap.Button>See More</Wrap.Button>
                    </Wrap.Card2>
                    <Wrap.Card2>
                        <Wrap.CardImg src={Card4}/>
                        <Wrap.CardText12>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus </Wrap.CardText12>
                        <Wrap.Button>See More</Wrap.Button>
                    </Wrap.Card2>
                </Wrap.CardWrap>
                <Wrap.Text>About us</Wrap.Text>
                <Wrap.WrapAbout>
                    <Wrap.HomeAbout  src={HomeAboutImg}/>
                    <Wrap.HomeAboutText>
                        <Wrap.HomeAboutText1>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel</Wrap.HomeAboutText1>
                        <Wrap.HomeAboutText1>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel</Wrap.HomeAboutText1>
                    </Wrap.HomeAboutText>
                </Wrap.WrapAbout>
                <Wrap.Text>WHY CHOOSE US</Wrap.Text>
                <Wrap.ChooseWrap>
                    <Wrap.ChooseCard>
                        <Wrap.ChooseCardImgVector />
                        <Wrap.ChooseCardText1>20 years on the market</Wrap.ChooseCardText1>
                        <Wrap.ChooseCardText2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis habitasse imperdiet fermentum gravida elit faucibus enim pretium.</Wrap.ChooseCardText2>
                    </Wrap.ChooseCard>
                    <Wrap.ChooseCard>
                        <Wrap.ChooseCardImgChart />
                        <Wrap.ChooseCardText1>Strong financial position</Wrap.ChooseCardText1>
                        <Wrap.ChooseCardText2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis habitasse imperdiet fermentum gravida elit faucibus enim pretium.</Wrap.ChooseCardText2>
                    </Wrap.ChooseCard>
                    <Wrap.ChooseCard>
                        <Wrap.ChooseCardImgGlobe />
                        <Wrap.ChooseCardText1>Rich international supply experience</Wrap.ChooseCardText1>
                        <Wrap.ChooseCardText2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis habitasse imperdiet fermentum gravida elit faucibus enim pretium.</Wrap.ChooseCardText2>
                    </Wrap.ChooseCard>
                </Wrap.ChooseWrap>
                <Wrap.Text>Completed Projects</Wrap.Text>
                <Wrap.ProjectText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mauris sed mauris luctus etiam vitae quis diam. Elementum convallis mauris, nisi semper. Odio mi tristique iaculis est arcu mi. Arcu ultrices feugiat in condimentum suspendisse mauris amet ac, sapien. Luctus sodales sit donec mi magna sapien. Aliquet eu </Wrap.ProjectText>
                <Wrap.ProjectWrap>
                    <Wrap.ProjectImg11 />
                    <Wrap.ProjectCard>
                        <Wrap.ProjectCardText>Completed project world bank -IDB</Wrap.ProjectCardText>
                    </Wrap.ProjectCard>
                    <Wrap.ProjectImg22 />
                    <Wrap.ProjectCard>
                        <Wrap.ProjectCardText>Completed project world bank -IDB</Wrap.ProjectCardText>
                    </Wrap.ProjectCard>
                    <Wrap.ProjectImg33 />
                    <Wrap.ProjectCard>
                        <Wrap.ProjectCardText>Completed project world bank -IDB</Wrap.ProjectCardText>
                    </Wrap.ProjectCard>
                </Wrap.ProjectWrap>
                <Wrap.Text>daily News</Wrap.Text>
                <Wrap.DailyWrap>
                    <Wrap.DailyCard>
                        <Wrap.DailyImg src={DailyImg1} />
                        <Wrap.DailyText>Lorem ipsum dolor sit amet, consectetur</Wrap.DailyText>
                        <Wrap.DailyText2>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna </Wrap.DailyText2>
                        <Wrap.DailyText3>21.10.2021</Wrap.DailyText3>
                        <Wrap.DailyButton>See more</Wrap.DailyButton>
                    </Wrap.DailyCard>
                    <Wrap.DailyCard>
                        <Wrap.DailyImg src={DailyImg2} />
                        <Wrap.DailyText>Lorem ipsum dolor sit amet, consectetur</Wrap.DailyText>
                        <Wrap.DailyText2>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna </Wrap.DailyText2>
                        <Wrap.DailyText3>21.10.2021</Wrap.DailyText3>
                        <Wrap.DailyButton>See more</Wrap.DailyButton>
                    </Wrap.DailyCard>
                    <Wrap.DailyCard>
                        <Wrap.DailyImg src={DailyImg3} />
                        <Wrap.DailyText>Lorem ipsum dolor sit amet, consectetur</Wrap.DailyText>
                        <Wrap.DailyText2>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna </Wrap.DailyText2>
                        <Wrap.DailyText3>21.10.2021</Wrap.DailyText3>
                        <Wrap.DailyButton>See more</Wrap.DailyButton>
                    </Wrap.DailyCard>
                </Wrap.DailyWrap>
                <Wrap.Text>Gallery</Wrap.Text>
                <Wrap.GalleryWrap>
                    <Wrap.GalleryWrap2>
                        <Wrap.GalleryImg1 src={GalleryIMG1}/>
                        <Wrap.GalleryImg2 src={GalleryIMG2}/>
                        <Wrap.GalleryImg2 src={GalleryIMG3}/>
                    </Wrap.GalleryWrap2>
                    <Wrap.GalleryWrap2>
                        <Wrap.GalleryImg2 src={GalleryIMG4}/>
                        <Wrap.GalleryImg2 src={GalleryIMG5}/>
                        <Wrap.GalleryImg1 src={GalleryIMG6}/>
                    </Wrap.GalleryWrap2>
                </Wrap.GalleryWrap>
                    <Button type={'primary'} width={'160px'} height={'44px'}>See more</Button>
                <Wrap.Text>We build trust</Wrap.Text>
                <Wrap.BuildWrap>
                    <Wrap.BuildCard>
                        <Wrap.BuildText1>15</Wrap.BuildText1>    
                        <Wrap.BuildText2>years</Wrap.BuildText2>    
                    </Wrap.BuildCard><Wrap.BuildBorder/>
                    <Wrap.BuildCard>
                        <Wrap.BuildText1>200</Wrap.BuildText1>    
                        <Wrap.BuildText2>projects</Wrap.BuildText2>    
                    </Wrap.BuildCard><Wrap.BuildBorder/>
                    <Wrap.BuildCard>
                        <Wrap.BuildText1>40</Wrap.BuildText1>    
                        <Wrap.BuildText2>partners</Wrap.BuildText2>    
                    </Wrap.BuildCard><Wrap.BuildBorder/>
                    <Wrap.BuildCard>
                        <Wrap.BuildText1>95</Wrap.BuildText1>    
                        <Wrap.BuildText2>clients</Wrap.BuildText2>    
                    </Wrap.BuildCard><Wrap.BuildBorder/>
                    <Wrap.BuildCard>
                        <Wrap.BuildText1>133</Wrap.BuildText1>    
                        <Wrap.BuildText2>employees</Wrap.BuildText2>
                    </Wrap.BuildCard>
                </Wrap.BuildWrap>
                {/* <Wrap.Text>Orderin</Wrap.Text>
                <Wrap.OrderinWrap>
                    <Wrap.OrderinForm>
                        <Wrap.OrderinWrap2>
                            <Wrap.OrderinLabel>Name</Wrap.OrderinLabel>
                            <Wrap.OrderinNameInput/>
                            <Wrap.OrderinLabel>Phone</Wrap.OrderinLabel>
                            <Wrap.OrderinNameInput/>
                            <Wrap.OrderinLabel>Email address </Wrap.OrderinLabel>
                            <Wrap.OrderinNameInput type='email'/>
                        </Wrap.OrderinWrap2>
                        <Wrap.OrderinWrap2>
                            <Wrap.OrderinLabel>Send you quition ?</Wrap.OrderinLabel>
                            <Wrap.OrderinTextarea name="" id="" cols="30" rows="8" placholder='Text...'/>
                            <Wrap.OrderinButton>Get consult</Wrap.OrderinButton>
                        </Wrap.OrderinWrap2>
                    </Wrap.OrderinForm>
                </Wrap.OrderinWrap> */}
                <Signin/>
            </Wrap>
            {/* <Container.Img2 src={Backgraund}/> */}
        </Container>
    )
}

export default Card