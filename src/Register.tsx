import { FormEvent, useState } from 'react';
import './index.css';

type userDetails = {
    name : string,
    password : string
}
const Register = () => {

    const [username,setUsername] = useState<string >('');
    const [password,setPassword] = useState<string >('');
    const [confirmpassword,setConfirmPassword] = useState<string >('');

    const handleSubmit = (e : FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        const data : userDetails ={
            name:username,
            password: password
        }
        console.log(data);
        
                
    }

return (
    < main className='app'>
    <section className='container'>
        <h1>Register</h1>

        <form className='form-container' onSubmit={handleSubmit}>
            <label htmlFor='username'>Username:</label>
            <input 
                type="text" 
                id='username'
                value = {username}
                onChange={(e)=>setUsername(e.target.value)}
                required

            />
            <label htmlFor='password'>Password:</label>
            <input 
                type="password" 
                id='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
            />
            <label htmlFor='confirmpassword'>Confirm Password:</label>
            <input 
                type="password" 
                id='confirmpassword'
                value={confirmpassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                required
            />
            <button type="submit">Sign Up</button>
        </form>
        <p className='alreadyregistered'>
            Already Registered <br/>
            <span>
                <a href="#">Sign In</a>
            </span>
        </p>
    </section>
    </main>
    
)
}

export default Register