import React from 'react';
import decoration from "../../images/Decoration.svg";
import signature from "../../images/Signature.svg";
import people from "../../images/People.jpg";

function AboutUs (){
    return (
        <div className="section_aboutUs">
            <div className="section_aboutUs_all">
                <div className="section_aboutUs_text">
                    <p className="section_aboutUs_text_header">O nas</p>
                    <img src={decoration}/>
                    <div className="section_aboutUs_text_body">
                        <p className="section_aboutUs_text_paragraf">Lorem Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Adipisci aliquam atque
                            commodi qui quia tenetur ullam voluptatem!
                        </p>
                        <img className="section_aboutUs_signature_image" src={signature}/>
                    </div>
                </div>
                <div className="section_aboutUs_image">
                    <img className="aboutUs_image" src={people}/>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;