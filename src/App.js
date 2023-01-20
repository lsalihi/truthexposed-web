import React, { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Home from  './components/Home'
import { getUserAuth } from './actions';
import { connect } from "react-redux";


function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/Home' element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
