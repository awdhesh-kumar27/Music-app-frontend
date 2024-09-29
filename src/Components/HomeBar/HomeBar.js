
import React from "react";
import './HomeBar.css';
import SideOffCanva from "../OffCanva/SideOffCanva.js";
import { Button, Nav } from "react-bootstrap";
import { useNavigate } from "react-router";
const HomeBar =(name)=>{
    const Navigate = useNavigate();
    const loginHandler =(event)=>{
        Navigate("/Login");
    }
    const registerHandler =(event)=>{
        Navigate("/Register");
    }
    return(
        <div className="toolbar-style">
             <Button className="toolbar-style-button" onClick={loginHandler}>Login</Button>
             <Button className="toolbar-style-button" onClick={registerHandler}>Register</Button>
        </div>
    );
}

export default HomeBar;