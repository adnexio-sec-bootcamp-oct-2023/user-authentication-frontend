import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const  navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post('http://localhost:3001/api/user/login', { username, password });
            console.log('Logged in: ', response.data);
            localStorage.setItem('token', response.data.accessToken);
            
            // Redirect to correct role
            const userRole = response.data.role;
            if (userRole === 'admin') {
                navigate('/admin');
            } else {
                navigate('/user');
            }

        } catch (error) {
            console.error('Login failed:', error);
        }
    }

    return(
        <div>
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"></input>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;

