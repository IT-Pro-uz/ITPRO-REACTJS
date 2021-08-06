import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapMarker} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons'

class Section9 extends Component {
    render() {
        return (
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>Aloqa</h2>
                        <p>Biz bilan bog'laning</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-right" data-aos-delay="100">
                            <div className="info">
                                <div className="address">
                                    <FontAwesomeIcon icon={faMapMarker} className="contact-icon"/>
                                    <h4>Manzil:</h4>
                                    <p>Toshkent shahri</p>
                                </div>
                                <div className="email">
                                    <FontAwesomeIcon icon={faEnvelope} className="contact-icon"/>
                                    <h4>Email:</h4>
                                    <p>ITprocontactt@gmail.com</p>
                                </div>
                                <div className="phone">
                                    <FontAwesomeIcon icon={faPhoneAlt} className="contact-icon"/>
                                    <h4>Telefon:</h4>
                                    <p>+998 99 770 73 75</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left" data-aos-delay="200">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="form-row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name"
                                               placeholder="Ismingiz" data-rule="minlen:4"
                                               data-msg="Kamida 4 ta harf" required minLength={4}/>
                                        <div className="validate"></div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="email" className="form-control" name="email" id="email"
                                               placeholder="Email manzilingiz" data-rule="email"
                                               data-msg="Email xato" required inputMode={"email"}/>
                                        <div className="validate"></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="subject" id="subject"
                                           placeholder="Mavzu" data-rule="minlen:4"
                                           data-msg="8 ta harfdan iborat bo'lishi shart" required minLength={8}/>
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                        <textarea className="form-control" name="message" rows="5" data-rule="required"
                                                  data-msg="Xabaringizni kiriting" placeholder="Xabar"></textarea>
                                    <div className="validate"></div>
                                </div>
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Xabaringiz yetkazildi!</div>
                                </div>
                                <div className="text-center">
                                    <button type="submit">Yuborish</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Section9;