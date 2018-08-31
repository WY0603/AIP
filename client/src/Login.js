import React,{Component} from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
    }


    handleSubmit(){
        var username = document.getElementById('username').valueOf();
        var password = document.getElementById('password').valueOf();


        var data = new FormData();

        data.append('username',username.toString());
        data.append('password',password.toString());

        fetch('http://localhost:5000/login',{
            method:'post',
            body: JSON.stringify(data),
            headers: {"Content-Type":"application/json"},
        })

    }

    render(){
        return(
            <div className="main">
                <div className="header">

                    <h1>Sign In</h1>
                </div>
                <form id="login_form" method="post" action="/login">
                    <div className="form-group">
                        <label htmlFor="">Username</label>
                        <input type="username" className="form-control" id="username" name="username" placeholder="Username" autoFocus/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>

                        <input type="password" className="form-control" id="password" name="password" placeholder="Password"/>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox"/>Keep me logged in
                        </label>
                    </div>
                    <button type="submit" className="btn btn-success btn-block" onClick={this.handleSubmit.bind(this)}>Sign in</button>
                </form>
                <div className="message">
                    <p>No account? <a href="/register">Sign up here</a>.</p>
                </div>
            </div>
        );
    }
}