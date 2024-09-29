import React, { useCallback, useState } from "react";
import './Register.css';
import Button from "../Button/Button";
import HomeBar from "../HomeBar/HomeBar";

import {RegisterApi}  from "../../utils/RestApi.js";
import { Navigate } from "react-router";

const Register =()=>{
    const [UserName, SetUserName] = useState("");
    const [Message,SetMessage] = useState("");
    const [Email,SetEmail] = useState("");
    const [contact,SetContact] = useState("");
    const [name,SetName] = useState("");
    const [Password,SetPassword] = useState("");
    
    const emailhandler = (event)=>{
        SetEmail(event.target.value);
    }
    const userNamehandler = (event)=>{
        SetUserName(event.target.value);
    }
    const registerHandler = async(event)=>{
        event.preventDefault();
        var data = {
            username : UserName,
            email : Email,
            name : name,
            phonenumber : contact,
            password : Password

        }
        var url = "";
        const res = await RegisterApi(data,url);  
        console.log(res);
        SetMessage(res.data.message);
        SetUserName("");
        SetContact("");
        SetEmail("");
        SetName("");
        SetPassword("");

    }
    const namehandler = (event)=>{
        SetName(event.target.value)
    }
    const passwordhandler = (event)=>{
        SetPassword(event.target.value);
    }
    const contacthandler = (event)=>{
        SetContact(event.target.value);
    }
    return (
        <>
        <HomeBar></HomeBar>
        <div className="login-div">
        <div className="login-form">
            <form onSubmit={registerHandler}>
                <div><h1 className="heading">Register</h1></div>
                <div>
                <label>Name </label>
                <br></br>
                <input className="input-box" type="string"  name="name" value={name} onChange = {namehandler} required placeholder="Name"></input>
                </div>
                <div>
                <label>User Name </label>
                <br></br>
                <input className="input-box" type="string"  name="UserName" value={UserName} onChange = {userNamehandler} required placeholder="User Name"></input>
                </div>
                <div>
                <label>Email </label>
                <br></br>
                <input className="input-box" type="email"  name="email" value={Email} onChange = {emailhandler} required placeholder="Email"></input>
                </div>
                <div>
                <label>Password </label>
                <br></br>
                <input className="input-box" type="password" name="password" value={Password} onChange={passwordhandler} required placeholder="Password" ></input>
                </div>
                <div>
                <label>Contact No. </label>
                <br></br>
                <input className="input-box" type="string"  name="contact" value={contact} onChange = {contacthandler} required placeholder="Contact No."></input>
                </div>
                <div>
                    <button className="submit-button" type="submit">Register</button>
                </div>
            </form>
            {Message}
        </div>
    </div>
    </>
    );
    
}

export default Register;