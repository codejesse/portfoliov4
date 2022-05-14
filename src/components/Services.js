import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const ServicesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    margin-top: 10rem;
    width: 90%;
    height: 575px;
    background: #FFEEDE;
    background-image: url("servicesbg.png");
    background-repeat: no-repeat;
    background-position: right;
    background-position-y: -7rem;
    @media (max-width: 768px) {
      width: 100%;
      flex-direction: column;
    }
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    background-color: white;
    width: 23%;
    height: 23rem;
    padding: 1rem;
    box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.04);
    border-radius: 20px;
    @media(max-width: 768px) {
      width: 90%;
      height: auto;
      margin-bottom: 1rem;
    }
`;

const LogoPosition = styled.div`
   margin: auto;
`;

const ServicesPara = styled.div`
  text-align: center;
  margin: auto;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 17.5px;
  color: #3f4451;
`;

const ServicesHeading = styled.div`
  text-align: center;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  color: #0d0e10;
  font-size: 16px;
`;


function Services() {
  return (
    <ServicesWrapper>
      <Card>
        <LogoPosition>
          <img width="80px" height="80px" src='figma.png' alt='icon' />
        </LogoPosition><ServicesHeading><h1>UI design</h1></ServicesHeading>
        <ServicesPara>Learning the
          fundamentals of UI design
          has made me a better developer,
          i am able to work well with any design
          team to translate mockups to code while paying attention to details. </ServicesPara>
      </Card>
      <Card>
        <LogoPosition>
          <img width="80px" height="80px" src='Coding.png' alt='icon' />
        </LogoPosition>
        <ServicesHeading><h1>Web development</h1></ServicesHeading>
        <ServicesPara>This has been the heartbeat
          of my programming career this is what i
          started with, with this i create websites
          and web applications that scale
          with top tier skills and tools.</ServicesPara>
      </Card>
      <Card>
        <LogoPosition>
          <img width="80px" height="80px" src='Thinking.png' alt='icon' />
        </LogoPosition>
        <ServicesHeading><h1>Problem solving</h1></ServicesHeading>
        <ServicesPara>Problem solving and brainstorming
          lasting solutions for web-based projects is my
          priority for any project i work on providing lasting
          solutions for the project.</ServicesPara>
      </Card>
    </ServicesWrapper>
  )
}
export default Services;