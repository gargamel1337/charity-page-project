import React, {useState, useEffect} from 'react';
import decoration from "../../../images/Decoration.svg";


function Login () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="section_login">
            <p className="section_login_text">Zaloguj się</p>
            <img src={decoration}/>
            <form className="section_login_form">
                <div className="section_login_form_row">
                    <label htmlFor="validationServer01">Email</label>
                    <input type="email" className="form-control"
                           value={email} required
                           onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="section_login_form_row">
                    <label htmlFor="validationServer02">Hasło</label>
                    <input type="password" className="form-control"
                           value={password} required
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </form>
            <div>
                <button className="button section_login_button">Załóż konto</button>
                <button className="button section_login_button">Zaloguj się</button>
            </div>
        </div>
    );
};

export default Login;