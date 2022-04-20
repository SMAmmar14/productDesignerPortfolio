import React from 'react'
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import LMDCover from '../src/Components/Assets/Img/Quicker.png';
import Graph1 from '../src/Components/Assets/Img/backgroundImage.PNG';
import iPhoneCamera from '../src/Components/Assets/Img/iPhoneCamera.jpg';
import DeliveryResults from '../src/Components/Assets/Img/DeliveryResults.gif';
import DeliveriesPerHour from '../src/Components/Assets/Img/DeliveriesPerHour.gif';
import LMDHeader from '../src/Components/Assets/Img/coverphoto.png';
import LMDMultiModal from '../src/Components/Assets/Img/MultiModal.png';
import LMDPersona from '../src/Components/Assets/Img/Persona.png';
import SubwayUncle from '../src/Components/Assets/Img/PrimaryResearch.png';
import Matrix from '../src/Components/Assets/Img/matrix.png';
import Flow1 from '../src/Components/Assets/Img/UserFlow.png';
import Flow2 from '../src/Components/Assets/Img/flow2.png';
import Wireframe from '../src/Components/Assets/Img/Sketch.png';
import Hifi1 from '../src/Components/Assets/Img/Hifi1.png';
import Iteration from '../src/Components/Assets/Img/Iterations.PNG'
import assets from '../src/Components/Assets/Img/assets.png'
import Jumbotron from 'react-bootstrap/Jumbotron';
import { LinkContainer } from 'react-router-bootstrap';


