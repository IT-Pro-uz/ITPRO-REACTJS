import React, {Component} from "react";
import Slider from "react-slick";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons'
import {faQuoteRight} from '@fortawesome/free-solid-svg-icons'

export default class Section7 extends Component {
    render() {
        const settings = {
            dots: true,
            autoplay: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <section className="section-7" id="jamoa">
                <div className="container">
                    <Slider {...settings}>
                        <div className="sec-7-car-div">
                            <img src="/images/worker.svg" className="sec-7-logo" alt="worker"/>
                            <h3>Firdavs</h3>
                            <h4>Backend Developer</h4>
                            <div className="social">
                                <a href="https://telegram.me/FirdavsDev" className="social-icon-div"><img
                                    src="/images/telegram.svg" alt="telegram" className="sec-7-tg"/></a>
                                <a href="https://www.instagram.com/firdavsd_official/" className="social-icon-div"><img
                                    src="/images/instagram.svg" alt="instagram" className="sec-7-tg"/></a>
                                <a href="https://github.com/firdavsDev" className="social-icon-div"><img
                                    src="/images/github.svg" alt="github" className="sec-7-tg"/></a>
                            </div>
                            <p>
                                <FontAwesomeIcon icon={faQuoteLeft} className="sec-7-q-l-icon"/>
                                Python, PHP tillar bo'yicha backend dasturchi.
                                <FontAwesomeIcon icon={faQuoteRight} className="sec-7-q-r-icon"/>
                            </p>
                        </div>
                        <div className="sec-7-car-div">
                            <img src="/images/man.svg" className="sec-7-logo" alt="man"/>
                            <h3>Akbarov</h3>
                            <h4>FullStack Developer</h4>
                            <div className="social">
                                <a href="https://t.me/akbarov_officalll" className="social-icon-div"><img
                                    src="/images/telegram.svg" alt="telegram" className="sec-7-tg"/></a>
                                <a href="https://www.instagram.com/_akbarov_officall_/" className="social-icon-div"><img
                                    src="/images/instagram.svg" alt="instagram" className="sec-7-tg"/></a>
                                <a href="https://github.com/akbarov504/" className="social-icon-div"><img
                                    src="/images/github.svg" alt="github" className="sec-7-tg"/></a>
                            </div>
                            <p>
                                <FontAwesomeIcon icon={faQuoteLeft} className="sec-7-q-l-icon"/>
                                ReactJs, Python tillar bo'yicha FullStack dasturchi.
                                <FontAwesomeIcon icon={faQuoteRight} className="sec-7-q-r-icon"/>
                            </p>
                        </div>
                        <div className="sec-7-car-div">
                            <img src="/images/programmer.svg" className="sec-7-logo" alt="programmer"/>
                            <h3>Daler</h3>
                            <h4>Frontend Developer</h4>
                            <div className="social">
                                <a href="https://t.me/Shokhruxzoda" className="social-icon-div"><img
                                    src="/images/telegram.svg" alt="telegram" className="sec-7-tg"/></a>
                                <a href="https://www.instagram.com/_daler002/" className="social-icon-div"><img
                                    src="/images/instagram.svg" alt="instagram" className="sec-7-tg"/></a>
                                <a href="https://github.com/akbarov504/" className="social-icon-div"><img
                                    src="/images/github.svg" alt="github" className="sec-7-tg"/></a>
                            </div>
                            <p>
                                <FontAwesomeIcon icon={faQuoteLeft} className="sec-7-q-l-icon"/>
                                ReactJs tili bo'yicha Frontend dasturchi.
                                <FontAwesomeIcon icon={faQuoteRight} className="sec-7-q-r-icon"/>
                            </p>
                        </div>
                        <div className="sec-7-car-div">
                            <img src="/images/gamer.svg" className="sec-7-logo" alt="gamer"/>
                            <h3>Nurislom</h3>
                            <h4>Backend Developer</h4>
                            <div className="social">
                                <a href="https://t.me/ST2EMX" className="social-icon-div"><img
                                    src="/images/telegram.svg" alt="telegram" className="sec-7-tg"/></a>
                                <a href="https://www.instagram.com/st2emx/" className="social-icon-div"><img
                                    src="/images/instagram.svg" alt="instagram" className="sec-7-tg"/></a>
                                <a href="https://github.com/Nurislom373" className="social-icon-div"><img
                                    src="/images/github.svg" alt="github" className="sec-7-tg"/></a>
                            </div>
                            <p>
                                <FontAwesomeIcon icon={faQuoteLeft} className="sec-7-q-l-icon"/>
                                Python tili bo'yicha Backend dasturchi.
                                <FontAwesomeIcon icon={faQuoteRight} className="sec-7-q-r-icon"/>
                            </p>
                        </div>
                        <div className="sec-7-car-div">
                            <img src="/images/man%20(2).svg" className="sec-7-logo" alt="gamer"/>
                            <h3>Dilshodbek</h3>
                            <h4>FullStack Developer</h4>
                            <div className="social">
                                <a href="https://t.me/It_pro_developer" className="social-icon-div"><img
                                    src="/images/telegram.svg" alt="telegram" className="sec-7-tg"/></a>
                                <a href="https://www.instagram.com/_akbarov_officall_/" className="social-icon-div"><img
                                    src="/images/instagram.svg" alt="instagram" className="sec-7-tg"/></a>
                                <a href="https://github.com/akbarov504/" className="social-icon-div"><img
                                    src="/images/github.svg" alt="github" className="sec-7-tg"/></a>
                            </div>
                            <p>
                                <FontAwesomeIcon icon={faQuoteLeft} className="sec-7-q-l-icon"/>
                                FullStack dasturchi.
                                <FontAwesomeIcon icon={faQuoteRight} className="sec-7-q-r-icon"/>
                            </p>
                        </div>
                    </Slider>
                </div>
            </section>
        );
    }
}