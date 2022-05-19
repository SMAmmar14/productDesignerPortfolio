import React from 'react';
import styled from 'styled-components';
import { Figma } from 'react-feather';
import { Mail } from 'react-feather';
import { Twitter } from 'react-feather';
import { NavLink } from 'react-router-dom';


const Styles = styled.div`


 @media only screen and (max-width: 768px) { 

    .copyrightText {

        text-align: center !important;

    }


 }


    .footerStyle {
        background-color: #F7F7F7;
        padding-top: 40px;
    }

    
    .footerHeader {
        color: #202020;
        font-family: 'Playfair Display', sans-serif; 
        font-weight:900;
        font-size: 1.4rem;
    }

    .footerSubHeader {
        font-family: Open Sans,sans-serif;
        font-size: 0.9rem;
        letter-spacing: 0.01em
    }

    .footerList {
        list-style-type: none;

    }
    .footerList a {
        font-family: Open Sans,sans-serif;
        font-size: 0.9rem;
        color: #333333 !important;
    }

    .footerList a:hover {
        text-decoration: underline;
        text-decoration-thickness: 1.5px;
        text-underline-offset: 0.5em;
        color: black !important;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
        -webkit-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
    }


    .footerBrowsingHeader {
        font-family: Roboto Mono, sans-serif;
        font-size: 1.1rem;
        text-transform: uppercase;
        
    }

    .copyrightText {
        font-family: Open-Sans, sans-serif;
        font-size: 0.75rem;
        color: #666666;
        text-align: right;
    }

    .copyrightText a {
        color:#6400EF;
    }

    .copyrightText a:hover {
        text-decoration: underline;
        text-decoration-thickness: 1.5px;
        text-underline-offset: 0.25em;
    }


    ul {
        padding: 0;
        margin: 0;
        }

 `;

export const Footer = () => (
    <Styles>
        <footer className="footerStyle">
            <div className="container">
                <div className="row footerPadding">
                    <div className="col-md-4">
                        <h1 className="footerHeader">Syed Mohammad Ammar</h1>
                        <p className="footerSubHeader text-justify"> Product designer at CAKE based in California.</p>

                        <ul className="footerList">
                            <li className="listStyle mb-2"><Mail strokeWidth="1.5" color="#333333" size={20}></Mail> <a href="mailto:furquan101@gmail.com">Email me</a></li>
                            <li className="mb-4"> <Twitter strokeWidth="1.5" color="#333333" size={20}></Twitter> <a href="https://twitter.com/Ammar110_SM" target="_blank" rel="noopener noreferrer">@SMAmmar5</a></li>
                        </ul>
                    </div>
                    <div className="offset-md-1 col-xs-6 col-md-2">
                        <h2 className="footerBrowsingHeader">Keep Browsing</h2>
                        <ul className="footerList">
                            <li className="mb-1">
                                <NavLink to="/">Portfolio</NavLink>
                            </li>
                            <li className="mb-1"><a rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1UUCJFGy4PfRNyDBAznIysqwonIi0wWax/view?usp=sharing">Resume</a></li>
                            <li className="mb-1"><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/syed-mohammad-ammar-053877145/">LinkedIn</a></li>
                            <li className="mb-1"><a rel="noopener noreferrer" target="_blank" href="https://dribbble.com/SMAmmar14">Dribbble</a></li>



                            <li className="mb-1">
                                <NavLink to="/About">About</NavLink>
                            </li>

                        </ul>
                    </div>

                </div>
                <hr />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className="copyrightText">Copyright © {new Date().getFullYear()} Syed Mohammad Ammar.&nbsp;
                            <a rel="noopener noreferrer" target="_blank" href="https://github.com/SMAmmar14">Developed by SMAmmar .</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </Styles>
)