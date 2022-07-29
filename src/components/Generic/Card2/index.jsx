import React from "react";
import { ButtonCard, Container, First, FirstImg} from "./styled";

 
export const Card2 = ({info , onClick}) => {
    return(
        <Container onClick={onClick}>
            <First>
                <FirstImg width={'100%'} height={'350px'} src={info?.img || null } alt="no imege" />
            <ButtonCard>{info?.title}</ButtonCard>
            </First>
        </Container>
        
    )
}
export default Card2