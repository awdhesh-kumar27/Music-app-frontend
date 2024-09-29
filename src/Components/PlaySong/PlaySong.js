import React, { useEffect,useRef, useState } from "react";
import { GetSong } from "../../utils/RestApi";

import { useParams } from "react-router";
import NavigationBar from "../NaviGationBar/NavigationBar";
import './PlaySong.css';
import PlayJs from "../PlayJS/PlayJs";
import { useAuth } from "../../utils/AuthContext";

const PlaySong = ()=>{
      //  const [token,setToken] = useAuth();
      const token = localStorage.getItem('token');
        const {id} = useParams();
        // console.log(id);
        // const[songDetail,setSongDetail] = useState({});
        // let songDetail = {songName : ""};
         const [SongName, setSongName] = useState("Song Loading ...");
        // const [Id,setId] = useState("");
    //   
        const audioRef = useRef(null);
        const [songUrl, setSongUrl] = useState('');
       useEffect(()=>{
        const GetData = async()=>{
            const _id = id.substring(1);
            console.log(_id);
            const url = `/Home/song/:${_id}`;


            try{
                // console.log(url);
            const data = await GetSong(url,{},token);
            //    console.log(data.files.songName);
               const SongData = data.files.songData;
            //    console.log(SongData);
            //    console.log(data.files);
            //    setSongDetail(data.files);
                   setSongName(data.files.songName);
                // const arrayBuffer = await data.files.songData.data.arrayBuffer;
                const arrayBuffer = new Uint8Array(SongData.data).buffer;
                const blob = new Blob( [arrayBuffer], { type: 'audio/mpeg' });
                const NewUrl = URL.createObjectURL(blob);
                setSongUrl(NewUrl);
             
               
            } catch(error){
                 throw error;
            }
        };
        GetData();
               
       },[id]);

     
       const playAudio = () => {
        if (audioRef.current) {
          audioRef.current.play();
        }
      };
    
      const pauseAudio = () => {
        if (audioRef.current) {
          audioRef.current.pause();
        }
      };
    return (
        <div>
         <NavigationBar></NavigationBar>
        <div className="play-song-div">
             <div className="play-song-child-1" style={{height:"100px",width:"80%",justifyContent:"center"}}>
                 {SongName} 
             </div>
             <div className="play-song-child-2" style={{height:"300px",color:"black",width:"80%",justifyContent:"center"}}>
                  <PlayJs></PlayJs>
             </div>
             <div className="play-song-child-3" style={{height:"80px",color:"black",width:"80%"}}>
                  <audio ref={audioRef} src={songUrl} controls   style={{width:"100%",justifyContent:"center"} }/>
                {/* <button onClick={playAudio}>Play</button>
                <button onClick={pauseAudio}>Pause</button> */}
             </div>

        </div>
        </div>
    );
}

export default PlaySong;
