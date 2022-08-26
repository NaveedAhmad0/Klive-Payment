import React, { useState } from "react";
// import { Link } from "react-router-dom";
import google from './google.png'
import face from './facebook.png'
import twitter from './twitter.png'
import './login.css'
import { Link } from "react-router-dom";
const Login=()=> {

    const[passwordShown,setPasswordShown]=useState('false');

    const togglePassword=()=>{

        setPasswordShown(!passwordShown);
    }

    return <div className="body-login">
            <div className="containe">
        

        <div className="card-body shadow-lg p-3 bg-white rounded">
        <div className="image">
            <img className="rounded-circle shadow" src={"https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"} alt="profile"></img>
            <h6>signup</h6>
        </div>
        <form>
            <div className="mb-3">
                <input type="email" className="form-control" placeholder="email"/>
            </div>
            <div className="mb-3">
                <input type={passwordShown ?"password":"text"} className="form-control" placeholder="password"/>
                <button type="button"  style={{width:"50%"}} className="btn btn-light" onClick={togglePassword}> show password</button>
            </div>
            <div className="forgot-password">
                <a href="/forgot-password">Forgot password?</a>
            </div>
            <div className="button mt-4">
                <Link to="/admin/dashboard"><button type="button" className="btn btn123">Login</button></Link>
                <div className="signup mt-3">
                    <a href="/registration">Don't have an account signup</a>
                </div>
            
            </div>
        </form>
    </div>
        
    
    <div className="card-body shadow-lg p-3 bg-white rounded mt-5">
        <div className="body">
        <div className="d-flex bd-highlight">
            <div className="p-2 flex-grow-1 bd-highlight">Sign in with</div>
            <div className="p-2 bd-highlight">
                <img src={google} alt="google"/>
            </div>
            <div className="p-2 bd-highlight">
                <img src={face} alt="google"/>
            </div>
            <div className="p-2 bd-highlight">
                <img src={twitter} alt="google"/>
            </div>
        </div>
        </div>
    </div>
    
    
    </div>
    
    </div>
        
    
}

export default Login;