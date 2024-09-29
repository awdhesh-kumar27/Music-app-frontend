
import React from "react";
import './Title.css';
import SideOffCanva from "../OffCanva/SideOffCanva.js";
import { Button, Nav } from "react-bootstrap";
import { useNavigate } from "react-router";
const Title =(name)=>{

    return(
        <div className="toolbar-style-title">
               RAAG DHUN MUSIC WEB APP
        </div>
    );
}

export default Title;