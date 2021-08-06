import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <section className="header-section">
                <div className="back-color">
                    <div className="container fon-ani">
                        <div className="row">
                            <div className="col-lg-12 d-flex flex-wrap">
                                <div
                                    className="col-lg-7 header-coll-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                                    <div data-aos="zoom-out" className="aos-init aos-animate">
                                        <h1 className="header-h1"><span>IT PRO</span> biznesingiz rivoji uchun
                                            o'zining <span>qulay</span> va <span>sifatli</span> xizmatlarini taklif
                                            etadi.</h1>
                                        <div className="text-center text-lg-left">
                                            <a href="https://t.me/IT_PRO_ROBOT"
                                               className="btn-get-started scrollto ">Bog'lanish</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 order-1 order-lg-2 hero-img aos-init aos-animate header-coll-5"
                                     data-aos="zoom-out" data-aos-delay="300">
                                    <img src="/images/hero-img.png" className="img-fluid animated" id="rasm"
                                         alt="photo"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28 "
                             preserveAspectRatio="none">
                            <defs>
                                <path id="wave-path"
                                      d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z">
                                </path>
                            </defs>
                            <g className="wave1">
                                <use href="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)">
                                </use>
                            </g>
                            <g className="wave2">
                                <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)">
                                </use>
                            </g>
                            <g className="wave3">
                                <use href="#wave-path" x="50" y="9" fill="#fff">
                                </use>
                            </g>
                        </svg>
                    </div>
                </div>
            </section>
        );
    }
}

export default Header;