import React,{Component} from 'react';

export default class Signup extends Component {

    constructor(props) {
        super(props);
    }

    handleSubmit(){
        var username = document.getElementById('username').valueOf();
        var password = document.getElementById('password').valueOf();
        var email =document.getElementById('email').valueOf();

        var data = new FormData();

        data.append('username',username.toString());
        data.append('password',password.toString());
        data.append('email',email.toString());
        fetch('http://localhost:5000/register',{
            method:'post',
            body: JSON.stringify(data),
            headers: {"Content-Type":"application/json"},
        })

    }

    render(){
        return(
            <div className="main">
                <div className="header">

                    <h1>Sign Up</h1>
                </div>

                <form id="register_form" method="post" action="/register">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Email"
                               autoFocus/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="nickname">Username</label>
                        <input type="text" className="form-control" id="username" name="username"
                               placeholder="Username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" name="password"
                               placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-success btn-block" onClick={this.handleSubmit.bind(this)}>Sign up</button>
                </form>
                <div className="message">
                    <p>Already Sign Up? <a href="/login">Sign In here</a>.</p>
                </div>
            </div>
        );
    }
}