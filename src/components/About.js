import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 4rem;
    margin-top: 13rem;
    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      margin-top: 10rem;
    }
`;

const ImgBackground = styled.div`
    margin-right: 10rem;
    border-radius: 360px;
    color: #DCE8FF;
    @media (max-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;

const SolutionWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const AboutHeader = styled.h1`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    color: #0d0e10;
    text-align: center;
`;

const AboutPara = styled.div`
    text-align: center;
`;

const ParaDetails = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 30px;
   color: #3f4451;
   @media (max-width: 600px) {
       font-size: 20px;
   }
`;

function About() {
    return (
        <AboutWrapper>
            <Zoom><ImgBackground>
                <img src='About.png' alt='me' />
            </ImgBackground></Zoom>
            <SolutionWrapper>
                <Fade bottom><AboutHeader>About Jesse</AboutHeader></Fade>
                <AboutPara>
                    <Fade bottom><ParaDetails>Jesse is a Front-End developer with 3+ years of
                        experience, Jesse has gone through a lot
                        of learning curves and learning loops but now he
                        is ready to conquer this field. He has mastered top
                        skills such as HTML, CSS, javascript, Reactjs,
                        styled-components and still learning more to craft
                        amazing websites and web applications.</ParaDetails></Fade>
                </AboutPara>
            </SolutionWrapper>
        </AboutWrapper>
    )
}
export default About;