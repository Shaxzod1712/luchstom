import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Container, Img, ImgBackground, ImgMini, ImgNews, Pagin, Text, Texts, WrapButton, Wrapper, WrapperImg, WrapperImgMini, WrapperText } from "./styled";
import nav from "../../utils/nav";
import news from '../../assets/ImgCotalog.png'
import ImgBack from '../../assets/Group26.png'
import { Button, Card2 } from "../Generic";

export const NewsId=(a)=>{
    const navigate=useNavigate()

    const {id}=useParams()
    const pid=id.replace(':',"")

const [page, setPage] = useState(2);
const [data, setData] = useState(nav);
const [countriesPerPage] = useState(3);

const lastPageIndex = page * countriesPerPage;
const firstPageIndex = lastPageIndex - countriesPerPage;
const currentPageIndex = data?.slice(firstPageIndex, lastPageIndex);

const onSubmit=(id)=>{
    // <NewsId  a={value} />
    navigate(`/catalog/:${id}`)
}
return(
    <Container>
            
            <WrapperImg>
                <ImgNews src={news}/>
                
            </WrapperImg>
            
            <ImgBackground src={ImgBack}/>

        <Wrapper>
        <WrapButton>
              <Button width={'220px'} type={'primary'}>About product</Button>
              <Button width={'220px'} >Specifications</Button>
              <Button width={'220px'} >Application</Button>
              <Button width={'220px'} >Documentation </Button>
        </WrapButton>
        {
            nav.map((val)=>
            `${val.id}`===pid &&(
                
                
                
                
                <Box key={val?.id}>
                    <WrapperText>
                        <Img src={val?.img}/>
                        <WrapperImgMini>
                        <ImgMini src={val?.img}/>
                        <ImgMini src={val?.img}/>
                        <ImgMini src={val?.img}/>
                        <ImgMini src={val?.img}/>
                        <ImgMini src={val?.img}/>
                        <ImgMini src={val?.img}/>
                        </WrapperImgMini>
                    </WrapperText>
                    <WrapperText>
                    <Text>{val?.title}</Text>
                    <Text.Text>{val?.title}</Text.Text>
                    {/* <Texts> {val?.idtext} */}
            <Texts> 
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Pharetra augue eget adipiscing <br />
            arcu. Sed suspendisse et viverra aliquet amet <br />
            pretium adipiscing consectetur. Nunc lectus <br /> 
            quis porttitor bibendum tristique libero sed. <br /> 
            Amet amet, ridiculus sociis eleifend a, <br /> 
            accumsan. Ut vel tempus, netus <br /><br />
            - Lorem ipsum dolor sit amet, consectetur <br /><br />
            - Lorem ipsum dolor sit amet, consectetur <br /><br />
            - Lorem ipsum dolor sit amet, consectetur <br /><br />
            - Lorem ipsum dolor sit amet, consectetur <br /><br />
            - Lorem ipsum dolor sit amet, consectetur <br /><br />
            - Lorem ipsum dolor sit amet, consectetur <br /> 
            adipiscing elit. Pharetra augue eget adipiscing <br />
            arcu. Sed suspendisse et viverra aliquet amet <br /> 
            pretium adipiscing consectetur. Nunc lectus 
            </Texts>
                    </WrapperText>
        </Box>

    )
    
    )
}
            <Pagin.Text>You may also like</Pagin.Text>
            <Pagin>
                {currentPageIndex?.map((value)=>
                    <Card2 onClick={()=>onSubmit(value.id)} key={value?.id} info={value}/>
                )}
            </Pagin>
            
        </Wrapper>
    </Container>
)
}
export default NewsId