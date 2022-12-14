import React from "react";
import {Navigate, Route, Routes} from 'react-router-dom'
import Navbar from '../components/Navbar'
import {navbar} from '../utils/navbar'

export const Root = ()=>{
    return(
        <Routes>
            <Route element={<Navbar/>}>
                {
                    navbar.map(({path, Element, id, hidden})=>{
                        return (
                            <Route key={id} path={path} element={Element}/>
                        )
                    })
                }
                <Route path="/" element={<Navigate to={'/home'}/>} />
            </Route>

            <Route path="*" element={<div>not found</div>} />
            
        </Routes>
    )
}
