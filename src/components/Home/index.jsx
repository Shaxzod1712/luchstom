import { Carousel, Radio } from 'antd';
import React, { useState } from 'react';
// import React from "react";
import { Container, Main, Wrap } from "./style";
import HomeImgs from '../../assets/Slider.png'
import { Button } from "../Generic";
import {useNavigate} from 'react-router-dom'
import { Card } from "../Card";


export const Home = () => {
    // //////////////////////
        const [dotPosition, setDotPosition] = useState('left');

        const handlePositionChange = ({ target: { value } }) => {
          setDotPosition(value);
        };
    // /////////////////


    const navigate = useNavigate();

    const onclick = () => {
    navigate('/servies');

  };
    return(
        <Container>
            <Wrap>
                {/* /////////////////////// */}
                <>
                    <Radio.Group
                        onChange={handlePositionChange}
                        value={dotPosition}
                        style={{
                          marginBottom: 8,
                        }}
                    />
                    
      <Carousel dotPosition={dotPosition}>
        <div>
          <Wrap.Img src={HomeImgs}/>
        </div>
        <div>
          <Wrap.Img src={HomeImgs}/>
        </div>
        <div>
          <Wrap.Img src={HomeImgs}/>
        </div>
        <div>
                <Wrap.Img src={HomeImgs}/>
        </div>
      </Carousel>
    </>
                <Wrap.WrapIcons>
                    <a href="https://www.instagram.com/shaxzod__1712/">
                    <Wrap.IconsInstagram/>
                    </a>
                    <a href="https://t.me/shaxzod_1712">
                    <Wrap.IconsLinkedin/>
                    </a>
                    <a href="https://www.instagram.com/shaxzod__1712/">
                    <Wrap.IconsFacebook/>
                    </a>
                    <a href="https://t.me/shaxzod_1712">
                    <Wrap.IconsTwitter/>
                    </a>
                </Wrap.WrapIcons>
                <Wrap.Text>
                    <Wrap.Text1>80% of disease detection depends on good equipment</Wrap.Text1>
                    <Wrap.Text2>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis....</Wrap.Text2>
                    <Button onClick={onclick} width={'166px'} height={'42px'}>SHOW MORE</Button>
                </Wrap.Text>
            </Wrap>
            <Main>
                <Card/>
            </Main>
        </Container>
        
    )
}

export default Home