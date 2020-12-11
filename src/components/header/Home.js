import React from 'react';
import homeHero from "../../images/Home-Hero-Image.jpg";
import decoration from "../../images/Decoration.svg";
import {NavLink,} from 'react-router-dom';

function Home (){
    return (
        <>
            <div className="section_header" style={{backgroundImage: `url(${homeHero})`}}>
                <div className="section_header_opacity"></div>
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

            </div>
        </>
    )
}

export default Home;