import '../styles/Login.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
import axios from "axios";
import Cookies from 'js-cookie';
function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://localhost:44383/api/User/login', values)
            .then(res => {
                var decode = jwtDecode(res.data);
                Cookies.set("token", res.data);
                navigate("/dashboard");
                window.sessionStorage.setItem("exp", decode.exp);
                console.log(decode);
                debugger
                const role = decode["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
                const name = decode["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
                window.sessionStorage.setItem("role", role);
                window.sessionStorage.setItem("name", name);
                window.location.reload();
            })
            .catch(err => console.log(err));
    }
    return (
        <form className="card container mt-5 p-5" onSubmit={handleSubmit} >
            <h3>Log In</h3>

            <div className="mb-3">
                <label>Email address</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    required
                    onChange={e => setValues({ ...values, email: e.target.value })}
                />
            </div>

            <div className="mb-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={e => setValues({ ...values, password: e.target.value })}
                    required
                />
            </div>

            <div className="mb-3">
                <div className="custom-control custom-checkbox">
                    <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                    />
                    <label className="custom-control-label" htmlFor="customCheck1">
                        Remember me
                    </label>
                </div>
            </div>

            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </div>
            <p className="forgot-password text-right">
                <a href="#">Forgot password?</a>
            </p>
            <p className='signup user text-left'>
                <a href='sign-up'>New User?</a>
            </p>
        </form>
    )
}
export default Login;