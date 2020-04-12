import React from "react";
import {  BrowserRouter as Router, Route, Switch,withRouter } from "react-router-dom";
import login from "./pages/login/login";
import register from "./pages/login/register/register";
import App from "./App";


const CreateRoute = () => 
 
    (
    <Router >
      
      <Route exact path ="/" component={App}/>
      <Route exact path ="/login" component={login}/>
      <Route exact path ="/register" component={register}/>
    </Router>
  
    )

export default (CreateRoute) ;
