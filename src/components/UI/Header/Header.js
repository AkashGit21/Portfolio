import React from 'react';
import './Header.css';

const header = () => (
        <div className="Header">
            <header>
                <nav >
                    <ul >
                        <li className="Logo"> 
                            <a href="/#"> Logo </a> </li>
                        <li><a href="/#"> About Me </a></li>
                        <li> <a href="/#"> Achievements </a></li>
                        <li> <a href="/#"> Projects </a> </li>
                        <li> <a href="/#"> Education </a> </li>
                        <li> <a href="/#"> Contact </a> </li>
                        <li> <a href="/#"> Resume </a> </li>
                    </ul>
                </nav>
            </header>
        </div>
    );

export default header;