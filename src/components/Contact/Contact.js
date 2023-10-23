import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="section-Bottom" style={{margin: "10% 10% 6% 10%"}}>
            <section id="contact">
                <h2 style={{width: "500px", fontSize: "3rem"}}>Contact</h2>
                <div className="contact-wrapper">
                    {/* Left contact page */}
                    <form id="contact-form" className="form-horizontal" role="form">
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="text" className="form-control" id="name" placeholder="NAME" name="name" required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" required/>
                            </div>
                        </div>
                        <textarea className="form-control" rows={10} placeholder="MESSAGE" name="message" required defaultValue={""}/>
                        <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                            <div className="alt-send-button">
                                <i className="fa fa-paper-plane"/><span className="send-text">SEND</span>
                            </div>
                        </button>
                    </form>
                    {/* Left contact page */}
                    <div className="direct-contact-container">
                        <ul className="contact-list">
                            <li className="list-item"><i className="fa fa-map-marker fa-2x"><span
                                className="contact-text place">City, Seoul</span></i></li>
                            <li className="list-item"><i className="fa fa-phone fa-2x"><span
                                className="contact-text phone"><a href="tel:1-212-555-5555"
                                                                  title="Give me a call">010-5287-1394</a></span></i>
                            </li>
                            <li className="list-item"><i className="fa fa-envelope fa-2x"><span
                                className="contact-text gmail"><a href="mailto:#"
                                                                  title="Send me an email">kbw0309@gmail.com</a></span></i>
                            </li>
                        </ul>
                        <hr className="hr-line"/>
                        <ul className="social-media-list">
                            <li><a href="#" target="_blank" className="contact-icon">
                                <i className="fa fa-github" aria-hidden="true"/></a>
                            </li>
                            <li><a href="#" target="_blank" className="contact-icon">
                                <i className="fa fa-codepen" aria-hidden="true"/></a>
                            </li>
                            <li><a href="#" target="_blank" className="contact-icon">
                                <i className="fa fa-twitter" aria-hidden="true"/></a>
                            </li>
                            <li><a href="#" target="_blank" className="contact-icon">
                                <i className="fa fa-instagram" aria-hidden="true"/></a>
                            </li>
                        </ul>
                        <hr className="hr-line"/>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Contact;
