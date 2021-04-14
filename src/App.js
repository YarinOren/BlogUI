import './App.css';
import TopBar from './Components/TopBar';
import Posts from './Components/Post';
import Sidebar from './Components/SideBar';
import React from 'react';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <label className="title"><h1>This  is my blog</h1></label>
       <div className="posts"><Posts/></div>
       <div className="side-bar"><Sidebar/></div>
    </div>
  );
}

export default App;