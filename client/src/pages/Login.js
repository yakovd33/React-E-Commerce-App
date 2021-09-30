import React, { useState } from "react";

function Login() {
    const [ form, setForm ] = useState('login');

	return (
        <div className="page-wrap-grey">
            <div className="container">
                <div id="login-page-wrap">
                    <div className="login-page">
                        <div className="form">
                            <form className={ `register-form ${ form == 'register' ? 'active' : '' }` }>
                                <input type="text" placeholder="name" />
                                <input type="password" placeholder="password" />
                                <input type="text" placeholder="email address" />
                                <button>create</button>
                                <p className="message">
                                    Already registered? <a href="#" onClick={ () => setForm('login') }>Sign In</a>
                                </p>
                            </form>

                            <form className={ `login-form ${ form == 'login' ? 'active' : '' }` }>
                                <input type="text" placeholder="username" />
                                <input type="password" placeholder="password" />
                                <button>login</button>
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
