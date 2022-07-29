import React from "react";
import { Container, First, Forth, Second, Third } from "./styled";

 
export const Card = ({info , onClick}) => {
    return(
        <Container onClick={onClick}>
            <First>
                <img width={'100%'} src={info?.img || null } alt="" />
            </First>
            <Second>
                {info?.text}
            </Second>
            <Third>
                {info?.texts}
            </Third>
            <Forth>
                <div>
                    {info?.data}
                </div>
                <div>
                    {info?.read}
                </div>
            </Forth>
        </Container>
        
    )
}
export default Card