import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes,Route } from 'react-router-dom';


import Button from './Components/Button/Button';
import HomeBar from './Components/HomeBar/HomeBar';
import Login from './Components/Login/Login';
import Register from './Components/Register.js/Register';
import WaitSpinner from './Components/Spinners/WaitSpinner';
import SideOffCanva from './Components/OffCanva/SideOffCanva';
import NavigationBar from './Components/NaviGationBar/NavigationBar';
import UploadFile from './Components/UploadFile/UploadFile';
import NotificationBar from './Components/NotificationBar/NotificationBar';
import HomeActive from './Components/HomeActive/HomeActive';
import CreatePlayList from './Components/CreatePlayList/CreatePlayList';
import PlaySong from './Components/PlaySong/PlaySong';
import PlayList from './Components/PlayList/PlayList';
import PlayListSong from './Components/PlayListSong/PlayListSong';
import Title from './Components/Title/Title';
function App() {  
  return (
    <div >
          <Title></Title>
         <Routes>
            <Route path='/' element={<Login></Login>}></Route>
            <Route path="/Login" element={<Login></Login>}></Route>
            <Route path='/Register' element={<Register></Register>}></Route>
            <Route path='/Home' element={<HomeActive></HomeActive>}>
               
            </Route>
             <Route path="/Home/song/:id" element = {<PlaySong></PlaySong>}></Route>
             <Route path="/Playlists" element={<PlayList></PlayList>}></Route>
             <Route path='/AddSong' element= {<UploadFile></UploadFile>}></Route>
             <Route path="/CreatePlaylist" element={<CreatePlayList></CreatePlayList>}></Route>
             <Route path="/AddSongPlaylist/:id" element={<><div>Ok</div></>}></Route>
             <Route path="/CurrentPlaylist/:id" element={<PlayListSong></PlayListSong>}></Route>
             <Route path="/CurrentPlaylist/song/:id" element={<PlaySong></PlaySong>}></Route>
         </Routes>
        
    </div>
  );
}

export default App;
