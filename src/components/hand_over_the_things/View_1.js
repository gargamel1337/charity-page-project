import React from 'react';
import formHomeHero from "../../images/Form-Hero-Image.jpg";
import decoration from "../../images/Decoration.svg";

const View1 = () => {
    return (
        <>
            <div className="section_view" style={{backgroundImage: `url(${formHomeHero})`}}>
                <div className="section_view_paragraf">
                    <div className="section_view_paragraf_text">
                        <p>Oddaj rzeczy, których już nie chcesz</p>
                        <p>POTRZEBUJĄCYM</p>
                    </div>
                    <div>
                        <img src={decoration}/>
                    </div>
                    <div className="section_view_tiles">
                        <div className="button view_tile">
                            <p>1</p>
                            <p>Wybierz rzeczy</p>
                        </div>
                        <div className="button view_tile">
                            <p>2</p>
                            <p>Spakuj je w worki</p>
                        </div>
                        <div className="button view_tile">
                            <p>3</p>
                            <p>Wybierz fundację</p>
                        </div>
                        <div className="button view_tile">
                            <p>4</p>
                            <p>Zamów kuriera</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section_view_important">
                <h2>Ważne!</h2>
                <p>Uzupełnij szczegóły. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
            </div>
        </>
    );
};

export default View1;