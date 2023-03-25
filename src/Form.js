import React, { useState } from 'react';
import './Form.css';

function Form() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {};
        if (!formState.name.trim()) {
            errors.name = 'Name is required';
        }
        else if(!/^[A-Z][a-z][A-Za-z]+$/.test(formState.name)){
            errors.name = 'First letter is capital and Enter alphabets only';
        }
        else{
            errors.name = ' ';
        }
        if (!formState.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formState.password.trim()) {
            errors.password = 'Password is required';
        } else if (formState.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }
        return errors;
    };

    const handleSubmit = e => {
        e.preventDefault();
        const errors = validateForm();
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            // submit the form data
            console.log(formState);
        }
    };

    const handleChange = e => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <section className='center'>
            <form onSubmit={handleSubmit} className="from" autoComplete='off'>
                <div className="from-group">
                    <label htmlFor="name">User Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Enter User Name'
                        value={formState.name}
                        onChange={handleChange}
                    />
                    {errors.name && <span>{errors.name}</span>}
                </div>
                <div className="from-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='Enter Email'
                        value={formState.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div className="from-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder='Enter Password'
                        value={formState.password}
                        onChange={handleChange}
                    />
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <button type="submit" className='btn'>Submit</button>
            </form>
        </section>
    );
}

export default Form;