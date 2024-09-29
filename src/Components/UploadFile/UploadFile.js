import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { PostApi } from "../../utils/RestApi";
import './UploadFile.css';
import NavigationBar from "../NaviGationBar/NavigationBar";
import { useAuth } from "../../utils/AuthContext";


const UploadFile =  ()=>{


    // const [token,setToken] = useAuth();
    const token = localStorage.getItem('token');
    const [file, setFile] = useState({});
    const Navigate = useNavigate();
    const [currentState, setCurrentState] = useState("Upload the Song");

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUploadClick = async() => {
        if (!file) {
            return ;
        }
         setCurrentState("Uploading file")
        const formData = new FormData();
        formData.append('file', file);
        // formData.append('userId',"dklfjadlsfkjadlsfasf");
        const response = await PostApi(formData,"/AddSong",token);
        setCurrentState("Uploaded file successfully");
        Navigate("/Home");
        
        console.log(response);
        
        
    };

    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="upload-song-div">

                <label style={{color:"red",fontSize:"24px",fontFamily:"sans-serif"}}>{currentState}</label>
                <br></br>
                <br></br>
                <input type="file" onChange={handleFileChange}  accept=".mp3" required></input>

                <button  style={{backgroundColor:"black",color:"white", width:"80px"}} onClick={handleUploadClick}>Upload</button>
            </div>
         
        </div>
    );
}

export default UploadFile;