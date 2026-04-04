import React from 'react';
import { useState } from 'react';

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your signup logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email" 
                required
            />
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
                required
            />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignupForm;