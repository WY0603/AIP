import React,{Component} from 'react';

export default class Signup extends Component {
    constructor(props) {
        super(props);
    }


    render(){
        return(
            <div className="main">
                <div className="header">
                    <a href="/">
                        <img src="./public/img/logo.png" alt=""/>
                    </a>
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
                        <input type="text" className="form-control" id="nickname" name="nickname"
                               placeholder="Nickname"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" name="password"
                               placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-success btn-block">Sign up</button>
                </form>
                <div className="message">
                    <p>Already Sign Up? <a href="/login">Sign In here</a>.</p>
                </div>
            </div>
        );
    }
}