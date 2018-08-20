import React from 'react';

class Reserve extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ur>
                    <li><span>First Name: </span><input type='text' name='firstname'/></li>
                    <li><span>Last Name: </span><input  type='text' name='lastname'/></li>
                    <li><span>Phone No.: </span><input  type='text' name='phonenumber'/></li>
                    <li><span>Email: </span><input type='text' name='email'/></li>
                    <li><span>Date: </span><input type='text' name='date'/></li>
                    <li><span>Time: </span><input type='text' name='time'/></li>
                    <li><span>Number of Person: </span><input type='text' name='total'/></li>
                </ur>
                <button>提交</button>
            </div>
        );
    }

    handleClick() {
        
    }

    verify() {

    }
}

export default Header;