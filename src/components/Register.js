import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const  navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post('http://localhost:3001/api/user/register', { username, password });
            console.log(response.data);
            navigate('/login'); // Upon success it will redirect us to the login page
        } catch (error) {
            console.error('Registration failed:', error);
        }
    }

    return(
        <div>
            <h2>Register</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"></input>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;

