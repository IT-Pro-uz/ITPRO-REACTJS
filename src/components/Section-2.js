import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFingerprint} from '@fortawesome/free-solid-svg-icons'
import {faGift} from '@fortawesome/free-solid-svg-icons'
import {faGlobeAsia} from '@fortawesome/free-solid-svg-icons'

class Section2 extends Component {
    render() {
        return (
            <section className="section-2" id="haqida">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 d-flex flex-wrap">
                            <div className="col-lg-6">
                                <img src="/images/about.png" alt="about" className="about-img"/>
                            </div>
                            <div className="col-lg-6 about-text">
                                <h3>Biznesingizni rivojlantirish uchun biz sizga o'z xizmatlarimizni taklif
                                    etamiz!</h3>
                                <p>Sayt kerak degan fikr sizni tark etmayaptimi? Sizga sifatli va chiroyli sayt, eng
                                    asosiysi qulay narx kerakmi? Biz sizga yordam beramiz. Bizning jamoa tez va
                                    qulay narxlarda sizga website yaratib beradi!</p>
                                <div className="icon-box d-flex">
                                    <div className="icon"><FontAwesomeIcon icon={faFingerprint} className="sec-2-icon"/>
                                    </div>
                                    <div className="title-and-doc">
                                        <h4 className="title">Xafsizlik</h4>
                                        <p className="description">Tajribali dasturchi guruhimiz sizning saytingizning
                                            xavfsizligi uchun qayg'urishadi.</p>
                                    </div>
                                </div>
                                <div className="icon-box d-flex">
                                    <div className="icon"><FontAwesomeIcon icon={faGift} className="sec-2-icon"/></div>
                                    <div className="title-and-doc">
                                        <h4 className="title">Bonus</h4>
                                        <p className="description">Bepul domen (.uz) 1 yilga. Qulay boshqaruv tizmi CMS.
                                            Narxlar juda qulay!</p>
                                    </div>
                                </div>
                                <div className="icon-box d-flex">
                                    <div className="icon"><FontAwesomeIcon icon={faGlobeAsia} className="sec-2-icon"/>
                                    </div>
                                    <div className="title-and-doc">
                                        <h4 className="title">Moslanuvchan</h4>
                                        <p className="description">Biz yaratgan sayt har qanday qurilmada (kompyuter,
                                            smartfon, planshet) qulay aks etadi.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Section2;