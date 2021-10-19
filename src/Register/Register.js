import React from 'react';
import { Container } from 'react-bootstrap';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle,handleEmail,handlePassword,handleName,handleRegistration,setUserName,setError ,error} = useAuth();

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

    const handleRegisterUsingEmailPassword=(e)=>
    {
        e.preventDefault();
        console.log(e.target.value);
        handleRegistration()
        .then(result => {
            setUserName();
            setError("");
            history.push(redirect_uri);
        })
        .catch(error=>{
            setError(error.message);
        })
    }

    return (
        <Container className="vh-100 login-area text-center my-5">
            <form className=" mx-auto  py-3" onSubmit={handleRegisterUsingEmailPassword}>
                <div className="row mb-3">
                    <div className="col-sm-12">
                        <input type="text" onBlur={handleName} className="form-control input-area" placeholder="Name" required />
                    </div>
                </div>
                <br />
                <div className="row mb-3">
                    <div className="col-sm-12">
                        <input type="email" onBlur={handleEmail} className="form-control input-area" placeholder="Email" required />
                    </div>
                </div>
                <br />
                <div className="row mb-3">
                    <div className="col-sm-12">
                        <input type="password" onBlur={handlePassword} className="form-control input-area" placeholder="Password" required />
                    </div>
                </div>
                <br></br>
                <p>{error}</p>

                <button type="submit" className="btn btn-success px-5 py-1 rounded w-100">Sign Up</button>
                <br /><br />
                <Link to='/login' className="">Already Have An Account?</Link>
            </form>
            <p className="text-danger">------------------- or --------------------</p>
            <button className="btn btn-secondary w-100" onClick={handleGoogleSignIn}>Sign in with google </button>
        </Container>
    );
};

export default Register;