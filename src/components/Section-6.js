import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSchool} from '@fortawesome/free-solid-svg-icons'
import {faHospital} from '@fortawesome/free-solid-svg-icons'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {faUtensils} from '@fortawesome/free-solid-svg-icons'

class Section6 extends Component {
    render() {
        return (
            <section id="portfolio" className="clearfix" id='namunalarimiz'>
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>Xizmat</h2>
                        <p>Saytlarimizdan Namunalar</p>
                    </div>
                    <ul className="nav nav-tabs border-0">
                        <li className="nav-item btn-bck btn-left">
                            <a className="nav-link active" data-toggle="tab" href="#home"><FontAwesomeIcon
                                icon={faSchool} className="tab-icon"/></a>
                        </li>
                        <li className="nav-item btn-bck">
                            <a className="nav-link" data-toggle="tab" href="#menu1"><FontAwesomeIcon icon={faHospital}
                                                                                                     className="tab-icon"/></a>
                        </li>
                        <li className="nav-item btn-bck">
                            <a className="nav-link" data-toggle="tab" href="#menu2"><FontAwesomeIcon
                                icon={faShoppingCart} className="tab-icon"/></a>
                        </li>
                        <li className="nav-item btn-bck">
                            <a className="nav-link pr-d" data-toggle="tab" href="#menu3"><FontAwesomeIcon
                                icon={faUtensils} className="tab-icon"/></a>
                        </li>
                    </ul>

                    <div className="tab-content">
                        <div id="home" className="container tab-pane active"><br/>
                            <div className="row">
                                <div className="col-md-4 col-sm-6 mt-4">
                                    <div className="single-content">
                                        <img src="img/portfolio/Edu-1.jpg"/>
                                        <div className="text-content">
                                            <h5><b>O'quv Markaz 1</b></h5>
                                            <a href="https://oquvmarkazi-5.netlify.app/" className="link-details"
                                               title="More Details"><img src="img/foreign.svg" className="ed-img"
                                                                         alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 mt-4">
                                    <div className="single-content">
                                        <img src="img/portfolio/Edu-2.jpg"/>
                                        <div className="text-content">
                                            <h5><b>O'quv Markaz 2</b></h5>
                                            <a href="https://oquvmarkazi-4.netlify.app/" className="link-details"
                                               title="More Details"><img src="img/foreign.svg" className="ed-img"
                                                                         alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 mt-4">
                                    <div className="single-content">
                                        <img src="img/portfolio/Edu-3.jpg"/>
                                        <div className="text-content">
                                            <h5><b>O'quv Markaz 3</b></h5>
                                            <a href="https://oquvmarkazi-3.netlify.app/" className="link-details"
                                               title="More Details"><img src="img/foreign.svg" className="ed-img"
                                                                         alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 mt-4">
                                    <div className="single-content">
                                        <img src="img/portfolio/Edu-4.jpg"/>
                                        <div className="text-content">
                                            <h5><b>O'quv Markaz 4</b></h5>
                                            <a href="https://oquvmarkazi-2.netlify.app/" className="link-details"
                                               title="More Details"><img src="img/foreign.svg" className="ed-img"
                                                                         alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 mt-4">
                                    <div className="single-content">
                                        <img src="img/portfolio/Edu-5.jpg"/>
                                        <div className="text-content">
                                            <h5><b>O'quv Markaz 5</b></h5>
                                            <a href="https://oquvmarkazi-1.netlify.app/" className="link-details"
                                               title="More Details"><img src="img/foreign.svg" className="ed-img"
                                                                         alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="menu1" className="container tab-pane fade"><br/>
                            <div className="row">
                                <div className="col-md-4 col-sm-6 mt-4">
                                    <div className="single-content">
                                        <img src="img/portfolio/medic-1.jpg"/>
                                        <div className="text-content">
                                            <h5><b>Shifoxona 1</b></h5>
                                            <a href="https://shifoxona1.netlify.app/" className="link-details"
                                               title="More Details"><img src="img/foreign.svg" className="ed-img"
                                                                         alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 mt-4">
                                    <div className="single-content">
                                        <img src="img/portfolio/medic-2.jpg"/>
                                        <div className="text-content">
                                            <h5><b>Shifoxona 2</b></h5>
                                            <a href="https://shifoxona2.netlify.app/" className="link-details"
                                               title="More Details"><img src="img/foreign.svg" className="ed-img"
                                                                         alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 mt-4">
                                    <div className="single-content">
                                        <img src="img/portfolio/medic-3.jpg"/>
                                        <div className="text-content">
                                            <h5><b>Shifoxona 3</b></h5>
                                            <a href="https://shifoxona3.netlify.app/" className="link-details"
                                               title="More Details"><img src="img/foreign.svg" className="ed-img"
                                                                         alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 mt-4">
                                    <div className="single-content">
                                        <img src="img/portfolio/medic-4.jpg"/>
                                        <div className="text-content">
                                            <h5><b>Shifoxona 4</b></h5>
                                            <a href="https://shifoxona4.netlify.app/" className="link-details"
                                               title="More Details"><img src="img/foreign.svg" className="ed-img"
                                                                         alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 mt-4">
                                    <div className="single-content">
                                        <img src="img/portfolio/medic-5.jpg"/>
                                        <div className="text-content">
                                            <h5><b>Shifoxona 5</b></h5>
                                            <a href="https://shifoxona5.netlify.app/" className="link-details"
                                               title="More Details"><img src="img/foreign.svg" className="ed-img"
                                                                         alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="menu2" className="container tab-pane fade"><br/>
                            <div className="row">
                                <div className="col-md-4 col-sm-6 mt-4">
                                    <div className="single-content">
                                        <img src="img/portfolio/online_shop_1.jpg"/>
                                        <div className="text-content">
                                            <h5><b>Online Shop 1</b></h5>
                                            <a href="https://online-shop-1.netlify.app/" className="link-details"
                                               title="More Details"><img src="img/foreign.svg" className="ed-img"
                                                                         alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 mt-4">
                                    <div className="single-content">
                                        <img src="img/portfolio/online_shop_2.jpg"/>
                                        <div className="text-content">
                                            <h5><b>Online Shop 2</b></h5>
                                            <a href="https://online-shop-2.netlify.app/" className="link-details"
                                               title="More Details"><img src="img/foreign.svg" className="ed-img"
                                                                         alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 mt-4">
                                    <div className="single-content">
                                        <img src="img/portfolio/online_shop_3.jpg"/>
                                        <div className="text-content">
                                            <h5><b>Online Shop 3</b></h5>
                                            <a href="https://online-shop-3.netlify.app/" className="link-details"
                                               title="More Details"><img src="img/foreign.svg" className="ed-img"
                                                                         alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 mt-4">
                                    <div className="single-content">
                                        <img src="img/portfolio/online_shop_4.jpg"/>
                                        <div className="text-content">
                                            <h5><b>Online Shop 4</b></h5>
                                            <a href="https://online-shop-4.netlify.app/" className="link-details"
                                               title="More Details"><img src="img/foreign.svg" className="ed-img"
                                                                         alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 mt-4">
                                    <div className="single-content">
                                        <img src="img/portfolio/online_shop_5.jpg"/>
                                        <div className="text-content">
                                            <h5><b>Online Shop 5</b></h5>
                                            <a href="https://online-shop-5.netlify.app/" className="link-details"
                                               title="More Details"><img src="img/foreign.svg" className="ed-img"
                                                                         alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="menu3" className="container tab-pane fade"><br/>
                            <div className="row">
                                <div className="col-md-4 col-sm-6 mt-4">
                                    <div className="single-content">
                                        <img src="img/portfolio/restaran-1.jpg"/>
                                        <div className="text-content">
                                            <h5><b>Restaran 1</b></h5>
                                            <a href="https://restaran1.netlify.app/" className="link-details"
                                               title="More Details"><img src="img/foreign.svg" className="ed-img"
                                                                         alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 mt-4">
                                    <div className="single-content">
                                        <img src="img/portfolio/restaran-2.jpg"/>
                                        <div className="text-content">
                                            <h5><b>Restaran 2</b></h5>
                                            <a href="https://restaran2.netlify.app/" className="link-details"
                                               title="More Details"><img src="img/foreign.svg" className="ed-img"
                                                                         alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 mt-4">
                                    <div className="single-content">
                                        <img src="img/portfolio/restaran-3.jpg"/>
                                        <div className="text-content">
                                            <h5><b>Restaran 3</b></h5>
                                            <a href="https://restaran3.netlify.app/" className="link-details"
                                               title="More Details"><img src="img/foreign.svg" className="ed-img"
                                                                         alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 mt-4">
                                    <div className="single-content">
                                        <img src="img/portfolio/restaran-4.jpg"/>
                                        <div className="text-content">
                                            <h5><b>Restaran 4</b></h5>
                                            <a href="https://restaran4.netlify.app/" className="link-details"
                                               title="More Details"><img src="img/foreign.svg" className="ed-img"
                                                                         alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 mt-4">
                                    <div className="single-content">
                                        <img src="img/portfolio/restaran-5.jpg"/>
                                        <div className="text-content">
                                            <h5><b>Restaran 5</b></h5>
                                            <a href="https://restaran5.netlify.app/" className="link-details"
                                               title="More Details"><img src="img/foreign.svg" className="ed-img"
                                                                         alt=""/></a>
                                        </div>
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

export default Section6;