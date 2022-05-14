import "../App.css";
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const UnorderedList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 2rem;
  padding: 0;
  overflow: hidden;
  width: auto;
  background-color: none;
  background: none;
  @media (max-width: 600px) {
      margin: auto;
    }
`;

const EmailWrapper = styled.div`
   display: flex;
   flex-direction: row;
   margin-left: 1rem;
   font-family: 'Open Sans';
   font-style: normal;
    font-weight: 600;
    font-size: 20px;
    width: 25%;
    & a {
        text-decoration: none;
        color: black
    }
    &:hover {
        text-decoration: underline;
    }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  @media (max-width: 600px) {
      display: none;
  }
`;

const ListWrapper = styled.div`
   display: flex;
   justify-content: center;
   @media (max-width: 768px) {
       display: none;
   }
`;

const List = styled.li`
   & a{
    display: block;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    color: black;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
   }
   & a:hover{
       text-decoration: underline;
   }
`;



function Navbar() {
    return (
        <UnorderedList>
            <EmailWrapper>
                <img src="Email.png" alt="email-icon" />
                <Fade bottom><a href="mailto:heya.jesse@gmail.com"><h4>hi@jesse.dev</h4></a></Fade>
            </EmailWrapper>
            <LogoWrapper>
                <img src="logo.png" alt="logo" />
            </LogoWrapper>
            <ListWrapper>
                <Fade bottom><List><a href="default.asp">Works</a></List></Fade>
                <Fade bottom><List><a href="news.asp">About</a></List></Fade>
                <Fade bottom><List><a href="contact.asp">Contact</a></List></Fade>
                <Fade bottom><List><a href="about.asp">Resume</a></List></Fade>
            </ListWrapper>
        </UnorderedList>
    )
}
export default Navbar