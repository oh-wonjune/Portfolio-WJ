import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="section-Bottom" style={{margin: "8% 10% 8% 10%"}}>
            <section id="contact">
                <h2 style={{width: "500px", fontSize: "3rem"}}>Contact</h2>
                <div className="contact-wrapper">
                    <div className="direct-contact-container">
                        <ul className="contact-list">
                            <li className="list-item">
                                <i className="fa fa-map-marker fa-2x" style={{color:"#6C47D9"}}>
                                    <span className="contact-text place" style={{color:"#0ef", fontWeight:"400"}}>City, Seoul</span>
                                </i>
                            </li>
                            <li className="list-item">
                                <i className="fa fa-phone fa-2x" style={{color:"#6C47D9"}}>
                                    <span className="contact-text phone">
                                        <a href="tel:1-212-555-5555" title="Give me a call">010-5287-1394</a>
                                    </span>
                                </i>
                            </li>
                            <li className="list-item">
                                <i className="fa fa-envelope fa-2x" style={{color:"#6C47D9"}}>
                                    <span className="contact-text gmail">
                                        <a href="mailto:#" title="Send me an email">kbw0309@gmail.com</a>
                                    </span>
                                </i>
                            </li>
                        </ul>
                        <hr className="hr-line"/>
                        <div className="social-buttons">
                            <a href="https://github.com/oh-wonjune" target="_blank" className="social-buttons__button social-button social-button--github" aria-label="GitHub">
                                <span className="social-button__inner">
                                    <i className="fab fa-github"/>
                                </span>
                            </a>
                            <a href="https://www.instagram.com/kbw0309/" target="_blank" className="social-buttons__button social-button social-button--instagram" aria-label="InstaGram">
                                <span className="social-button__inner">
                                    <i className="fab fa-instagram"/>
                                </span>
                            </a>
                            <a href="https://www.linkedin.com/in/wonjune-oh-345193286/" target="_blank" className="social-buttons__button social-button social-button--linkedin" aria-label="LinkedIn">
                                <span className="social-button__inner">
                                    <i className="fab fa-linkedin-in"/>
                                </span>
                            </a>
                        </div>
                        <hr className="hr-line"/>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Contact;
