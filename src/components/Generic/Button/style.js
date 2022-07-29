import styled from "styled-components";

const getType = (type) =>{
    switch (type) {
        case 'primary' :
            return {
                background: '#0C8970',
                color: '#fff',
                letterspacing: '0.1em',
                border: 'none',

            };
        case 'secondary':
            return {
                background: '#78D4C2',
                color: '#fff',
                border: 'none',
            };
            default:
                return {
                background: 'linear-gradient(284deg, #FFFFFF 17.51%, #C4C4C4 100%)',
                // background: '#C4C4C4',
                // box-shadow: '-26.5214px -6.61253px 54.6667px rgba(51, 51, 51, 0.366), inset 10.3728px 2.58623px 10.6904px #B5B5B5, inset -10.3728px -2.58623px 10.6904px #FFFFFF',
                border: '1px solid #C4C4C4',
                color: '#000',
            };
    }
}

const Container = styled.div`
    display: flex;
    font-family: 'Gill Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: ${({ height }) => height || '44px'};
    min-width: ${({ width }) => (width ? width : '100%')};
    width: ${({ width }) => (width ? width : '100%')};
    border-radius: 6px;
    margin-right: ${({ mr }) => `${mr}px`};
    margin-left: ${({ ml }) => `${ml}px`};
    margin-top: ${({ mt }) => `${mt}px`};
    margin-bottom: ${({ mb }) => `${mb}px`};
    cursor: pointer;
    letter-spacing: 0.1em;
    ${({ type }) => getType(type)}
    :active {
        transform: scale(0.98);
        opacity: 0.7;
  }
`
export {Container}