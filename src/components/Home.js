import './Home.css';
import React from "react"
import Feed from "./Feed"
import Sidebar from "./Sidebar";
import Widgets from './Widgets';

function Home() {
  return (
    <div className="app"> 
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default Home;
