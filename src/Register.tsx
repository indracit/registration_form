import { FormEvent, useState } from 'react';
import './index.css';

const Register = () => {

    const [username,setUsername] = useState<string | null>(null);
    const [password,setPassword] = useState<string | null>(null);
    const [confirmpassword,setConfirmPassword] = useState<string | null>(null);

    const handleSubmit = (e : FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        
    }

return (
    <>
    <section className='container'>
    <h1>Register</h1>

    <form className='form-container' onSubmit={handleSubmit}>
    <label htmlFor='username'>Username:</label>
    <input type="text" id='username'/>
    <label htmlFor='password'>Password:</label>
    <input type="password" id='password'/>
    <label htmlFor='confirmpassword'>Confirm Password:</label>
    <input type="text" id='confirmpassword'/>
    <button type="submit">Sign Up</button>
    </form>
    <p>
        Already Registered <br/>
        <span>
            <a href="#">Sign In</a>
        </span>
    </p>
    </section>
    </>
    
)
}

export default Register