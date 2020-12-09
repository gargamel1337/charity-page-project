import React from 'react';
import foto from "../../images/Background-Contact-Form.jpg";
import decoration from "../../images/Decoration.svg";

const Footer = () => {
    return (
            <div className="section_footer" style={{backgroundImage: `url(${foto})`}}>
                <div className="opacity-footer">
                    <div className="form-footer">
                        <div className="row_text">
                            <h2 className="footer_text">Skontaktuj sie z nami</h2>
                            <img className="decoration-image" src={decoration}/>
                        </div>
                        <form className="form-row">
                            <div className="row_one">
                                <div className="row">
                                    <label className="form-control">Wpisz swoje imię</label>
                                    <input className="w3-input" type="text" placeholder="Katarzyna"/>
                                </div>
                                <div className="row">
                                    <label className="form-control">Wpisz swój email</label>
                                    <input type="email"
                                           placeholder="name@example.com"/>
                                </div>
                            </div>
                            <div className="row">
                                <label className="form-control">Wpisz swoją wiadomość</label>
                                <textarea className="form-control" id="validationServer07"
                                          placeholder="Locorporis cum debitis eos eveniet
                                           hic natus nemo perferendis  debitis eos eveniet hic natus
                                           nemo perferendis placeat porro, praesentium,quia tenetur
                                           ullam voluptatem!"
                                />
                            </div>
                            <button className="button-footer">Wyślij</button>
                        </form>
                    </div>
                    <div className="contact-footer">
                        <div className="container_footer">
                            <p className="footer">Copyright by Coders Lab</p>
                        </div>
                        <div className="container_footer_icon">
                            <a href="#" target="_blank"><i className="fab fa-facebook-square"/></a>
                            <a href="#" target="_blank"><i className="fab fa-instagram"/></a>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Footer;