const Styles = styled.div`

@media only screen and (max-width: 768px) {

  .tagHeader {
    font-size: 34px !important;
  }

  .tagStyling {
    margin-top: 12px;
  }

}





.headerJumbotronImage {
  max-width: 100%; 
  height: auto;
  margin-bottom: 20px;
}

.tagHeader{
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 38px;
  line-height: 150%;
  margin-bottom: 12px;
  color: black;
}

.tagStyling {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: black;
  margin-right: 12px;
  border-color: black;
  border-width: 1.5px;
}

.tagStyling:hover {
  background-color: white;
  font-weight: 600;
  color:#5D12FF;
  border-color: #5D12FF;
  transition: 0.2s ease-in;
}

.tagStyling:focus {
  color: white !important;
  background-color: #5D12FF!important;
  border-color: none !important;
  border-width: 1.5px !important;
  font-weight: 600;
}


.projectPicture {
    max-width: 100%;
    max-height: 500px;
}

.headerCopy {
  font-family: Open Sans, sans-serif;
  font-size: 1.9rem;
  font-weight: bold;
  line-height: 140%;
  color: black;
  
}

.subHeaderCopy{
  font-family: Open Sans, sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: black;
  text-transform: uppercase;
}

.subHeaderListCopy {
  font-family: Open Sans, sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: black;
  text-transform: uppercase;
}

.subHeaderListBodyCopy {
  font-family: Open Sans, sans-serif;
  font-size: 1.06rem;
  color: black;
  list-style-type: disc;
  line-height: 2rem;
  padding-left: 15px;

}

.subHeaderListBodyCopyExtra {
 font-family: Open Sans, sans-serif;
  font-size: 0.95rem;
  color: black;
  list-style-type: none;
  line-height: 1.6rem;
  padding-left: 0px;
}

.bodyCopy {
  font-family: Open Sans, sans-serif;
  font-size: 1.06rem;
  line-height: 26px;
  color: #202020;
}

.myRoleHeader {
  background-color: #2E2E2E;
  margin-top: 50px;
  margin-bottom: 100px;

}

 .myRoleHeaderCopy {
  font-family: Open Sans, sans-serif;
  font-size: 1.9rem;
  font-weight: bold;
  color: white;
  line-height: 140%;
  
}

.myRoleBodyCopy {
  text-decoration:none;
  font-size: 1.1rem;
  font-family: Open Sans, sans-serif;
  color: white;
  list-style-type: none;
}

.whatIDidCopy {
  font-family: Open Sans, sans-serif;
  font-size: 1.1rem;
  color: white;
  list-style-type: disc;
  line-height: 2rem;
  padding-left: 15px;

}

.projectBackgroundHeader {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.9rem;
  line-height: 140%;
  color: black;
}

.projectBackgroundSubHeader {
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 140%;
/* or 140% */

}

.projectBackgroundBody {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1.06rem;
  line-height: 140%;
  /* or 120% */
  color: #202020;
  }
  
  .metricPicture {
    max-width: 100%;
    max-height: 300px;
  }

.fieldResearchHeader {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.9rem;
  line-height: 140%;
  color: black;

}

.fieldResearchSubHeader {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 150%;
  /* identical to box height, or 33px */
  letter-spacing: 0.01em;
  color: #000000;
}


.fieldResearchBodyCopy {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1.06rem;;
  line-height: 24px;

}

.fieldResearchList {
  font-family: Open Sans, sans-serif;
  font-size: 1.06rem;
  color: black;
  list-style-type: disc;
  padding-left: 15px;
  

}

.prototypeHeader {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.9rem;
  line-height: 140%;
  color: black;
}

.usabilityHeader {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.9rem;
  line-height: 140%;
  color: black;
}

.usabilitySubHeader {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 150%;
  /* identical to box height, or 33px */
  letter-spacing: 0.01em;
  color: #000000;
}
.usabilityBodyCopy{
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1.06rem;
  line-height: 24px;

}
.usabilityList {
  font-family: Open Sans, sans-serif;
  font-size: 1.06rem;
  color: black;
  list-style-type: disc;
  padding-left: 15px;
  

}

.personaHeader {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.9rem;
  line-height: 28px;
  color: black;
}

.finalSoloutionImage {
  height:auto !important;
  max-width:100% !important;

 }


.takeawayJumbotron {
  background-color: #FFF;
  margin-top: 50px;
}

.takeawayHeaderCopy {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 140%;

}

.takeawayLine {
  border-top: 2px solid;
  color: black;
}

.takeawayListStyle {
  padding-left: 15px;
}

.takeawayListText {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1.08rem;
  line-height: 150%;
  letter-spacing: 0.015em;
  color: #000000;

}


.impactCopy {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1.15rem;
  line-height: 140%;
  /* or 120% */
  color: #202020;
}

  .nextProjectHeader {
    margin-top: 50px;
    background-color: #7A56FF;
    margin-bottom: 0px;
  }

  .nextProjectHeaderCopy {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 140%;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  .nextProjectSubHeaderCopy {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 2.55rem;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    }

    .reframedDesignQuestion {
       color: #fff;
           background-color: #2e2e2e;
           padding: 3rem;
           text-align: Center;
           border-radius: 5px;

    }

`;

