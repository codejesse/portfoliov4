import styled from 'styled-components';
import Works from "./data";
import Fade from 'react-reveal/Fade';

const ProjectsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 10rem;
    margin-bottom: 10rem;
    @media (max-width: 600px) {
        margin-top: 19rem;
    }
`;

const ProjectHeader = styled.h1`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    width: 40%;
    margin: 4rem;
    float: left;
    color: #0d0e10;
    @media (max-width: 600px) {
        font-size: 40px;
        margin: 1.5rem;
    }
`;

const ImageWrapper = styled.div`
   width: 70%;
   height: auto;
   margin: auto;
   border-radius: 20px;
   cursor: pointer;
   /* &:hover {
       opacity: 0.3;
       transition: 1s all;
   } */
`;

const DetailsWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: left;
   margin: 4rem;
   margin-top: -1rem;
   @media (max-width: 600px) {
       margin: 1.5rem;
   }
`;

const DetailsHeader = styled.h1`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    color: #0d0e10;
    @media (max-width: 600px) {
        font-size: 30px;
    }
`;

const DetailsPara = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    margin-top: -1rem;
    line-height: 49px;
    color: #3f4451;
    @media (max-width: 600px) {
       font-size: 20px;
   }
`;

const LinksWrapper = styled.div`
   display: flex;
   flex-direction: row;
`;

const LiveSite = styled.p`
   font-size: 2rem;
   color: black;
   margin-right: 2rem;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 30px;
   & a {
       text-decoration: none;
       color: black;
   }
   & a:hover {
       color: #FFEEDE;
   }
`;

const MoreButton = styled.div`
    margin: auto;
    background: #0d0e10;
    border-radius: 80px;
    width: 420px;
    height: 85px;
    cursor: pointer;
    & a {
        text-decoration: none;
    }
    @media (max-width: 600px) {
        width: 70%;
    }
`;

const ButtonText = styled.p`
    color: white;
    text-align: center;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    @media (max-width: 600px) {
        font-size: 23px;
    }
`;

function Projects() {
    return (
        <ProjectsWrapper>
            <Fade bottom><ProjectHeader>Somethings i've built</ProjectHeader></Fade>
            {Works.map((work, i) => (
                <>
                    <ImageWrapper>
                        <Fade bottom><img className='project-img' src={work.image} alt={work.title} /></Fade>
                    </ImageWrapper>
                    <DetailsWrapper>
                        <Fade bottom><DetailsHeader>{work.title}</DetailsHeader></Fade>
                        <Fade bottom><DetailsPara>{work.desc}</DetailsPara></Fade>
                        <LinksWrapper>
                            <LiveSite><a href={work.site}>Livesite</a></LiveSite>
                            <LiveSite><a href={work.github}>Code</a></LiveSite>
                        </LinksWrapper>
                    </DetailsWrapper>
                </>
            ))}
            <MoreButton><a target="_blank" rel="noreferrer" href='https://github.com/codejesse/'><ButtonText>More on Github</ButtonText></a></MoreButton>
        </ProjectsWrapper>
    )
}
export default Projects;