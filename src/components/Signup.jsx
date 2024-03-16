import '../styles/Login.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
    const [values, setValues] = useState({
        userName: '',
        email: '',
        phone: '',
        password: ''
    })
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://localhost:44383/api/User/register', values)
            .then(res => {
                console.log(res);
                navigate('/')
            })
            .catch(err => console.log(err));
    }
    return (
        <form className="card container mt-5 p-5" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

            <div className="mb-3">
                <label>First name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    required
                    onChange={e => setValues({ ...values, userName: e.target.value })}
                />
            </div>
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
                <label>Phone</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter phone number"
                    maxLength={10}
                    required
                    onChange={e => setValues({ ...values, phone: e.target.value })}
                />
            </div>

            <div className="mb-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    maxLength={14}
                    minLength={8}
                    onChange={e => setValues({ ...values, password: e.target.value })}
                />
            </div>

            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Sign Up
                </button>
            </div>
            <p className="forgot-password text-right">
                Already registered <a href="/sign-in">sign in?</a>
            </p>
        </form>
    )
}
export default SignUp;
