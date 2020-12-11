import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="section_header_main">
            <ul className="section_header_register">
                <li className="section_header_register_li">
                    <NavLink to="/login">Zaloguj</NavLink>
                </li>
                <li className="section_header_register_li">
                    <NavLink to="/registration">Załóż konto</NavLink>
                </li>
            </ul>
            <ul className="section_header_main_menu">
                <li className="section_header_main_menu_li">Start</li>
                <li className="section_header_main_menu_li">
                    <a href="/mission">O co chodzi?</a></li>
                <li className="section_header_main_menu_li">
                    <a href="/aboutUs">O nas</a></li>
                <li className="section_header_main_menu_li">
                    <a href="/fundacje">Fundacia i organizacje</a></li>
                <li className="section_header_main_menu_li">Kontakt</li>
            </ul>
        </div>
    );
};

export default Header;