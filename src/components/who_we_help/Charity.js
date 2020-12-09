import React from 'react';
import decoration from "../../images/Decoration.svg";


const Charity = () => {
    return (
            <div className="section_help">
                <p className="section_help_header">Komu pomagamy?</p>
                <img src={decoration}/>
                <div className="section_help_list">
                    <button className="button section_help_button">Fundacjom</button>
                    <button className="button section_help_button">Organizacjom <br/> pozarządowym</button>
                    <button className="button section_help_button">Lokalnym <br/> Zbiórkom </button>
                </div>
                <p className="section_help_paragraf">W naszej bazie znajdziesz listę zweryfikowanych Fundacji,
                    z którymi współpracujemy. Możesz sprawdzić czym się zajmuja komu pomagają i czego potrzebują.
                </p>
            </div>
    );
};

export default Charity;