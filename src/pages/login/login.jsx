import React, { Component } from "react";
import TextBox from "../../forms/TextBox";
import Password from "../../forms/CheckBox";
import { Redirect, withRouter } from "react-router-dom";



export class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password:''
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log("123",props);
  }
  
  onChange(e) {
  const target = e.target;
   const value = target.value;
   const name = target.name;
  
    this.setState({
      [name]:value
    })
   
  }
  handleSubmit(e){
    e.preventDefault();
    
    if(this.state.userName === 'abhi' && this.state.password ==='abhi'){
      localStorage.setItem('isLogin',true);
    this.props.history.push('/');
    }
    else{
      localStorage.setItem('isLogin',false);
    }

  }
  render() {
    return (
      <React.Fragment>
   
        <div className="login-box">
        <div className="login-logo">
    <a href="../../index2.html"><b>Admin</b>LTE</a>
  </div>
        <div className="login-box-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group ">
              <TextBox 
              inputType="text"
              inputValue={this.state.userName} 
              inputName="userName"
              inputOnChanged={this.onChange} />
            </div>
            
            <div className="form-group">
            <TextBox 
              inputType="password"
              inputValue={this.state.password}
              inputName="password"
              inputOnChanged={this.onChange} />
              
            </div>
          
            
             

              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Sign In
                </button>
              </div>
           
          </form>

        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(login);