export const LMD = () => (

  <Styles>

    <Container-fluid>
      <img className="headerJumbotronImage"
        alt="last mile delivery in action" src={LMDHeader} />
      <div className="mb-5"> </div>
    </Container-fluid>

    <Container>
      <Row>
        <div className="col-xl-12">
          <h1 className="tagHeader">Quicker: AssemblyF Capstone Project</h1>
        </div>
        {/*}
        <div className="col-xl-12">
          <Button className="tagStyling shadow-none" variant="outline-dark">Impact</Button>
          <Button className="tagStyling shadow-none" variant="outline-dark">Background</Button>
          <Button className="tagStyling shadow-none" variant="outline-dark">User Research</Button>
          <Button className="tagStyling shadow-none" variant="outline-dark">Prototype</Button>

        </div> */}
      </Row>
      <hr className="mt-4 solid"></hr>
    </Container>

    <Container>
      <Row className="mt-5">
        <div className="col-md-5 col-xl-5 mb-5">
          <h3 className="headerCopy">Project Overview</h3>
          <h5 className="mt-4 subHeaderCopy">Problem</h5>
          <p className="bodyCopy mb-4">More than 50% of the population in Pakistan does not use smartphones. The lower SEC class needs a way to connect with digital ecosystem without using smartphones.
          </p>
          <h5 className="subHeaderCopy"> Solution</h5>
          <p className="bodyCopy mb-4">The goal of the project was to design a KaiOS mobile feature phone application that allows the lower SEC class to order goods online without using smartphones.
          </p>
          <h5 className="subHeaderListCopy">Impact</h5>
          <ul className="subHeaderListBodyCopy">
            <li>Concept tested on<b> 4 users</b> .</li>
            <li>Task completion rate upto<b> 80%</b>.</li>

            <li>Concept liked by <b>75% tested users</b>.</li>
          </ul>
        </div>
        <div className="offset-xl-1 col-xl-6 col-md-7 col-sm-12 col-xs-12">
          <img className="projectPicture" alt="roadside assistance app" src={LMDCover} />
        </div>
      </Row>

      <Row>

        <div className='col-md-3 col-xl-3 mb-3'>
          <h3 className='subHeaderCopy'>Duration</h3>
          <ul className="subHeaderListBodyCopyExtra" >
            <li>12 Weeks</li>
            <li>Oct 2021 - Dec 2021</li>


          </ul>
        </div>

        <div className='col-md-3 col-xl-3 mb-3'>
          <h3 className='subHeaderCopy'>Project Type</h3>
          <ul className="subHeaderListBodyCopyExtra" >
            <li>AssemblyF capstone project supervised by Senior UX Researcher Creditbook</li>


          </ul>
        </div>

        <div className='col-md-3 col-xl-3 mb-3'>
          <h3 className='subHeaderCopy'>Tools Used</h3>
          <ul className="subHeaderListBodyCopyExtra" >
            <li>Google Docs</li>
            <li>Figma</li>
            <li>Figjam</li>


          </ul>
        </div>

         <div className='col-md-3 col-xl-3 mb-3'>
          <h3 className='subHeaderCopy'>Team</h3>
          <ul className="subHeaderListBodyCopyExtra" >
            <li>Capstone Project</li>
         


          </ul>
        </div>

      </Row>
    </Container>



    <Jumbotron className="myRoleHeader">
      <Container>
        <Row>
          <div className="col-md-5">
            <h3 className="myRoleHeaderCopy">My Role</h3>
            <div className="myRoleBodyCopy">
             
              <p>I as a product designer  was responsible for designing the app, realizing the vision and validating the feasibility of the concept.</p>
            </div>
          </div>
          <div className="offset-md-2 col-md-5">
            <h3 className="myRoleHeaderCopy">What I Did</h3>
            <ul className="whatIDidCopy">
              <li>Lead the product vision and strategy </li>
              <li>Lead the visual design for the entire KaiOS app. </li>
              <li>Designed UI kit</li>
              <li>Lead the user research and strategy</li>
              <li>Conducted usability testing session to check the feasibility of idea.</li>
              <li>Final Presentation to a panel of Judges</li>


            </ul>
          </div>
        </Row>
      </Container>
    </Jumbotron>





    <Container>


      <Row>
        <div className="col-12 mt-5">
          <h2 className="fieldResearchHeader">Quicker Background </h2>
        </div>
      </Row>
      <Row>
        <div className="col-xl-6 mb-5 mt-3">
          <p className="fieldResearchBodyCopy">Pakistan is an emerging mobile economy, with digital technologies beginning to transform the way people live and
            work. For a growing number of citizens, digital platforms have become the primary channel for accessing public
            and private services. However, Pakistan
            still has a sizeable ‘coverage gap’ and lags behind peers in certain areas; for example, mobile broadband6 accounts
            for less than five in 10 mobile connections. Pakistan also scored 39.8 in the GSMA’s latest Mobile Connectivity
            Index, compared to an average of 45.7 for South Asia.   </p>

          <h4 className="fieldResearchSubHeader mt-2">Key Insights:</h4>
          <ul className="fieldResearchList">
            <li>More than 50% of the populations does not own smartphones.</li>
            <li className="mt-2">Only 30% Pakistan's populations is exposed to the power of mobile internet.</li>
            <li className="mt-2">Smartphones are expensive. Data plans cost too much. The lack of digital skills and relevant apps makes them stay rather with a low cost basic phone.</li>
          </ul>
        </div>
        <div className="col-xl-6 mt-5 mb-5">
          <img className="metricPicture" alt="LMD metrics for success" src={Graph1} />
        </div>
      </Row>





    </Container>


    <Container>


      <Row>
        <div className="col-12 mt-5 ">
          <h2 className="fieldResearchHeader">The Research </h2>
        </div>


        <div className="col-xl-12 mb-5 mt-3">
          <p className="fieldResearchBodyCopy">The goal of research was to identify and understand the existing 
          problems that stop lower SEC class from adopting digital Pakistan. The research revealed that cost of smartphones are way over the budget, and due to lack of knowledge they are unable to maximize the power of smartphone. The biggest reason that proved to be a hinderance was that they had a low average income. That suggested an opportunity for introducing cheap smart feature phone that will help them harness the benefits of digital Pakistan.  </p>

        </div>
      </Row>




    </Container>




    <Container className='mt-5'>

      <Row>
        <div >
          <h2 className="fieldResearchHeader">Primary Research </h2>
        </div>
      </Row>
      <Row>
        <div className="col-xl-6 mb-5 mt-3">
          <p className="fieldResearchBodyCopy">It’s important as a designer to build empathy with our end users.
           By talking and listening to them allowed me to understand the pain why they are unable to enter the 
           digital ecosystem. Therefore, I conducted 4 1:1 qualitative user interviews to learn more about the
           user problems.
          </p>
          <h4 className="fieldResearchSubHeader mt-2">Key Pain Points:</h4>
          <ul className="fieldResearchList">
            <li>Due to lack of income there are no savings.</li>
            <li className="mt-2">Due to lack of knowledge it is difficult for them to use smartphone.</li>
            <li className="mt-2">All of the users thought in order to purchase from ecommerce
              stores you have to use credit/debit card. </li>
            <li className="mt-2">The poor law and order situation in the city forces them to keep
              a secondary phone that is a feature phone. </li>
            <li>Majority of the participants thought that online items are very
              expensive and seller sells fake items.</li>
          </ul>

        </div>

        <div className="col-xl-6 mb-5 mt-3">
          <img className=" headerJumbotronImage" alt="last mile delivery in action" src={SubwayUncle} />
        </div>

      </Row>

    </Container>




    <Container>

      <Row>
        <div className="col-12 mt-5 ">
          <h2 className="fieldResearchHeader">User Persona </h2>
        </div>


        <div className="col-xl-12 mt-3">
          <p className="fieldResearchBodyCopy">   After completing my interviews and gathering key insights. I created three
            user personas and then consolidated into one which helped me
            to better understand who are my target users and allowed me to empathize with them while designing. </p>

        </div>

        <div className="col-12">
          <img className=" headerJumbotronImage" alt="last mile delivery in action" src={LMDPersona} />
        </div>
      </Row>




    </Container>





    <Container >
      <Row>
        <div className="col-12 mt-5">
          <h2 className="fieldResearchHeader">Reframed Design Question </h2>
        </div>
      </Row>
      <Row>
        <div className="col-xl-12 mb-5 mt-3">
          <p className="fieldResearchBodyCopy">The above findings helped me further narrow down the problem statement, so I came up
            with the final design question: </p>
          <h4 className='reframedDesignQuestion'>How might we make digital eCommerce experience accessible
            for a lower SEC class Pakistani, So that they can purchase
            goods online without using smartphones
          </h4>

        </div>
      </Row>


    </Container>






    <Container>

      <Row>
        <div >
          <h2 className="fieldResearchHeader">Ideation </h2>
        </div>
      </Row>
      <Row>
        <div className="col-xl-6 mb-5 mt-3">
          <p className="fieldResearchBodyCopy">The idea behind this design was to build a experience
            that makes the online shopping more accessible, and more interactive to the lower SEC class.
          </p>


        </div>

        <div className="col-xl-6 mb-5 mt-3">
          <img className=" headerJumbotronImage" alt="last mile delivery in action" src={Matrix} />
        </div>

      </Row>

    </Container>









    <Container>

      <Row>
        <div className="col-12 mt-5 ">
          <h2 className="fieldResearchHeader">User Flow </h2>
        </div>


        <div className="col-xl-12 mt-3">
          <p className="fieldResearchBodyCopy">  After completing my interviews and gathering key insights. I created three user personas and then consolidated
            into one which helped me to better understand who are my target users and allowed me to empathize with them while
            designing. </p>

        </div>

        <div className="col-12">
          <img className="mt-3 headerJumbotronImage" alt="last mile delivery in action" src={Flow1} />

        </div>
      </Row>




    </Container>




    <Container>

      <Row>
        <div className="col-12 mt-5 ">
          <h2 className="fieldResearchHeader">Design Solution </h2>
        </div>


        <div className="col-xl-12 mt-3">
          <p className="fieldResearchBodyCopy"> Using the structure of the user flow, I drew out sketches of the app's main features first on
            paper. For best approval, I drew multiple sketches of each screen and later based on these sketches made some digital wireframes </p>

        </div>

        <div className="col-12">
          <img className="mt-3 headerJumbotronImage" alt="last mile delivery in action" src={Wireframe} />

        </div>

        <div className="col-xl-12 mt-3">
          <p className="fieldResearchBodyCopy"> I made some prototypes and ran two usability testings.
            The goal was to get feedback on the concept.</p>
        </div>

        <div className="col-12">
          <img className="mt-3 headerJumbotronImage" alt="last mile delivery in action" src={Iteration} />

        </div>

        <div className="col-6 mt-3 ">
          <h3 >What I Learn:</h3>

          <ul className="fieldResearchList">
            <li>Users were unable to understand majority of the content because it was in english and there was a major
              language barrier
            </li>
            <li className="mt-2">Feature of “View Cart” seems disconnected.
              Most users did not realize the importance of feature </li>
            <li className="mt-2">Users were unable to relate with the images used on the cards. </li>
            <li className="mt-2">Major accessibility issues were spotted by users on CTAs and cards.</li>

          </ul>
        </div>

        <div className="col-6 mt-3 ">
          <h3 >According to the feedback:</h3>

          <ul className="fieldResearchList">
            <li>I introduced Roman Urdu to reduce language barrier</li>
            <li className="mt-2">Added a Cart Icon with  View Cart text to improve the connection </li>
            <li className="mt-2">Instead of images switched to illustrations that could relate to target audience </li>
            <li className="mt-2">Everything was then run under WCAG rules to fix the accessibility issues </li>

          </ul>
        </div>


        <div className="col-12 mt-3 ">
          <h3 >HiFi Iteration:</h3>

          <p>I went through a final round of user testing with high fidelity prototypes, and created iteration.
            The goal was to get feedback on app usability and make sure the visual elements were meeting WCAG standard.
            Therefore I created the final prototype summing up my testing and findings.
          </p>
        </div>


      </Row>

    </Container>




    <Container>
      <a id="prototype">
        <Row>
          <div className="col-12 mt-3">
            <h1 className="prototypeHeader">Prototype</h1>
          </div>
        </Row>
        <Row>
          <div className="col-12 mt-3 mb-4">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} src="https://xd.adobe.com/embed/13e59caa-3ff1-483c-a3c1-5b93603ff68f-46b6/?fullscreen" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>

          <div className="col-12">
            <img className="mt-3 headerJumbotronImage" alt="last mile delivery in action" src={assets} />

          </div>
        </Row>
      </a>


    </Container>

    <Jumbotron className="takeawayJumbotron">
      <Container>
        <Row>
          <div className="col-lg-6 md-12">
            <h3 className="takeawayHeaderCopy">Reflection as a designer</h3>
          </div>
        </Row>
        <Row>
          <div className="col-lg-4 col-md-4">
            <hr className="takeawayLine mt-2 mb-4"></hr>
          </div>
        </Row>
        <Row>
          <div className="col-lg-8 col-12">
            <ul className="takeawayListStyle">
              <li className="takeawayListText mt-2">As a designer, I tried to help lower SEC class understand
                the power of ecommerce in real life through the design.
              </li>
              <li className="takeawayListText mt-3">The purpose of Quicker is to enable lower SEC class enjoy the power of
                digital ecommerce and make their lives better via using smart feature phones.
              </li>
              <li className="takeawayListText mt-3">This was my first time working on a KaiOS application and it was really
                difficult to design for extremely small screen.
              </li>

            </ul>
          </div>
        </Row>
      </Container>
    </Jumbotron>













    {/* 

    <Container>
      <Row>
        <div className="col-12 mt-5">
          <h2 className="fieldResearchHeader">Case study construction in Progress 🏗️ </h2>
        </div>
      </Row>
    </Container>
 
        <Container>
        <a id="pandemic">
        <Row>
          <div className="col-12 mt-5">
          <h2 className = "fieldResearchHeader">The Pandemic Changing Delivery </h2>
          </div>
          </Row>
          <Row>
          <div className="col-xl-12 mb-5 mt-3">
            <h4 className = "fieldResearchSubHeader">Contact Free Delivery</h4>
            <p className="fieldResearchBodyCopy">
              COVID has changed the delivery world completly. The way we deliver parcels has changed to limit as much contact as possible with customers.
            </p>
            <h4 className="fieldResearchSubHeader">Key Changes To The App</h4>
            <ul className="fieldResearchList">
              <li>Taking pictures for every delivery instead of signatures</li>
              <li className="mt-2">Sending emails instead of calling cards</li>
              <li className="mt-2">Leaving parcles at the door step instead of handing them over.</li>
            </ul>
          </div>
          <div className="col-xl-12 ml-4 mt-3 mb-5">
          <img className = "projectPicture" alt ="LMD metrics for success" src={iPhoneCamera} />
          </div>
          </Row>
        </a>
          <Row>
          <div className="col">
           <h3 className="headerCopy mt-5 mb-3">Showcasing Impact</h3>
           <p className="impactCopy">To see how well the delivery pilot is going it's important to reflect on the data and stats of the pilot, to see how well things have improved. As months went on a lot of teething operation and app issues got solved, which allowed us to eventually reach our targets.  
           </p>

         </div>
         </Row>
        
         <Row className="mb-5">
         <div className="col-12">
         <img loading="lazy" className="finalSoloutionImage" alt ="Final soloution" src={DeliveriesPerHour} />
         </div>
         </Row>

        <Row className="mb-5">
         <div className="col-12">
         <img loading="lazy" className="finalSoloutionImage" alt ="Final soloution" src={DeliveryResults} />
         </div>
         </Row>

    </Container>

  

 {/* 
   

   <Jumbotron className="nextProjectHeader">
      <Container>
        <Row>

          <div className="col-lg-6 md-12">
            <h3 className="nextProjectHeaderCopy">Next Project</h3>
          </div>
        </Row>
        <Row>
          <div className="col-lg-6 col-12">
            <p className="nextProjectSubHeaderCopy">FordPass</p>
          </div>
        </Row>
        <Row>
          <div className="col-12">
            <LinkContainer to="/RSA">
              <Button className="buttonStyling" variant="outline-light">View Project</Button>
            </LinkContainer>
          </div>
        </Row>
      </Container>
    </Jumbotron>


  */}
  </Styles>
)