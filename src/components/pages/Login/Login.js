import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../../../images/login.jpg';
import UseFirebase from '../../firebase/UseFirebase';

const Login = () => {

    const [loginData, setLoginData] = useState('');
    const {loginUser,googleSignIn}=UseFirebase();

    // const location=useLocation();
    // const history=useHistory();


    const handleOnsubmit = (e) => {


        loginUser(loginData.email,loginData.password)
        e.preventDefault();
    }


    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData= {...loginData};

        newLoginData[field]=value;

        setLoginData(newLoginData);


    }


    return (
        <div>
            <div className="login-page ">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={handleOnsubmit} className="mt-5 pt-5">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input
                                    name="email"
                                    onBlur={handleOnChange}
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input
                                    name="password"
                                    onBlur={handleOnChange}
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1" />

                            </div>

                            <button type="submit" className="btn btn-primary">Login</button>
                            <button onClick={()=>{googleSignIn()}} type="submit" className="btn btn-warning ms-3">Sign in with google</button>

                            <Link to="/register">
                                <p  className="my-3">New user ? Please register</p>
                            </Link>


                        </form>
                    </div>
                    <div className="col-md-6 ">
                        <img className="img-fluid mt-4 ms-5" width={500} src={loginImage} alt="" />
                    </div>
                </div>


            </div>
        </div>
        </div>
    );
};

export default Login;