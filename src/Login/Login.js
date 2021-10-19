import React from 'react';
import './Login.css';
import { Container } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import { Link,useLocation,useHistory } from 'react-router-dom';

const Login = () => {
    const { signInUsingGoogle, handleLogin, handleEmail, handlePassword ,setError,error} = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri=location.state?.from || '/home' ;

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                setError("");
                history.push(redirect_uri);
            })
            .catch(error=>{
                setError(error.message);
            })
    }

    const handleEmailSignIn = (e) =>
    {
        e.preventDefault();
        handleLogin()
        .then(result=>{
            setError("");
            history.push(redirect_uri);
        })
        .catch(error=>{
            setError(error.message);
        })
    }


    return (
        <Container className="vh-100 login-area text-center my-5">
            <form className=" mx-auto  py-3" onSubmit={handleEmailSignIn}>
             
                <div className="row mb-3">
                    <div className="col-sm-12">
                        <input type="email" onBlur={handleEmail} className="form-control input-area" placeholder="Email" required />
                    </div>
                </div>
                <br />
                <div className="row mb-3">
                    <div className="col-sm-12">
                        <input type="password" onBlur={handlePassword} className="form-control input-area" placeholder="password" required />
                    </div>
                </div>

                <p>{error}</p>

                <button type="submit" className="btn btn-success px-5 py-1 rounded w-100">Sign in</button>
                <br /><br />
                <Link to='/registration' className="">Create An Account?</Link>
            </form>
            <p className="text-danger">------------------- or --------------------</p>
            <button className="btn btn-secondary w-100" onClick={handleGoogleSignIn}>Sign in with google </button>
            <br/>

           
        </Container>
    );
};

export default Login;