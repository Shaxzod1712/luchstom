import React from "react";
import { Container } from "./style";

export const Button = ({
    children, onClick, height, width, type, mr, ml, mt, mb
}) => {
    return <Container
    mr={mr}
    ml={ml}
    mt={mt}
    mb={mb}
    type={type}
    height={height}
    width={width}
    children={children}
    onClick={onClick}
    >{children}</Container>
}

export default Button