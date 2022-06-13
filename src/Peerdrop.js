import React from 'react'
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';

import Row from 'react-bootstrap/Row';
import LMDCover from '../src/Components/Assets/Img/Quicker.png';
import Graph1 from '../src/Components/Assets/Img/graph.png';
import iPhoneCamera from '../src/Components/Assets/Img/iPhoneCamera.jpg';
import DeliveryResults from '../src/Components/Assets/Img/DeliveryResults.gif';
import DeliveriesPerHour from '../src/Components/Assets/Img/DeliveriesPerHour.gif';
import LMDHeader from '../src/Components/Assets/Img/Cover.png';
import LMDMultiModal from '../src/Components/Assets/Img/MultiModal.png';
import LMDPersona from '../src/Components/Assets/Img/Persona.png';
import DTProcess from '../src/Components/Assets/Img/DTprocess.png';
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
  font-family: 'Chivo', sans-serif;  font-style: normal;
  font-weight: 900;
  font-size: 3rem;
  line-height: 150%;
  margin-bottom: 12px;
  color: #2E2E2E;
}

.hmw{
    font-family: 'Chivo', sans-serif;  font-style: normal;
  font-weight: 900;
  font-size: 3rem;
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
font-family: 'Chivo', sans-serif;  font-style: normal;
  font-weight: 900;
    font-size: 2rem;
  line-height: 140%;
  color: #2E2E2E;
  
}

.subHeaderCopy{
 font-family: 'Chivo', sans-serif;  font-style: normal;
  font-weight: 700;
    font-size: 1.5rem;
  color: #2E2E2E;

}

.myRoleHeaderCopy{
 font-family: 'Chivo', sans-serif;  font-style: normal;
  font-weight: 700;
    font-size: 2rem;
  color: #fff;

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
  font-size: 1rem;
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
  background-color: #008060;
  margin-top: 50px;
  margin-bottom: 100px;

}



.myRoleBodyCopy {
  text-decoration:none;
  font-size: 1rem;
  font-family: Open Sans, sans-serif;
  color: white;
  list-style-type: none;
}

.whatIDidCopy {
  font-family: Open Sans, sans-serif;
  font-size: 1rem;
  color: white;
  list-style-type: disc;
  line-height: 2rem;
  padding-left: 15px;
}

