import React from 'react'

function Login() {
    return (
        <form className="container">
            <h3><span className="header">Login Form</span></h3>
            <p>Sign up for more information</p>
            <div className="mb-3">
                <label htmlFor="exampleInputUsername1" className="form-label">Username</label>
                <input type="Username" className="form-control" id="exampleInputUsername1" aria-describedby="UsernameHelp"/>
                <div id="UsernameHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
		
	);
}


export default Login