import "../App.css"
import styled from 'styled-components';


const ProjectDetailsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const ProjectTitle = styled.h1`
   text-align: center;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 700;
   font-size: 90px;
`;

const ProjectsLinks = styled.div`
   display: flex;
   margin: auto;
   justify-content: space-between;
`;

const ProjectLive = styled.h2`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 700;
   font-size: 55px;
   line-height: 75px;
   color: #FFB877;
`;

const ProjectCode = styled.h2`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 700;
   font-size: 55px;
   line-height: 75px;
   color: #93B7FF;
`;

const ProjectImg = styled.image`
  background-image: url("Jobbble.png");
  height: 105vh;
`;

function ProjectDetails() {
    return (
        <ProjectDetailsWrapper>
            <ProjectTitle>Jobbble</ProjectTitle>
            <ProjectsLinks>
                <ProjectLive>Live site</ProjectLive>
                <ProjectCode>Code</ProjectCode>
            </ProjectsLinks>
            <ProjectImg></ProjectImg>
        </ProjectDetailsWrapper>
    )
}
export default ProjectDetails;