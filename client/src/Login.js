import React,{Component} from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    handleClickOnTitle (e) {
        console.log(this)
    }

    render(){
        return(
            <div className="main">
                <div className="header">
                    <a href="/">
                        <img src="./public/img/logo.png" alt=""/>
                    </a>
                    <h1>Sign In</h1>
                </div>
                <form id="login_form">
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="email" className="form-control" id="" name="email" placeholder="Email" autoFocus/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>

                        <input type="password" className="form-control" id="" name="password" placeholder="Password"/>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox"/>Keep me logged in
                        </label>
                    </div>
                    <button type="submit" className="btn btn-success btn-block">Sign in</button>
                </form>
                <div className="message">
                    <p>No account? <a href="/register">Sign in here</a>.</p>
                </div>
            </div>
        );
    }
}