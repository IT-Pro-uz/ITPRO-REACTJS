import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import {faChevronUp} from '@fortawesome/free-solid-svg-icons'

class Section8 extends Component {
    render() {
        return (
            <section id="faq" className="faq section-bg">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>F.A.Q</h2>
                        <p>Ko'p so'raladigan savollar</p>
                    </div>
                    <div className="faq-list">
                        <ul>
                            <li data-aos="fade-up">
                                <img src="/images/icon-help.png" alt="icon.help" className="icon-help"/><a
                                data-toggle="collapse" className="collapse" href="#faq-list-1">To'lov qanday
                                shaklda bo'ladi?
                                <FontAwesomeIcon icon={faChevronDown} className="icon-show"/>
                                <FontAwesomeIcon icon={faChevronUp} className="icon-close"/></a>
                                <div id="faq-list-1" className="collapse show" data-parent=".faq-list">
                                    <p>
                                        To'lovni har qanday usulda to'lash mumkin. To'lovning 30% to'langandan so'ng
                                        jamoa ish boshlaydi, qolgan qismini loyiha tugatilgandan so'ng amalga
                                        oshiriladi.
                                    </p>
                                </div>
                            </li>

                            <li data-aos="fade-up" data-aos-delay="100">
                                <img src="/images/icon-help.png" alt="icon.help" className="icon-help"/><a
                                data-toggle="collapse" href="#faq-list-2" className="collapsed">Loyiha
                                necha kun ichida tugatilib, foydalanishga tayyor bo'ladi?
                                <FontAwesomeIcon icon={faChevronDown} className="icon-show"/>
                                <FontAwesomeIcon icon={faChevronUp} className="icon-close"/></a>
                                <div id="faq-list-2" className="collapse" data-parent=".faq-list">
                                    <p>
                                        Loyihaning hajmiga qarab 3 kundan 20kun ichida tayyorlaniladi.
                                    </p>
                                </div>
                            </li>

                            <li data-aos="fade-up" data-aos-delay="200">
                                <img src="/images/icon-help.png" alt="icon.help" className="icon-help"/><a
                                data-toggle="collapse" href="#faq-list-3" className="collapsed">To'lo'v
                                shartnomasi?
                                <FontAwesomeIcon icon={faChevronDown} className="icon-show"/>
                                <FontAwesomeIcon icon={faChevronUp} className="icon-close"/></a>
                                <div id="faq-list-3" className="collapse" data-parent=".faq-list">
                                    <p>
                                        Kelishilgan summaning 30% to'lanilishidan oldin iste'molchi bilan miyoriy
                                        hujjatlar asosida shartnoma tuziladi.
                                    </p>
                                </div>
                            </li>

                            <li data-aos="fade-up" data-aos-delay="300">
                                <img src="/images/icon-help.png" alt="icon.help" className="icon-help"/><a
                                data-toggle="collapse" href="#faq-list-4" className="collapsed">Loyiha
                                belgilangan muddatdan kechiktirilgan holda?
                                <FontAwesomeIcon icon={faChevronDown} className="icon-show"/>
                                <FontAwesomeIcon icon={faChevronUp} className="icon-close"/></a>
                                <div id="faq-list-4" className="collapse" data-parent=".faq-list">
                                    <p>
                                        Agar ayrim sabablar tufayli loyiha shartnomada ko'rsatilgan muddatdan
                                        kechiktirilsa, iste'molchi xohish istaki asosida qo'shimcha muddat
                                        belgilaniladi yoki loyiha bekor qilinib, to'langan to'lovning barchasi
                                        qaytarilib beriladi.
                                    </p>
                                </div>
                            </li>

                            <li data-aos="fade-up" data-aos-delay="400">
                                <img src="/images/icon-help.png" alt="icon.help" className="icon-help"/><a
                                data-toggle="collapse" href="#faq-list-5" className="collapsed">Loyiha
                                tugatilgandan sung istomolchi loyhaga o'zgartirish istaki uyg'onib qolgan holda?
                                <FontAwesomeIcon icon={faChevronDown} className="icon-show"/>
                                <FontAwesomeIcon icon={faChevronUp} className="icon-close"/></a>
                                <div id="faq-list-5" className="collapse" data-parent=".faq-list">
                                    <p>
                                        Agar tugatilgan loyiha shartnomada ko'rsatilgan holatda bo'lsa lekin
                                        iste'molchi yana o'zgartirish kiritishni istab qolsa, jamoamiz bu holatni
                                        albatta o'z zimmasiga oladi va yana qo'shimcha vaqt belgilanib, qiymat
                                        summasi qo'shiladi. Iste'molchilar xohish istaklari biz uchun 1-o'rinda.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default Section8;