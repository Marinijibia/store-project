

const Login = () => {
    return (
        <form action="" className="login-form">
            <span className="error-span"></span>
            <label htmlFor="email" className="login-label">Email</label>
            <input type="text" placeholder="Email" name="email" className="login-inp" />
            <span className="login-label">Password</span>
            <input type="password" name="password" placeholder="password" className="login-inp" />
            <button onClick={() => {}} type="submit" style={{alignSelf: "center", width: "100%"}}>Login</button>
        </form>
    )
};


export default Login;