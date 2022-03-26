import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {BigCard} from './Components/BigCard';
import fordPass from '../src/Components/Assets/Img/Fordpass.jpg';
import FordPassCoPilot from '../src/Components/Assets/Img/FordPassCoPilot.jpg';
import FPPCover from '../src/Components/Assets/Img/FPPCover.jpg';
import fordLogo from '../src/Components/Assets/Img/FordLogo.svg';
import FPPLogo from '../src/Components/Assets/Img/FPPLogo.svg';
import rsa from '../src/Components/Assets/Img/RSA.jpg';
import Journeys from '../src/Components/Assets/Img/Journeys.jpg';
import LMD from '../src/Components/Assets/Img/LMD.jpg';
import LMDLogo from '../src/Components/Assets/Img/assemblyf.jpg';
import FPPBuilder from  '../src/Components/Assets/Img/FPPBuilder.jpg';
import {NewsletterFooter} from './Components/NewsletterFooter';
import './App.css';

const Styles = styled.div`


@media only screen and (max-width: 768px) {
    .headerStyling {
        font-size: 8vw !important;
        line-height: 1.2em !important;
        margin-left: 2rem !important;
        margin-right: 2rem !important;
        padding: 0;

    }

   
}


.headerSpacing {
  padding-top: 3.5rem;
        
    }
    .headerStyling {
        color: #202020;
        font-family: 'Playfair Display', sans-serif; 
        font-size:  3rem;
        font-weight: 700;
        line-height: 1.2em;
    }

    
 .contactJumbotron {
    margin-top: 100px;
    background-color: #9665FF;
    margin-bottom: 0px;

 }

 
 .contactHeader {
     font-family: Open Sans, sans-serif;
     font-weight: bold;
     font-size: 2.1rem;
     color: white;
 }

 .contactLine {
     height: 2px;
     background-color: white;
     border-radius: 10px;
 }

 .contactText {
     font-family: Open Sans, sans-serif;
     font-size: 1.1rem;
     color: white;
 }

    `;



export const Home = () => (

<Styles>

<Container className="align-content-center">
<div className = "headerSpacing"/>
 <Row>  
   <Col>
    <h1 className="headerStyling mb-2">
    I’m a digital product designer, inspired by accessibility, culture and community.
    </h1>
    </Col>
 </Row>

 <Row> 
  <Col className ="mt-5">
  <BigCard 
    imgProjectLogo={LMDLogo}
    imgCardLarge={LMD}
    cardTitleName = {"Quicker a AssemblyF Capstone Project"}
    cardBodyText = {"Last Mile Delivery is a new urban multi modal delivery network. In this project we scale a delivery network 10X, reduce congestion by 166%, increase deliveries per hour by 160%. All during a pandemic. "}
    cardLink = {"/LMD"}
   />
   </Col>
 </Row>

 <Row> 
  <Col>
  <BigCard 
    imgProjectLogo={fordLogo}
    imgCardLarge={fordPass}
    cardTitleName = {"Designing a smart, live, digital breakdown experience."}
    cardBodyText = {"When you break down in your vehicle, your left in the cold about  what's going on. We changed this static experience to be completely digital for over 9 million FordPass users, in the Digital RSA project."}
    cardLink = {"/RSA"}
    />
   </Col>
 </Row>

 <Row> 
  <Col>
  <BigCard 
    imgProjectLogo={FPPLogo}
    imgCardLarge= {FPPBuilder}
    cardTitleName = {"Managing your fleet health and security remotely."}
    cardBodyText = {"The FordPass Pro project is about helping fleet managers to manage the health and maintenace of their Ford vehicles on the move. Allowing them to be more proactive when it comes to vehicle maintenace."}
    cardLink = {"/FordPassPro"}
    />
   </Col>
 </Row>


 <Row> 
  <Col>
    <BigCard 
    imgProjectLogo={fordLogo}
    imgCardLarge={Journeys}
    cardLink={"/RSA"}
    cardTitleName = {"Putting your live vehicle data into your hands."}
    cardBodyText = {"The FordPass Digital CoPilot project was about increasing user engagement on the app using live vehicle data. We designed new features such as  journey histories, fuel reports and mileage milestones. The features increased monthly engagement by 135%."}
    cardLink = {"/404"}
    />
   </Col>
 </Row>

</Container>

   <Jumbotron className="contactJumbotron">
        <Container>
            <Row>
            
            <div className="col-lg-6 md-12">
              <h3 className ="contactHeader">Say hello.</h3>
              </div>
            </Row>
                <Row>
                  <div className="col-lg-4 col-md-4">
                     <hr className="contactLine mt-2 mb-4"></hr>
                  </div>
                </Row>
                <Row>
                <div className="col-lg-6 col-12">
                    <p className="contactText">I'm always interested in new ideas, opportunities or hearing what you're working on, so drop a message and say hello.</p>
                </div>
                </Row> 
                <Row>
                <div className="col-lg-6 col-12">
                    <Button href="mailto:syed.m.ammar@hotmail.com" className = "buttonStyling" variant="outline-light">Say hello</Button>
                </div>
                </Row>
        </Container>
        </Jumbotron>
</Styles>

)