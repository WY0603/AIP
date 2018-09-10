import React,{Component} from 'react';
import Header from "./Header";

export default class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "username": "",
            "email": "",
            "password":"" 
        };
    }

    handleSubmit(){
        var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (this.state.email.trim().length == 0 
            || this.state.password.trim().length == 0
            || this.state.username.trim().length == 0 ){
            alert ("* area must not be empty.");
            return false; 
        }else if (!emailReg.test(this.state.email)) {
            alert ("Pleaze enter a valid email address.");
            return false;
        }else{
            
        fetch('http://localhost:5000/register',{
            method:'post',
            body: JSON.stringify(this.state),
            headers: {"Content-Type":"application/json"},
        })
    }
    }

    render(){
        return(
            <div>
                <div>
                    <Header/>
                </div>

                <div className="main">
                    <div className="header">

                        <h1>Sign Up</h1>
                    </div>

                        <div className="form-group">
                            <label htmlFor="email">Email: <span style={{color:"red"}}>* </span> </label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="Please enter an email"
                                   onChange={evt => this.setState({"email":evt.target.value})} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nickname">Username: <span style={{color:"red"}}>* </span> </label>
                            <input type="text" className="form-control" id="username" name="username"
                                   placeholder="Please enter a username" onChange={evt => this.setState({"username":evt.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password: <span style={{color:"red"}}>* </span> </label>
                            <input type="password" className="form-control" id="password" name="password"
                                   placeholder="Please enter a password" onChange={evt => this.setState({"password":evt.target.value})}/>
                        </div>
                        <button type="button" className="btn btn-success btn-block" onClick={this.handleSubmit.bind(this)}>Sign up</button>

                    <div className="message">
                        <p>Already Sign Up? <a href="/login">Sign In here</a>.</p>
                    </div>
                </div>
            </div>
        );
    }
}