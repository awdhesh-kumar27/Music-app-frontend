import axios from "axios";
import {Server_Url}  from "../../src/Assets/backend.js";
import { TbBookmark } from "react-icons/tb";
// import { useAuth } from "./AuthContext.js";
// import {token,setToken}



export const RegisterApi = async(data,url)=>{

   const token = 'your-token-here'; 
   const config = {
       headers: {
           Authorization: `Bearer ${token}`, 
       },
   };
          
        try {
      
            const res = await axios.post(Server_Url + "/Register",data,config);
            return res;
         } catch (error) {
            throw error;
         }
    
}


export const loginApi =async(data,url)=>{
    
   const token = 'your-token-here'; 
   const config = {
       headers: {
           Authorization: `Bearer ${token}`, 
       },
   };
    try {
        const res = await axios.post(Server_Url + "/Login" ,data,config);
        console.log(res);
        return res;
     } catch (error) {
        return error;
     }
}

export const logoutApi = async()=>{
   const token = 'your-token-here'; 

   const config = {
       headers: {
           Authorization: `Bearer ${token}`, 
       },
   };
    try {
        const res = axios.get("/logout",config );
        return res;
     } catch (error) {
        return error;
     }
}

export const PostApi = async( data,url,Token)=>{
//    const token = 'your-token-here'; 
const token = Token;
   const config = {
       headers: {
           Authorization: `Bearer ${token}`, 
       },
   };
     try {
         // console.log(url,data);
        const res = await axios.post(Server_Url+ url,  data, config);
        // console.log(url,data);
        return res;
     } catch (error) {
        return error;
     }
}

export const GetApi = async(url,data,Token)=>{
   const token = Token; 
   const config = {
       headers: {
           Authorization: `Bearer ${token}`, 
       },
   };
    try {
        console.log(data);
        const res = await axios.get(Server_Url + url,{ params: data, ...config });
        return res;
     } catch (error) {
        return error;
     }
}

export const GetSongs = async(url,data,Token)=>{
   const token = Token; 
//    console.log(token);
   const config = {
       headers: {
           Authorization: `Bearer ${token}`, 
       },
   };
    try {

        const res = await axios.get( url,{ params: data, ...config });
        return res.data;
     } catch (error) {
        return error;
     }
}
export const GetSong = async(url,data = {},Token)=>{
//    const token = 'your-token-here'; 
     const token = Token;
   const config = {
       headers: {
           Authorization: `Bearer ${token}`, 
       },
   };
    try {
        console.log(Server_Url+url);
        const res = await axios.get(Server_Url + url,{ params: data, ...config } );
        return res.data;
     } catch (error) {
        return error;
     }
}

export const PatchApi = async(data,url,Token)=>{
//    const token = 'your-token-here';
const token = Token; 
   const config = {
       headers: {
           Authorization: `Bearer ${token}`, 
       },
   };
    try {
        // console.log(Server_Url+url);
        const res = axios.patch(Server_Url + url, data, config );
        return res;
     } catch (error) {
        return error;
     }
}

export const DeleteApi = async(data={},url,Token)=>{
//    const token = 'your-token-here'; 
    const token = Token;
   const config = {
       headers: {
           Authorization: `Bearer ${token}`, 
       },
   };
    try {
        const res = axios.delete(Server_Url + url,{ params: data, ...config });
        return res;
     } catch (error) {
        return error;
     }
}