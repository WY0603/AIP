import React from 'react';

class Reserve extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ur>
                    <li><span>First Name: </span><input/></li>
                    <li><span>Last Name: </span><input/></li>
                    <li><span>Phone No.: </span><input/></li>
                    <li><span>Email: </span><input/></li>
                    <li><span>Date: </span><input/></li>
                    <li><span>Time: </span><input/></li>
                    <li><span>Number of Person: </span><input/></li>
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