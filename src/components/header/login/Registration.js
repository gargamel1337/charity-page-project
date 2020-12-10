import React, {useState} from 'react';
import decoration from "../../../images/Decoration.svg";

function Registration () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");

    return (
        <div className="section_registration">
            <p className="section_registration_text">Załóż konto</p>
            <img src={decoration}/>
            <form className="section_registration_form">
                <div className="section_registration_form_row">
                    <label htmlFor="validationServer01">Email</label>
                    <input type="email" className="form-control"
                           value={email} required
                           onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="section_registration_form_row">
                    <label htmlFor="exampleInputPassword1">Hasło</label>
                    <input type="password" className="form-control"
                           value={password} required
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="section_registration_form_row">
                    <label htmlFor="exampleInputPassword1">Powtórz hasło</label>
                    <input type="password" className="form-control"
                           value={passwordRepeat} required
                           onChange={(e) => setPasswordRepeat(e.target.value)}/>
                </div>
            </form>
            <div>
                <button className="button section_registration_button">Zaloguj się</button>
                <button className="button section_registration_button">Załóż konto</button>
            </div>
        </div>
    );
}

export default Registration;