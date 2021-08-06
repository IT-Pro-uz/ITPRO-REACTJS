import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSmile} from '@fortawesome/free-solid-svg-icons'
import {faFileInvoiceDollar} from '@fortawesome/free-solid-svg-icons'
import {faHeadset} from '@fortawesome/free-solid-svg-icons'
import {faUsers} from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup';

class Section4 extends Component {
    render() {
        return (
            <div>
                <section id="counts" className="counts">
                    <div className="container">
                        <div className="row" data-aos="fade-up">
                            <div className="col-lg-3 col-md-6">
                                <div className="count-box">
                                    <FontAwesomeIcon icon={faSmile} className="count-icon"/>
                                    <span><CountUp end={32} time={1000} delay={7}/></span>
                                    <p>Foydalanuvchilar</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                                <div className="count-box">
                                    <FontAwesomeIcon icon={faFileInvoiceDollar} className="count-icon"/>
                                    <span><CountUp end={51} time={1000} delay={7}/></span>
                                    <p>Loyihalar</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                                <div className="count-box">
                                    <FontAwesomeIcon icon={faHeadset} className="count-icon"/>
                                    <span><CountUp end={24} time={1000} delay={7}/></span>
                                    <p>Aloqada</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                                <div className="count-box">
                                    <FontAwesomeIcon icon={faUsers} className="count-icon"/>
                                    <span><CountUp end={11} time={1000} delay={7}/></span>
                                    <p>Jamoamiz</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Section4;