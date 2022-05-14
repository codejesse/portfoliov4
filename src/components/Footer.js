import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const FooterWrapper = styled.div`
     width: 100%;
     background-image: url("Footerimg.png");
     height: 145vh;
     background-repeat: no-repeat;
     background-position: right;
     background-position-x: 43rem;
     background-size: 45rem;
     @media(max-width: 600px) {
         background-position-x: 6rem;
     }
`;

const FooterHeader = styled.h1`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 96px;
    width: 70%;
    margin: 4rem;
    @media (max-width: 600px) {
        font-size: 40px;
        margin: 1.5rem;
    }
`;

const IconWrapper = styled.div`
   /* display: flex;
   flex-direction: column; */
   margin: 4rem;
   line-height: 5rem;
   width: 20%;
   @media (max-width: 600px) {
       width: 60%;
       margin: 1.5rem;
   }
`;

function Footer() {
    return (
       <FooterWrapper>
            <Fade bottom><FooterHeader>Let's talk, time to make magic</FooterHeader></Fade>
            <IconWrapper>
                <Fade bottom><a target="_blank" rel="noreferrer" href='https://twitter.com/jessebeke/'><img src='Twitter.png' alt='twitter-icon' /></a></Fade>
                <Fade bottom><a target="_blank" rel="noreferrer" href='https://jessex.vercel.app/'><img src='Instagram.png' alt='instagram-icon' /></a></Fade>
                <Fade bottom><a target="_blank" rel="noreferrer" href='https://github.com/codejesse/'><img src='github.png' alt='github-icon' /></a></Fade>
                <Fade bottom><a target="_blank" rel="noreferrer" href='mailto:heya.jesse@gmail.com'><img src='Mail.png' alt='mail-icon' /></a></Fade>
            </IconWrapper>
        </FooterWrapper>
    )
}
export default Footer;