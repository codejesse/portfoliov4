import "../App.css";
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const HomeWrapper = styled.div`
    display: flex;
    padding-top: 2rem;
    flex-direction: column;
    justify-content: center;
    background-image: url("background.png");
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    /* border: 1px solid black; */
    @media (max-width: 600px) {
        padding-top: auto;
        height: 70vh;
    }
`;


const HeaderIntro = styled.div`
    margin-bottom: 12.5rem;
    text-align: center;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    color: #393939;
    font-size: 48px;
    @media (max-width: 600px) {
        padding: 0;
        font-size: 40px;
        margin-top: -20rem;
    }
`;

const HeaderText = styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 4.3vw;
    width: 55%;
    text-align: center;
    margin: auto;
    margin-top: -16rem;
    color: #0d0e10;
    @media (max-width: 600px) {
        font-size: 40px;
        width: 90%;
    }
`;

function Home() {
    return (
        <HomeWrapper>
            <Zoom><div className='header-img'>
                <img src='Header.png' alt='header-img' />
            </div></Zoom>
            <Fade bottom><HeaderIntro>Hi i'm Jesse 🤘🏿</HeaderIntro></Fade>
            <Fade bottom><HeaderText>Creating web experiences that scale and sizzles🔥.</HeaderText></Fade>
        </HomeWrapper>
    )
}
export default Home;