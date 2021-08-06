import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'

class Section5 extends Component {
    render() {
        return (
            <section id="details" className="details">
                <div className="container">
                    <div className="row content">
                        <div className="col-md-4" data-aos="fade-right">
                            <img src="img/detail/details-3.png" className="img-fluid" alt="RASM"/>
                        </div>
                        <div className="col-md-8 pt-5" data-aos="fade-up">
                            <h3>Ko'plab qulayliklar</h3>
                            <p> Internet asrida muvaffaqiyatli biznesni o'z shaxsiy saytingizsiz tasavvur qilish
                                qiyin. Ko'p sonli mijozlar kompaniya bilan ish boshlashdan oldin internetdagi
                                websitelari orqali ular haqida ma'lumotga ega bo'lishadi.
                                Sayt bu sizning tashrif qog'ozingiz bo'lib xizmat qiladi. Biz esa, orzuyingizdagi
                                saytni yaratishga yordam beramiz.
                                IT PRO quyidagilarni taklif qiladi:</p>
                            <ul>
                                <li><FontAwesomeIcon icon={faCheck} className="check-icon"/> Zamonaviy dizayn.</li>
                                <li><FontAwesomeIcon icon={faCheck} className="check-icon"/> Yuqori ishlash tezligi.
                                </li>
                                <li><FontAwesomeIcon icon={faCheck} className="check-icon"/> Moslanuvchan sahifalar.
                                </li>
                                <li><FontAwesomeIcon icon={faCheck} className="check-icon"/> Oson kontentni boshqarish
                                    paneli.
                                </li>
                            </ul>
                            <p>
                                Xizmat sifati kafolatlangan.
                            </p>
                            <p>
                                Qulay narxlar sizni mamnun etadi.
                            </p>
                        </div>
                    </div>
                    <div className="row content">
                        <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
                            <img src="img/detail/details-4.png" className="img-fluid" alt="rasm"/>
                        </div>
                        <div className="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
                            <h3>Nega aynan biz?</h3>
                            <p>
                                Bizning xizmatlar boshqa xizmatlardan farqi...!
                            </p>
                            <ul>
                                <li><FontAwesomeIcon icon={faCheck} className="check-icon"/> Saytning optimal ishlashi.
                                </li>
                                <li><FontAwesomeIcon icon={faCheck} className="check-icon"/> Zamonaviy dizayn.</li>
                                <li><FontAwesomeIcon icon={faCheck} className="check-icon"/> Saytning xavfsizligi.</li>
                            </ul>
                            <p>
                                Bizning xizmаtlardan foydalangan holda quyidagi BONUS larga ega bo'lasiz: <br/>
                                <br/>
                                - Domen, Hosting 1 yilga sovg'a sifatida,<br/>
                                - Tez vа sifatli web sаyt,<br/>
                                - Qulаy boshqarish uchun аdministrаtor pаnel,<br/>
                                - Saytni 3 versiyaga (Kompyuter, planshetlar va Telefonlar) ga moslashtirish,<br/>
                                - Google va Yandex qidiruv tizimlariga qo'shish,<br/>
                                - Yandex va Google xaritalariga qo'shish,<br/>
                                - 3 dan 20 kunga qadar qisqa muddat ichida.
                            </p>
                        </div>
                    </div>
                    <div className="row content">
                        <div className="col-md-4" data-aos="fade-right">
                            <img src="img/detail/details-1.png" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-md-8 pt-4" data-aos="fade-up">
                            <h3>Oson va tez boshqarish uchun Admin paneli</h3>
                            <p className="font-italic">
                                Saytning admin sahifasi orqali siz saytingizni mustaqil yurita olishingiz mumkin
                                bo'ladi.
                            </p>
                            <ul>
                                <li><FontAwesomeIcon icon={faCheck} className="check-icon"/> Yangi maxsulotlarni tezda
                                    saytda chop etish.
                                </li>
                                <li><FontAwesomeIcon icon={faCheck} className="check-icon"/> Osonlik bilan maxsulot
                                    narxlarini o'zgartirib
                                    borish.
                                </li>
                                <li><FontAwesomeIcon icon={faCheck} className="check-icon"/> Aksiyalar holatini
                                    boshqarish.
                                </li>
                            </ul>
                            <p>
                            </p>
                        </div>
                    </div>
                    <div className="row content">
                        <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
                            <img src="img/detail/details-2.png" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
                            <h3>Tezkor ma'lumotlar bazasi</h3>
                            <p className="font-italic">
                                Foydalanuvchilar ma'lumotlar bazasini shakilantirish.
                            </p>
                            <p>
                                Saytingizdan foydalangan har qanday foydalanuvchilar bazasi.
                            </p>
                            <p>
                                Bu yo'l orqali siz mijozlar bilan tez bog'lana olasiz. Bu esa, sizning biznesingiz
                                ravnaqi uchun katta hissa qo'sha oladi.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Section5;