import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`

export const Img = styled.img`
    width: 100%;
    height: 400px;
`

export const Wrap  = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px; 
    height: 555px;
    border: 2px solid #E2FFF9;
    border-radius: 6px;
    align-items: center;
    box-shadow: 0px 4px 10px rgba(12, 137, 112, 0.25), 0px -4px 10px rgba(12, 137, 112, 0.25), 4px 0px 10px rgba(12, 137, 112, 0.25), -4px 0px 10px rgba(12, 137, 112, 0.25);

    margin: 60px 0;
`

Wrap.Text = styled.div`
    font-family: monospace;
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 49px;
letter-spacing: 0.1em;
margin: 60px 0;
`

Wrap.Form = styled.form`
    display: flex;
    /* flex-direction: column; */
`

Wrap.NameInput = styled.input`
    height: 46px;
    border-radius: 6px;
    border: none;
    background-color: #E2FFF9;
    margin-bottom: 30px;
    color: #000;
    font-size: 15px;
    padding-left: 20px;
`

Wrap.NameButton =styled.div`
display: flex;
    width: 50%;
    height: 46px;
    background: linear-gradient(298deg, #0E9E81 26.06%, #0A6E5A 100%);
    border-radius: 6px;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    margin-left: auto;
    justify-content: center;
    align-items: center;
    box-shadow: -16.2462px -8.63828px 36.8px rgba(2, 27, 22, 0.31), inset 5.77644px 3.07139px 6.54222px #096754, inset -5.77644px -3.07139px 6.54222px #0EA486;
`

Wrap.Wrap2= styled.div`
display: flex;
flex-direction: column;
width: 460px;
margin-left: 14px;
`

Wrap.Textarea= styled.textarea`
    background-color: #E2FFF9;
    margin-bottom: 30px;
    border-radius: 4px;
    padding: 20px;
    color: #000;
    font-size: 15px;
    border: none;
`

Wrap.Label = styled.label`
    font-family: monospace;
    margin-bottom: 8px;
    font-size: 15px;
`

export const WrapCard  = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1000px; 
    height: 380px;
    border-radius: 6px;
    align-items: center;
    margin: 60px 0;
`

WrapCard.Card = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 380px;
    box-shadow: 0px 4px 10px rgba(12, 137, 112, 0.25), 0px -4px 10px rgba(12, 137, 112, 0.25), 4px 0px 10px rgba(12, 137, 112, 0.25), -4px 0px 10px rgba(12, 137, 112, 0.25);    border-radius: 4px;
    :hover{
        margin-bottom: 80px;
        transition: 1s;
    }
`

WrapCard.CardImg = styled.img`
    width: 120px;
    height: 120px;
    color: red;
    margin: 40px 0;
`

WrapCard.Text = styled.div`
    font-family: monospace;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.2em;
    margin-bottom: 40px;
`
WrapCard.Text2 = styled.div`
    font-family: monospace;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.1em;
    margin-bottom: 20px;
`