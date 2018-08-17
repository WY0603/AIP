import React from 'react';
import { Redirect } from 'react-router-dom';


class SignUp extends React.Component{
    constructor(props) {
        super(props);
        //this.loginSubmit()=this.loginSubmit().bind(this)
        //  {this.handleClickOnLikeButton.bind(this)}
    }
    signUpSubmit = () =>{
        /*this.props.router.push({
            pathname:'/test.html'

        })*/
        //window.location.href='/test.html'
    }

    render(){
        return(
            <div>
                <div className="container" id="login">
                    <form id="signUp-form">
                        <h3 className="text-center">Sign Up</h3>
                        <div className="form-group">
                            <label>Account</label>
                            <input type="text" className="form-control" placeholder="Account" ref="signupName" required />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password" ref="signupPwd" required />
                        </div>
                        <button type="submit"  className="btn btn-default" onClick={this.signUpSubmit}><a>Sign Up</a></button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;