/* eslint-disable no-unused-expressions */
import { useState } from "react";
import { authUser } from "../utils";

const Login = ({setUser, setIsLogged}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();
        const getUser = async () => {
            const response = await authUser(email, password)
            response 
                ? (setUser(response), setIsLogged(true)) 
                : setErrorMessage("Invalid Email or Password") ;
            
            console.log("response", response);
        };
        getUser();
    };
    return (
        <form action="" className="login-form">
            <span className="error-span">{errorMessage}</span>
            <label htmlFor="email" className="login-label">Email</label>
            <input type="text" placeholder="Email" name="email" className="login-inp" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <span className="login-label">Password</span>
            <input type="password" name="password" placeholder="password" className="login-inp" value={password}  onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={() => {handleLogin}} type="submit" >Login</button>
        </form>
    )
};


export default Login;