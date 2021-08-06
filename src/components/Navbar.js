import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light nav-bar sticky-top">
                <div className="container">
                    <a className="navbar-brand home-logo text-white" href="#">IT PRO</a>
                    <button className="navbar-toggler border-0 navcol-btn" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} className="nav-mobi-show"/>
                        <FontAwesomeIcon icon={faTimes} className="nav-mobi-close"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Asosiy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#haqida">Haqida</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#features">Xizmatlar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#details">Ish</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#jamoa">Jamoa</a>
                            </li>
                            <li className="nav-item nav-link-down2">
                                <a className="nav-link text-white" href="#namunalarimiz">Namunalar</a>
                            </li>
                            <li className="drop-down nav-link-down"><a href="#" className="text-white">Saytlarmiz</a>
                                <ul>
                                    <li className="drop-down"><a href="#" alt="Namuna saytlarimiz">O'quv Markazlar</a>
                                        <ul>
                                            <li><a href="https://oquvmarkazi-1.netlify.app">O'quv Markaz 1</a></li>
                                            <li><a href="https://oquvmarkazi-2.netlify.app">O'quv Markaz 2</a></li>
                                            <li><a href="https://oquvmarkazi-3.netlify.app">O'quv Markaz 3</a></li>
                                            <li><a href="https://oquvmarkazi-4.netlify.app">O'quv Markaz 4</a></li>
                                            <li><a href="https://oquvmarkazi-5.netlify.app">O'quv Markaz 5</a></li>
                                        </ul>
                                    </li>
                                    <li className="drop-down"><a href="#">Xususiy Klinika</a>
                                        <ul>
                                            <li><a href="https://shifoxona1.netlify.app">Shifoxona 1</a></li>
                                            <li><a href="https://shifoxona2.netlify.app">Shifoxona 2</a></li>
                                            <li><a href="https://shifoxona3.netlify.app">Shifoxona 3</a></li>
                                            <li><a href="https://shifoxona4.netlify.app">Shifoxona 4</a></li>
                                            <li><a href="https://shifoxona5.netlify.app">Shifoxona 5</a></li>
                                        </ul>
                                    </li>
                                    <li className="drop-down"><a href="#">Online Magazin</a>
                                        <ul>
                                            <li><a href="https://online-shop-1.netlify.app/">Online magazin 1</a></li>
                                            <li><a href="https://online-shop-2.netlify.app/">Online magazin 2</a></li>
                                            <li><a href="https://online-shop-3.netlify.app/">Online magazin 3</a></li>
                                            <li><a href="https://online-shop-4.netlify.app/">Online magazin 4</a></li>
                                            <li><a href="https://online-shop-5.netlify.app/">Online magazin 5</a></li>
                                        </ul>
                                    </li>
                                    <li className="drop-down"><a href="#">Kafe - Restarantlar</a>
                                        <ul>
                                            <li><a href="https://restaran1.netlify.app">Restaran 1</a></li>
                                            <li><a href="https://restaran2.netlify.app">Restaran 2</a></li>
                                            <li><a href="https://restaran3.netlify.app">Restaran 3</a></li>
                                            <li><a href="https://restaran4.netlify.app/">Restaran 4</a></li>
                                            <li><a href="https://restaran5.netlify.app/">Restaran 5</a></li>
                                        </ul>
                                    </li>
                                    <li className="drop-down"><a href="#">Telegram Bot</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#contact">Bog'lanish</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;