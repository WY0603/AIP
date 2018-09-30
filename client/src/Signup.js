import React,{Component} from 'react';
import Header from "./Header";

export default class Signup extends Component {

    constructor(props) {
        super(props);
        // set state to empty at the begining 
        this.state = {
            "username": "",
            "email": "",
            "password":"" 
        };
    }
    

    handleSubmit(){
        // email format 
        var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        // check whether email,username,password is empty
        if (this.state.email.trim().length === 0
            || this.state.password.trim().length === 0
            || this.state.username.trim().length === 0 ){
            alert ("* area must not be empty.");
            return false; 
         // email validation  
        }else if (!emailReg.test(this.state.email)) {
            alert ("Pleaze enter a valid email address.");
            return false;
        }else{
        
        // post request to server side     
        fetch('/register',{
            method:'post',
            body: JSON.stringify(this.state),
            headers: {"Content-Type":"application/json"},
        })
        .then(response=>response.json())
        .then(responseJson => {
            
            if(responseJson.err_code === 0){
                // store username to local storage 
                localStorage.setItem("username", this.state.username.trim());
                window.location.href="/restaurant";
            }
            else if (responseJson.err_code === 1){
                alert(responseJson.message);
            }

        }).catch(function(e){
            console.log('Oops,error');
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
                    <form id="signup_form">
                        <div className="form-group">
                            <label htmlFor="email">Email: <span style={{color:"red"}}>* </span> </label>

                            <input type="email" className="form-control" id="email" name="email" placeholder="Please enter an email"
                                   onChange={evt => this.setState({"email":evt.target.value})} />
                            {/*//set the changes of email to state*/}
                        </div>
                        <div className="form-group">
                            <label htmlFor="nickname">Username: <span style={{color:"red"}}>* </span> </label>
                            <input type="text" className="form-control" id="username" name="username"
                                   placeholder="Please enter a username" onChange={evt => this.setState({"username":evt.target.value})}/>
                                   {/*//set the changes of usernmae to state*/}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password: <span style={{color:"red"}}>* </span> </label>
                            <input type="password" className="form-control" id="password" name="password"
                                   placeholder="Please enter a password" onChange={evt => this.setState({"password":evt.target.value})}/>
                                   {/*//set changes of password to state*/}
                        </div>
                        <button type="button" className="btn btn-success btn-block" onClick={this.handleSubmit.bind(this)}>Sign up</button>
                        </form>
                        <div className="message">
                        <p>Already Sign Up? <a href="/login">Sign In here</a>.</p>
                    </div>
                </div>
            </div>
        );
    }
}