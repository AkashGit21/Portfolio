import React from 'react';
import classes from './Header.css';
import {NavLink} from 'react-router-dom';

const header = () => (
        <div className={classes.Header}>
            <header>
                <nav >
                    <ul >
                        <li className={classes.Logo}> 
                            <NavLink to={{
                                pathname: "/",
                            }}> Logo </NavLink> </li>
                        <li><NavLink to= {{
                            pathname: "/about",
                            hash: '#about'
                            }}> About Me </NavLink></li>
                        <li> <NavLink to={{
                            pathname: "/activities",
                            hash: '#about'
                            }}> Activities </NavLink></li>
                        <li> <NavLink to={{
                            pathname: "/projects",
                            hash: '#about'
                            }}> Projects </NavLink> </li>
                        <li> <NavLink to={{
                            pathname: "/education",
                            hash: '#about'
                            }}> Education </NavLink> </li>
                        <li> <NavLink to={{
                            pathname: "/contact",
                            hash: '#about'
                            }}> Contact </NavLink> </li>
                        <li> <NavLink to="/Resume"> Resume </NavLink> </li>
                    </ul>
                </nav>
            </header>
        </div>
    );

export default header;