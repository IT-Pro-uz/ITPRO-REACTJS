import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStore} from '@fortawesome/free-solid-svg-icons'
import {faPoll} from '@fortawesome/free-solid-svg-icons'
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons'
import {faPaintRoller} from '@fortawesome/free-solid-svg-icons'
import {faDatabase} from '@fortawesome/free-solid-svg-icons'
import {faLifeRing} from '@fortawesome/free-solid-svg-icons'
import {faFileAlt} from '@fortawesome/free-solid-svg-icons'
import {faMoneyBillWave} from '@fortawesome/free-solid-svg-icons'
import {faAnchor} from '@fortawesome/free-solid-svg-icons'
import {faCompactDisc} from '@fortawesome/free-solid-svg-icons'
import {faBroadcastTower} from '@fortawesome/free-solid-svg-icons'
import {faFingerprint} from '@fortawesome/free-solid-svg-icons'

class Section3 extends Component {
    render() {
        return (
            <section id="features" className="features">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>Xizmat</h2>
                        <p>Nega bizni tanlashingiz kerak?</p>
                    </div>

                    <div className="row" data-aos="fade-left">
                        <div className="col-lg-3 col-md-4">
                            <div className="sec-3-icon-box" data-aos="zoom-in" data-aos-delay="50">
                                <div className="sec-3-icon"><FontAwesomeIcon icon={faStore}
                                                                             className="sec-3-icon text-warning"/></div>
                                <h3><a href="">Ko'p turdagi website.</a></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                            <div className="sec-3-icon-box" data-aos="zoom-in" data-aos-delay="100">
                                <div className="sec-3-icon"><FontAwesomeIcon icon={faPoll}
                                                                             className="sec-3-icon text-primary"/></div>
                                <h3><a href="">Barcha turdagi to'lo'vlar.</a></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                            <div className="sec-3-icon-box" data-aos="zoom-in" data-aos-delay="150">
                                <div className="sec-3-icon"><FontAwesomeIcon icon={faCalendarAlt}
                                                                             className="sec-3-icon text-danger"/></div>
                                <h3><a href="">Tez va sifatli natija.</a></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                            <div className="sec-3-icon-box" data-aos="zoom-in" data-aos-delay="200">
                                <div className="sec-3-icon"><FontAwesomeIcon icon={faPaintRoller}
                                                                             className="sec-3-icon text-info"/></div>
                                <h3><a href="">Zamonaviy dizayn.</a></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="sec-3-icon-box" data-aos="zoom-in" data-aos-delay="250">
                                <div className="sec-3-icon"><FontAwesomeIcon icon={faDatabase}
                                                                             className="sec-3-icon text-info"/></div>
                                <h3><a href="">Bepul tezkor hosting.</a></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="sec-3-icon-box" data-aos="zoom-in" data-aos-delay="300">
                                <div className="sec-3-icon"><FontAwesomeIcon icon={faLifeRing}
                                                                             className="sec-3-icon text-warning"/></div>
                                <h3><a href="">Xushmuomilalik.</a></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="sec-3-icon-box" data-aos="zoom-in" data-aos-delay="350">
                                <div className="sec-3-icon"><FontAwesomeIcon icon={faFileAlt}
                                                                             className="sec-3-icon text-secondary"/>
                                </div>
                                <h3><a href="">Barchasi qonuniy.</a></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="sec-3-icon-box" data-aos="zoom-in" data-aos-delay="400">
                                <div className="sec-3-icon"><FontAwesomeIcon icon={faMoneyBillWave}
                                                                             className="sec-3-icon text-primary"/></div>
                                <h3><a href="">Qulay narx.</a></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="sec-3-icon-box" data-aos="zoom-in" data-aos-delay="450">
                                <div className="sec-3-icon"><FontAwesomeIcon icon={faAnchor}
                                                                             className="sec-3-icon text-success"/></div>
                                <h3><a href="">Kuchli himoya.</a></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="sec-3-icon-box" data-aos="zoom-in" data-aos-delay="500">
                                <div className="sec-3-icon"><FontAwesomeIcon icon={faCompactDisc}
                                                                             className="sec-3-icon text-secondary"/>
                                </div>
                                <h3><a href="">Ijodiy fikrlash.</a></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="sec-3-icon-box" data-aos="zoom-in" data-aos-delay="550">
                                <div className="sec-3-icon"><FontAwesomeIcon icon={faBroadcastTower}
                                                                             className="sec-3-icon text-danger"/></div>
                                <h3><a href="">Tezkor server.</a></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="sec-3-icon-box" data-aos="zoom-in" data-aos-delay="600">
                                <div className="sec-3-icon"><FontAwesomeIcon icon={faFingerprint}
                                                                             className="sec-3-icon text-success"/></div>
                                <h3><a href="">Yuqori xavfsizlik.</a></h3>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default Section3;