.whatIDidCopyInsights {
  font-family: Open Sans, sans-serif;
  font-size: 1rem;
  color: black;
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

export const PD = () => (

  <Styles>

    <Container-fluid>
      <img className="headerJumbotronImage"
        alt="last mile delivery in action" src={LMDHeader} />
      <div className="mb-5"> </div>
    </Container-fluid>

    <Container>
      <Row>
        <div className="col-xl-12">
          <h1 className="tagHeader">Building an enjoyable dog walking lifestyle to make your dog healthy and happy.
          </h1>
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
      <h3 className="headerCopy">Project Overview</h3>

      <Row className="mt-3">
        <Row>
          <div className="col-md-5 mt-3 ml-3 mr-2 ">
            <h5 className="mt-4 subHeaderCopy">Problem</h5>
            <p className="bodyCopy mb-4 ">Dog parents feel unmotivated to walk their dogs every day
              especially when they are busy at work. Hiring dog walkers is a common solution, but they feel expansive
              to hire dog walkers and feel unsafe letting strangers come into their house. Lack of exercise has led to
              behavior problems and health problems in dogs. </p>
          </div>

          <div className="col-md-5 mt-3 ml-3 mr-2 ">
            <h5 className="mt-4 subHeaderCopy">Solution</h5>
            <p className="bodyCopy mb-4 ">The goal of the project was to design a KaiOS mobile feature phone
              application that allows the lower SEC class to order goods online without using smartphones.
            </p>
          </div>
        </Row>


      </Row>

      <Row className='mt-3 listers'>

        <div className='col-md-3 col-xl-3 '>
          <h3 className='subHeaderCopy'>Duration</h3>
          <ul className="subHeaderListBodyCopyExtra" >
            <li>4 Weeks</li>
            <li>Apr 2022 - May 2022</li>
          </ul>
        </div>

        <div className='col-md-3 col-xl-3 '>
          <h3 className='subHeaderCopy'>Project Type</h3>
          <ul className="subHeaderListBodyCopyExtra" >
            <li>Dribbble Product Design capstone project supervised by Head of Design Headways</li>
          </ul>
        </div>

        <div className='col-md-3 col-xl-3 '>
          <h3 className='subHeaderCopy'>Tools Used</h3>
          <ul className="subHeaderListBodyCopyExtra" >
            <li>Google Docs</li>
            <li>Figma</li>
            <li>Figjam</li>
          </ul>
        </div>

        <div className='col-md-3 col-xl-3 '>
          <h3 className='subHeaderCopy'>Team</h3>
          <ul className="subHeaderListBodyCopyExtra" >
            <li>Personal Project</li>
          </ul>
        </div>

      </Row>


    </Container>



    <Jumbotron className="myRoleHeader">
      <Container>

        <Row>
          <div className="col-md-6">
            <h3 className="myRoleHeaderCopy">My Role</h3>
            <div className="myRoleBodyCopy">

              <p>I as a product designer  was responsible for designing the app, realizing the vision and validating the feasibility of the concept.</p>
            </div>
          </div>
          <div className="  col-md-6">
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


    <Container className='mt-5'>

      <Row>

        <div className='col-md-6 '>
          <h3 className='subHeaderCopy'>Background</h3>

          <p className='bodyCopy  text-justify'>
            Pakistan is an emerging mobile economy, with digital technologies beginning to transform the way people live and work. For a growing  number of citizens, digital platforms have become the primary channel for
            accessing public and private services. However, Pakistan still has a sizeable ‘coverage gap’ and lags behind peers in certain areas; for example, mobile broadbands accounts for less than five in 10 mobile connections.
            Pakistan also scored 39.8 in the GSMA’s latest Mobile Connectivity Index, compared to an average of 45.7 for South Asia.
          </p>



        </div>

        <div className='col-md-6 '>
          <img className="metricPicture" alt="LMD metrics for success" src={Graph1} />

        </div>

      </Row>

      <h3 className='subHeaderCopy mt-3'>Key Insights</h3>

      <Row className='mt-3'>


        <div className='col-md-4'>
          <Card >
            <Card.Body>
              <Card.Text>
                More than 50% of the population does not own smartphones.

              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className='col-md-4'>
          <Card  >
            <Card.Body>
              <Card.Text>
                Only 30% Pakistan's population is exposed to the power of mobile internet.

              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className='col-md-4'>
          <Card  >
            <Card.Body>
              <Card.Text>
                Smartphones are expensive and data plans cost too much
              </Card.Text>
            </Card.Body>
          </Card>
        </div>



      </Row>
    </Container>




    <Container className='mt-5'>

      <Row>
        <div className="col-md-12  ">
          <h2 className="subHeaderCopy">Research Goal </h2>
        </div>


        <div className="col-md-12  ">
          <p className="bodyCopy ">The goal of research was to identify and understand the existing
            problems that stop lower SEC class from adopting digital Pakistan. The research revealed that cost of smartphones are way over the budget, and due to lack of knowledge they are unable to maximize the power of smartphone. The biggest reason that proved to be a hinderance was that they had a low average income. That suggested an opportunity for introducing cheap smart feature phone that will help them harness the benefits of digital Pakistan.  </p>

        </div>
      </Row>

    </Container>

    <Container className='mt-5'>

      <Row>
        <div className="col-md-12  ">
          <h2 className="subHeaderCopy">The Process </h2>
        </div>


        <div className="col-md-12">
          <img className=" headerJumbotronImage" alt="last mile delivery in action" src={DTProcess} />
        </div>
      </Row>

    </Container>



    <Container className='mt-5'>

      <Row>

        <div className='col-md-6 '>
          <h3 className='subHeaderCopy'>Primary Research</h3>

          <p className='bodyCopy  text-justify '>
            It’s important as a designer to build empathy with our end users.
            By talking and listening to them allowed me to understand the pain why they are unable to enter the
            digital ecosystem. Therefore, I conducted 4 1:1 qualitative user interviews to learn more about the
            user problems.
          </p>



        </div>

        <div className='col-md-6 '>
          <img className="metricPicture" alt="LMD metrics for success" src={SubwayUncle} />

        </div>

      </Row>

      <h3 className='subHeaderCopy mt-3'>Pain Points</h3>

      <Row className='mt-3'>


        <div className='col-md-4'>
          <Card border="danger" >
            <Card.Header><b>No Savings</b></Card.Header>
            <Card.Body>
              <Card.Text>
                Due to lack of income
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className='col-md-4'>
          <Card border="danger" >
            <Card.Header><b>Difficulty in using Smartphone</b></Card.Header>
            <Card.Body>
              <Card.Text>
                Due to lack of knowledge/awareness
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className='col-md-4'>
          <Card border="danger" >
            <Card.Header><b>No usage of online shopping</b></Card.Header>
            <Card.Body>
              <Card.Text>
                Users thought that they need card to buy
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className='col-md-4 mt-3'>
          <Card border="danger" >
            <Card.Header><b>Unable to keep smartphone</b></Card.Header>
            <Card.Body>
              <Card.Text>
                Due to poor law and order situation
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className='col-md-4 mt-3'>
          <Card border="danger" >
            <Card.Header><b>Fake and Expensive Items</b></Card.Header>
            <Card.Body>
              <Card.Text>
                Users bias based on previous experience
              </Card.Text>
            </Card.Body>
          </Card>
        </div>






      </Row>
    </Container>



    <Container className='mt-5'>

      <Row>
        <div className="col-md-12  ">
          <h2 className="subHeaderCopy">User Persona </h2>
        </div>

        <div className="col-md-12  ">
          <p className="bodyCopy ">To synthesize my findings and empathize with my interviewees, I created a persona based on the insights gained in the interview stage. The persona allowed me to combine the pain points into
            a distinct use case which helped me to confidently ideate better solutions.
          </p>
        </div>


        <div className="col-md-12">
          <img className=" headerJumbotronImage" alt="last mile delivery in action" src={LMDPersona} />
        </div>
      </Row>

    </Container>




    <Container className='mt-5'>

      <Row>
        <div className="col-md-12  ">
          <h2 className="subHeaderCopy">Reframed Design Question </h2>
        </div>

        <div className="col-md-12  ">
          <p className="bodyCopy ">The above findings helped us further narrow down our problem statement,
            so we came up with our final design question:
          </p>
          <Card className="text-center hmw" bg="dark" text="light">
            <Card.Body>
              <Card.Title>How might we make digital eCommerce experience accessible
                for a lower SEC class Pakistani, So that they can purchase
                goods online without using smartphones</Card.Title>

            </Card.Body>
          </Card>
        </div>



      </Row>

    </Container>




    <Container className='mt-5'>

      <Row>
        <div className="col-md-12  ">
          <h2 className="subHeaderCopy">Ideation </h2>
        </div>

        <Card>
          <Card.Body>
            <Card.Text >
              The idea behind this design was to build a experience that makes the online shopping more accessible, and more interactive to the lower SEC class. Therefore I reached out to two users and asked them to vote the best idea. By using priority matrix I was able to finalize the idea.
            </Card.Text>
          </Card.Body>
          <Card.Img variant="bottom" className=" headerJumbotronImage center" alt="last mile delivery in action" src={Matrix} />

        </Card>
      </Row>

    </Container>



    <Container className='mt-5'>

      <Row>
        <div className="col-md-12  ">
          <h2 className="subHeaderCopy">User Flow </h2>
        </div>

        <Card>
          <Card.Body>
            <Card.Text >
              I created some key user flow maps in order to evaluate and optimize the user experience of
              purchasing an item, and tracking a order.
            </Card.Text>
          </Card.Body>
          <Card.Img variant="bottom" className=" headerJumbotronImage center" alt="last mile delivery in action" src={Flow1} />

        </Card>
      </Row>

    </Container>




    <Container className='mt-5'>

      <Row>
        <h3 className="headerCopy mb-5">Designing Solution</h3>

        <div className="col-md-12  ">
          <h2 className="subHeaderCopy">Low Fidelity </h2>
        </div>

        <Card>
          <Card.Body>
            <Card.Text >
              Before embarking onto preliminary user testing and high fidelity mockups,
              I brainstormed on potential UI designs, illustrating wireframes to get a feel for the app and its core features.

            </Card.Text>
          </Card.Body>
          <Card.Img variant="bottom" className=" headerJumbotronImage center" alt="last mile delivery in action" src={Wireframe} />

        </Card>
      </Row>

    </Container>



    <Container className='mt-5'>

      <Row>

        <div className="col-md-12  ">
          <h2 className="subHeaderCopy">High Fidelity </h2>
        </div>

        <Card>
          <Card.Body>
            <Card.Text >
              With this flow in mind, I went on to create the digitalized high-fidelity mockups on AdobexD.
              I skipped mid-fidelity because my persona were not tech savy and I didn't want to overwhelm them.
              I conducted usability testing on 4 users

            </Card.Text>
          </Card.Body>
          <Card.Img variant="bottom" className=" headerJumbotronImage center" alt="last mile delivery in action" src={Iteration} />

        </Card>
      </Row>

    </Container>






    <Container className='mt-5'>


      <h3 className='subHeaderCopy mt-3'>Usability Testing Findings</h3>

      <Row className='mt-3'>


        <div className='col-md-6'>
          <Card  >
            <Card.Header><b>What I Learn</b></Card.Header>
            <Card.Body>
              <Card.Text>
                <ul className="whatIDidCopyInsights">
                  <li>Users were unable to understand majority of the content because it was in
                    english and there was a major language barrier
                  </li>
                  <li>Users were unable to relate with the images used on the cards.
                  </li>
                  <li>Major accessibility issues were spotted by users on CTAs and cards.
                  </li>



                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className='col-md-6'>
          <Card >
            <Card.Header><b>According to the feedback</b></Card.Header>
            <Card.Body>
              <Card.Text>
                <ul className="whatIDidCopyInsights">
                  <li>I introduced Roman Urdu to reduce language barrier
                  </li>
                  <li>Instead of images switched to illustrations that could relate to target audience
                  </li>
                  <li>Everything was then run under WCAG rules to fix the accessibility issues
                  </li>



                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>







      </Row>
    </Container>


    <Container className='mt-5'>

      <Row>
        <h3 className="headerCopy">Final Solution</h3>

        <p className="bodyCopy ">Based on the results, I fixed the accessability issues finalized on the final design. With these
          design decisions in place, I was ready to create the full prototype.
        </p>

      </Row>

      <Row>
        <div className="col-md-12">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} src="https://xd.adobe.com/embed/13e59caa-3ff1-483c-a3c1-5b93603ff68f-46b6/?fullscreen" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>

        <div className="col-12">
          <img className="mt-3 headerJumbotronImage" alt="last mile delivery in action" src={assets} />

        </div>
      </Row>
    </Container>



    <Jumbotron className="takeawayJumbotron">
      <Container>
        <Row>
          <div className="col-lg-6 md-12">
            <h3 className="headerCopy">Reflection as a designer</h3>
          </div>
        </Row>
        <Row>
          <div className="col-lg-4 col-md-4">
            <hr className="takeawayLine mt-2 mb-4"></hr>
          </div>
        </Row>
        <Row>
          <div className="col-lg-12 col-12">
            <ul className="takeawayListStyle">
              <li className="takeawayListText mt-2">Creating an app from scratch as a designer is super rewarding. I got the experience to compile research, conduct interaction testing, and craft high-fidelity interfaces. Through the process, I realized a great product needs to be
                buttressed by qualitative data, clear user flow, and lots of user feedback.
              </li>
              <li className="takeawayListText mt-3">The purpose of Quicker is to enable lower SEC class enjoy the power of
                digital ecommerce and make their lives better via using smart feature phones.
              </li>
              <li className="takeawayListText mt-3">This was my first time working on a KaiOS application and it was really
                fun to design experience for such small screens.
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