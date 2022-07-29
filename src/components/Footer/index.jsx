import React from 'react';
import {
  MainContainer,
  Container,
  Icons,
  Wrap,
  Input,
  Text,
  Logos,
  Wrapper,
} from './style';


export const FooterComponent = () => {
  return (
    <MainContainer>
      <Container>
      <Logos />
      <Wrap>
        <Wrap.Text>ABOUT US</Wrap.Text>
        <Wrap.Text>PRODUCTS</Wrap.Text>
        <Wrap.Text>PROJECT</Wrap.Text>
        <Wrap.Text>CATALOG</Wrap.Text>
      </Wrap>
      <Wrap>
        <Wrap.Text>GALLERY</Wrap.Text>
        <Wrap.Text>TERMS</Wrap.Text>
        <Wrap.Text>HELP</Wrap.Text>
        <Wrap.Text>NEWS</Wrap.Text>
      </Wrap>
      <Wrap>
        <Wrap.Text>ABOUT US</Wrap.Text>
        <Wrap.Text>PRODUCTS</Wrap.Text>
        <Wrap.Text>PROJECT</Wrap.Text>
        <Wrap.Text>CATALOG</Wrap.Text>
      </Wrap>
      <Wrap>
        <Icons>

          <Icons.Instagram/>
          <Icons.Facebook/>
          <Icons.Linkedin/>
          <Icons.Twitter/>
        </Icons>
        <Input.InputText>Any quition ?</Input.InputText>
        <Wrap.WrapInput>
        <Input/>
        <Input.InputButton>Go</Input.InputButton>

        </Wrap.WrapInput>
      </Wrap>
        
        
        
        
       
        
      </Container>
      <Wrapper>
        <a href="https://t.me/shaxzod_1712">
        <Text>Frontent Developer by Shaxzod</Text>
        </a>
        <Text>2022</Text>
        
      </Wrapper>
    </MainContainer>
  );
};

export default FooterComponent;
