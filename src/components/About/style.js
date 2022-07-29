import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    height: 345vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

Container.Img = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
`

export const Img = styled.img`
    position: absolute;
    width: 100%;
    height: 500px;
`

export const Wrap = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 1000px;
    height: 2000px;
    background-color: #0C8970;
    align-items: center;
    color: #fff;
    border-radius: 8px;
    margin: 420px 0 60px 0;
`

Wrap.Text = styled.div`
    font-family: monospace;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    margin: 60px 0;
    letter-spacing: 0.1em;
`
Wrap.Text2 = styled.div`
    font-family: monospace;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.1em;
    margin-bottom: 40px;
`

Wrap.Text3 = styled.div`
    font-family: monospace;
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.1em;
`

Wrap.Text4 = styled.div`
    font-family: monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 27px;
    letter-spacing: 0.1em;
    margin-top: 40px;
    margin: 40px;

`

Wrap.ImgWrap= styled.div`
    display: flex;
    width: 100%;
    height: 250px;
    background-color: #fff;
`

Wrap.Img = styled.img`
    width: 200px;
    height: 250px;
`

Wrap.ImgWrap2= styled.div`
    display: flex;
    width: 100%;
    height: 560px;
    background-color: #fff;
    flex-wrap: wrap;
    padding: 10px 0;
`

Wrap.Img2 = styled.img`
    /* width: 200px; */
    height: 130px;
`