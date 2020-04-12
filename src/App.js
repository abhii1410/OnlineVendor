import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Content from './components/Content';
import Login from './pages/login/login';
import {  withRouter } from "react-router-dom";


const isLogin = localStorage.getItem('isLogin');
console.log('login',isLogin);

function App(props) {
  if(window.location.pathname === '/login' && isLogin === false ){
    
    return (
      <div>
        <Login/>
      </div>
    )
  }
  else{
    
  return (
    <div>
     <Header />
     <SideBar/>
     <Content />
    
     </div>
   
  );
  }
}

export default withRouter(App)
;
