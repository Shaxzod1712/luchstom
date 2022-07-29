import React from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Img, ImgBackground, ImgNews, ImgText, Text, Texts, Wrapper, WrapperImg } from "./styled";
import datas from "../../utils/datas";
import news from '../../assets/newsimg.png'
import ImgBack from '../../assets/Group26.png'

export const NewsId=(a)=>{
   console.log(a);
  const {id}=useParams()
console.log(id, 'param id');
const pid=id.replace(':',"")
return(
    <Container>
            
            <WrapperImg>
                <ImgNews src={news}/>
                <ImgText>news</ImgText>
                <ImgText.ImgText2>daily</ImgText.ImgText2>
            </WrapperImg>
            
            <ImgBackground src={ImgBack}/>

        <Wrapper>

        {
            datas.map((val)=>
            `${val.id}`===pid &&(
                
                
                
                
                <Box key={val?.id}>
            <Text>
                {val?.text}
            </Text>
            <Img src={val?.img}/>
            {/* <Texts> {val?.idtext} */}
            <Texts> 
            As of today, new restrictions have come into force in Moscow due to the increase in the number of cases of COVID-19. This was reported by RBK. <br /><br />

It is stressed that citizens over the age of 60 and suffering from chronic diseases are required to adhere to a home regime, depending on their place of permanent residence. This restriction is valid until February 25, 2022. <br /><br />

Employers in Moscow will have to transfer at least 30 percent of the total number of workers, as well as all employees over the age of 60 and suffering from chronic diseases, to work remotely. The remote work format will also run until February 25, 2022. <br /><br />

However, outdoor walking and physical education exercises are not limited for senior citizens. Working Muscovites are also entitled to sick leave. Elderly and chronically ill citizens are exempted from following the home regimen if they have been vaccinated or coronavirus in the last six months. If an employee’s presence at work is important to the organization’s operations, they will not be sent to work remotely. <br /><br />

The requirement to switch to remote work does not apply to vaccinated and experienced employees, as well as employees of medical institutions, defense companies, Rosatom, Roscosmos and some other strategic industries. <br /><br />

Restrictions announced in Moscow on October 21 by Mayor Sergei Sobyanin will take effect from October 28 this year:<br /><br />

- non-working days begin, which last until November 7; <br /><br />

- A lockdown will be introduced in the capital. Shopping malls, shops, cinemas and public catering establishments will be closed. Pharmacies and grocery stores will continue to operate;<br /><br />

- restaurants will be able to work for pick-up service;<br /><br />

- theaters and museums will continue to operate, you will need QR codes to visit them.<br /><br />

According to the data, another 1,442 people infected with COVID-19 were hospitalized in Moscow over the past day, and 5,279 people were diagnosed with coronavirus infection.<br /><br />

A total of 35,660 new cases of infection were registered in Russia yesterday. 22,784 people were healed over the past day. 1072 people died from coronavirus.<br /><br />
            </Texts>
        </Box>
    )
    
    )
}
        </Wrapper>
    </Container>
)
}
export default NewsId