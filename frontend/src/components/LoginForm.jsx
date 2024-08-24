import React, { useState } from 'react';

function LoginForm() {

    // hook to add state management to functional components
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        // when submit the form, dont let the page relod 
        event.preventDefault();
        console.log('Email:', email, 'Password:', password);
        // Here you can also add logic to verify the credentials
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;
