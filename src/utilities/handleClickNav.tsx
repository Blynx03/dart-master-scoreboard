import React from 'react'
import { useNavigate } from 'react-router-dom';


const handleClickNav = (choice: string) => {
    console.log(`${choice}1`)
    const navigate = useNavigate();
    console.log(`${choice}2`);
    navigate(`/${choice}`);
    console.log(`${choice}3`)
}

export default handleClickNav