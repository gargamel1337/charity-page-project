import React from 'react';
import decoration from "../../images/Decoration.svg";


const Section_TreeColumns = () => {
    return (
        <div>
            <section className="section_treeColumns">
                <div className="block">
                    <div className="block-one">
                        <p className="block-value">10</p>
                        <h2 className="block-name">ODDANYCH WORKÓW</h2>
                        <p className="block-text">Lorem ipsum lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ab aperiam atque aut cupiditate ducimus eius eos ex
                        </p>
                    </div>
                </div>
                <div className="block">
                    <div className="block-one">
                        <p className="block-value">5</p>
                        <h2 className="block-name">WSPARTYCH ORGANIZACJI</h2>
                        <p className="block-text">Lorem ipsum lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ab aperiam atque aut cupiditate ducimus eius eos ex
                        </p>
                    </div>
                </div>
                <div className="block">
                    <div className="block-one">
                        <p className="block-value">7</p>
                        <h2 className="block-name">ZORGANIZOWANYCH ZBIÓREK</h2>
                        <p className="block-text">Lorem ipsum lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ab aperiam atque aut cupiditate ducimus eius eos ex
                        </p>
                    </div>
                </div>
            </section>
            <section className="section_info">
                <p className="section_info_text">Wystarczą 4 proste kroki</p>
                <img className="section_info_decoration" src={decoration}/>
            </section>
        </div>
    )
};

export default Section_TreeColumns;