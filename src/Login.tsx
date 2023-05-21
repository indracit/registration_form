import { FormEvent, useState } from "react"
import axiosInstance from "./api/axios";

type resp = {
    UserInfo :{
        accessToken : string,
        roles : string[]
        username : string
    }
}

const Login = () => {
    const [ username,setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response : resp  = await axiosInstance.post('/auth/login ',
        {username:username,password:password},

            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
        ). then((response) => response.data)
        console.log(response);
        if(response.UserInfo.accessToken){
            location.replace('/home')
        }
    }

    return (
        <main className="app">
    <section className="container">
        <h1>Login</h1>
        <form className="form-container" onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input 
                type="text" 
                value={username}  
                onChange={(e)=>setUsername(e.target.value)} 
                id="username"  
                required
            />
            <label htmlFor="password">Password:</label>
            <input 
                type="password" 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)} 
                id="password" 
                required
                />
            <button type="submit">Sign In</button>
        </form>
        <p>
            Need an Acount? <br/>
            <a href="/register">Sign Up</a>
        </p>
    </section></main>

    )
}

export default Login