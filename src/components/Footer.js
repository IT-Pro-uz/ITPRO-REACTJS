import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'

class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-info">
                                    <h3>IT PRO</h3>
                                    <p className="pb-3"><em>Biznesingiz uchun to'g'ri tanlov.</em></p>
                                    <p>
                                        O'zbekiston <br/>
                                        Toshkent shahri<br/><br/>
                                        <strong>Telefon:</strong> +998 99 770 73 75<br/>
                                        <strong>Email:</strong> ITprocontactt@gmail.com<br/>
                                    </p>
                                    <div className="social-links mt-3">
                                        <a href="https://t.me/IT_PRO_channel" className="facebook">
                                            <i className="bx bxl-telegram"></i></a>
                                        <a href="https://instagram.com/it__pro" className="instagram">
                                            <i className="bx bxl-instagram"></i></a>
                                        <a href="https://youtube.com/channel/UCy5iPj3kDkZGWGqlgGkzoIw"
                                           className="google-plus"><i className="bx bxl-youtube"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Foydali havola</h4>
                                <ul>
                                    <li><FontAwesomeIcon icon={faChevronRight} className="ft-icon"/><a
                                        href="#">Asosoiy</a></li>
                                    <li><FontAwesomeIcon icon={faChevronRight} className="ft-icon"/><a href="#haqida">Biz
                                        haqimizda</a>
                                    </li>
                                    <li><FontAwesomeIcon icon={faChevronRight} className="ft-icon"/><a
                                        href="#features">Xizmatlar</a>
                                    </li>
                                    <li><FontAwesomeIcon icon={faChevronRight} className="ft-icon"/><a
                                        href="#jamoa">Jamoa</a></li>
                                    <li><FontAwesomeIcon icon={faChevronRight} className="ft-icon"/><a
                                        href="#namunalarimiz">Namunalar</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;