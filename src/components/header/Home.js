import ReactDOM from 'react-dom';
import React from 'react';
import homeHero from "../../images/Home-Hero-Image.jpg";
import decoration from "../../images/Decoration.svg";

function Home (){
    return (
        <div className="section_header" style={{backgroundImage: `url(${homeHero})`}}>
            <div className="section_header_opacity">
                <section className="section_header_main">
                    <ul className="section_header_register">
                        <li className="section_header_register_li"> Zaloguj</li>
                        <li className="section_header_register_li"> Załóż konto</li>
                    </ul>
                        <ul className="section_header_main_menu">
                            <li className="section_header_main_menu_li">Start</li>
                            <li className="section_header_main_menu_li">O co chodzi?</li>
                            <li className="section_header_main_menu_li">O nas</li>
                            <li className="section_header_main_menu_li">Fundacia i organizacje</li>
                            <li className="section_header_main_menu_li">Kontakt</li>
                        </ul>
                    <div className="section_header_paragraf">
                        <div className="section_header_paragraf_text">
                            <p>Zacznij pomagać!</p>
                            <p>Oddaj niechciane rzeczy w dobre ręce</p>
                        </div>
                        <div>
                            <img src={decoration}/>
                        </div>
                        <div className="section_header_button">
                            <button className="button header_button">ODDAJ <br/>RZECZY</button>
                            <button className="button header_button">ZORGANIZUJ <br/>ZBIÓRKĘ</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home;