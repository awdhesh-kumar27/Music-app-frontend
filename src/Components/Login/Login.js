import React, { useState,useEffect } from "react";
import './Login.css';
import Button from "../Button/Button";
import HomeBar from "../HomeBar/HomeBar";
import { loginApi } from "../../utils/RestApi";
import { useNavigate } from "react-router";
import { useAuth } from "../../utils/AuthContext";
const Login =()=>{

    const {token,setToken} = useAuth();
    const Navigate = useNavigate();
    const [Message,SetMessage] = useState("");
    const [Email,SetEmail] = useState("");
    const [Password,SetPassword] = useState("");
    const emailhandler=(event)=>{
        SetEmail(event.target.value);
    }

    const passwordhandler=(event)=>{
        SetPassword(event.target.value);
    }
    const loginHandler=async(event)=>{
        event.preventDefault();
        var data = {
             email : Email,
             password : Password
        }
        const res = await loginApi(data,"");
        console.log(res.data.token);
        localStorage.setItem('token', res.data.token);
        SetMessage(res.data.message);
        setToken(res.data.token);
        console.log(token);
        Navigate("/Home")
        SetEmail("");
        SetPassword("");
    }
    useEffect(() => {
        console.log(token); // This will log the token after it has been set
      }, [token]);
    return (
        <>
        <HomeBar></HomeBar>
        <div className="login-div">
            <div className="login-form">
                <form onSubmit={loginHandler}>
                    <div><h1 className="heading">Login</h1></div>
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
                        <button className="submit-button" type="submit">Login</button>
                    </div>
                </form>
                {Message}
            </div>
        </div>
        </>
    );
   
}

export default Login;