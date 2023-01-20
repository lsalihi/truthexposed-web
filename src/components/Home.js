import './Home.css';
import React from "react"
import Feed from "./Feed"
import Sidebar from "./Sidebar";
import Widgets from './Widgets';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';


const Home= (props) => {
  return (
      
    <div className="app">
      {!props.user && <Navigate to ='/' />} 
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userState.user ,
  };
};

export default connect(mapStateToProps)(Home)
