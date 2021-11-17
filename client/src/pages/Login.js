import React, { useState, useEffect } from "react";
import ApiHelper from '../helpers/ApiHelper';
import UserHelper from '../helpers/UserHelper';

function Login({ user }) {
    const [ form, setForm ] = useState('login');

    // Redirect if already logged
    useEffect(() => {
        if (UserHelper.isLogged(user)) {
            window.location.href = '/';
        }
    }, [])

    const [ registerFullname, setRegisterFullName ] = useState('');
    const [ registerEmail, setRegisterEmail ] = useState('');
    const [ registerPassword, setRegisterPassword ] = useState('');
    const [ registerErrorMsg, setRegisterErrorMsg ] = useState('');
    const [ finishedRegister, setFinishedRegister ] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        ApiHelper.post('users/register/', {
            fullname: registerFullname,
            email: registerEmail,
            password: registerPassword
        }, (res) => {
            if (res.error) {
                // Error
                setRegisterErrorMsg(res.error);
            } else {
                // Success
                setFinishedRegister(true);
                setRegisterErrorMsg('');
                
                setRegisterFullName('');
                setRegisterEmail('');
                setRegisterPassword('');
            }

            console.log('res: ' + JSON.stringify(res));
        });
    }

    const [ loginEmail, setLoginEmail ] = useState('');
    const [ loginPassword, setLoginPassword ] = useState('');
    const [ loginErrorMsg, setLoginErrorMsg ] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        ApiHelper.post('users/login', {
            email: loginEmail,
            password: loginPassword
        }, (res) => {
            console.log(res);
            if (res.error) {
                setLoginErrorMsg(res.error);
            } else {
                // Login successful
                setLoginErrorMsg('');
                localStorage.setItem('user', JSON.stringify(res));
                window.location.href = '/'
            }
        })
    }

	return (
        <div className="page-wrap-grey">
            <div className="container">
                <div id="login-page-wrap">
                    <div className="login-page">
                        <div className="form">
                            <form className={ `register-form ${ form == 'register' ? 'active' : '' }` }>
                                <input type="text" value={ registerFullname } onChange={ (e) => setRegisterFullName(e.target.value) } placeholder="Full Name" />
                                <input type="text" value={ registerEmail } onChange={ (e) => setRegisterEmail(e.target.value) } placeholder="Email Address" />
                                <input type="password" value={ registerPassword } onChange={ (e) => setRegisterPassword(e.target.value) } placeholder="Password" />
                                
                                { registerErrorMsg && <div id="register-form-error-feedback">
                                    { registerErrorMsg  }
                                </div> }

                                { !registerErrorMsg && finishedRegister &&  <div id="register-form-success-feedback">You're now register. you can <a href="#" onClick={ () => setForm('login') }>Sign In</a></div> }
                                
                                <button onClick={ (e) => handleRegister(e) }>Register</button>
                                <p className="message">
                                    Already registered? <a href="#" onClick={ () => setForm('login') }>Sign In</a>
                                </p>
                            </form>

                            <form className={ `login-form ${ form == 'login' ? 'active' : '' }` }>
                                <input type="text" value={ loginEmail } onChange={ (e) => setLoginEmail(e.target.value) } placeholder="Email" />
                                <input type="password" value={ loginPassword } onChange={ (e) => setLoginPassword(e.target.value) } placeholder="Password" />
                                
                                { loginErrorMsg && <div id="register-form-error-feedback">
                                    { loginErrorMsg  }
                                </div> }
                                
                                <button onClick={ (e) => handleLogin(e) }>login</button>
                                <p className="message">
                                    Not registered? <a href="#" onClick={ () => setForm('register') }>Create an account</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
}

export default Login;
