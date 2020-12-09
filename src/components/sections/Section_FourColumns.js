import React from 'react';
import icon1 from "../../images/Icon1.png"
import icon2 from "../../images/Icon2.png"
import icon3 from "../../images/Icon3.png"
import icon4 from "../../images/Icon4.png"


const Section_FourColumns = () => {
    return (
        <>
            <section className="section_fourColumns">
                <div className="block_fourColumns">
                    <img className="section_fourColumns_icon" src={icon1}/>
                    <h2 className="fourColumns_block_name">Wybierz rzeczy</h2>
                    <p className="section_fourColumns_line"></p>
                    <p className="fourColumns_block_text">ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="block_fourColumns">
                    <img className="section_fourColumns_icon" src={icon2}/>
                    <h2 className="fourColumns_block_name">Spakuj je</h2>
                    <p className="section_fourColumns_line"></p>
                    <p className="fourColumns_block_text">skorzystaj z worków na śmieci</p>
                </div>
                <div className="block_fourColumns">
                    <img className="section_fourColumns_icon" src={icon3}/>
                    <h2 className="fourColumns_block_name">Zdecyduj komu chcesz pomóc</h2>
                    <p className="section_fourColumns_line"></p>
                    <p className="fourColumns_block_text">wybierz zaufane miejsce</p>
                </div>
                <div className="block_fourColumns">
                    <img className="section_fourColumns_icon" src={icon4}/>
                    <h2 className="fourColumns_block_name">Zamów kuriera</h2>
                    <p className="section_fourColumns_line"></p>
                    <p className="fourColumns_block_text">kurier przyjedzie w dogodnym terminie</p>
                </div>
            </section>

            <section className="section_button">
                <button className="button button_fourColumns">ODDAJ <br /> RZECZY</button>
            </section>
        </>
    )
};

export default Section_FourColumns;