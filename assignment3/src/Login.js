import React from 'react';
import { Redirect } from 'react-router-dom';


class Login extends React.Component{
    constructor(props) {
        super(props);
        //this.loginSubmit()=this.loginSubmit().bind(this)
        //  {this.handleClickOnLikeButton.bind(this)}
    }
   /* loginSubmit = () =>{
        /!*this.props.router.push({
            pathname:'/test.html'

        })*!/
        window.location.href='/test.html'
    }*/

    render(){
        return(
            <div>
                <div className="container" id="login">
                    <form id="login-form">
                        <h3 className="text-center">login</h3>
                        <div className="form-group">
                            <label>Account</label>
                            <input type="text" className="form-control" placeholder="Account" ref="loginName" required />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password" ref="loginPwd" required />
                        </div>
                        <button type="submit"  className="btn btn-default" ><a href='./'>Login</a></button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login; // export login component -- default