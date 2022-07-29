import styled from "styled-components";

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
Wrap.Wrap =styled.div`
    display: flex;
`
Wrap.Wrap2= styled.div`
display: flex;
flex-direction: column;
width: 460px;
margin-left: 14px;
`

Wrap.Label = styled.label`
    font-family: monospace;
    margin-bottom: 8px;
    font-size: 15px;
`

Wrap.Textarea= styled.textarea`
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(12, 137, 112, 0.25), 0px -4px 10px rgba(12, 137, 112, 0.25), 4px 0px 10px rgba(12, 137, 112, 0.25), -4px 0px 10px rgba(12, 137, 112, 0.25);
    margin-bottom: 30px;
    border-radius: 4px;
    padding: 20px;
    color: #000;
    font-size: 15px;
    border: none;
    outline: none;
`