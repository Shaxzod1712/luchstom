import React, { useState } from "react";
import { Wrap } from "./style";
import { Button, Input } from "../Generic";

export const Signin = () =>{
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const onSubmit = () => {
        console.log(name, phone, email)
        setName('')
        setPhone('')
        setEmail('')
    }
    return(
        <>
            <Wrap>
                <Wrap.Text >Ordein</Wrap.Text>
                <Wrap.Wrap>
                    <Wrap.Wrap2>
                        <Wrap.Label>Name</Wrap.Label>
                        <Input width={'420px'} value={name} mb={'28'} onChange={({target:{value}})=> setName(value)}/>
                        <Wrap.Label>Phone</Wrap.Label>
                        <Input width={'420px'} value={phone} mb={'28'} onChange={({target:{value}})=> setPhone(value)}/>
                        <Wrap.Label>Email address</Wrap.Label>
                        <Input width={'420px'} value={email} mb={'28'} onChange={({target:{value}})=> setEmail(value)}/>
                    </Wrap.Wrap2>
                    <Wrap.Wrap2>
                        <Wrap.Label>Send you quetion?</Wrap.Label>
                        <Wrap.Textarea name="" id="" cols="30" rows="6" placholder='Text...'></Wrap.Textarea>
                        <Button onClick={onSubmit} ml={'240'}  type={'primary'} width={'220px'} height={'44px'}>
                        Get Consult
                        </Button>
                    </Wrap.Wrap2>
                </Wrap.Wrap>
            </Wrap>
        </>
    )
}