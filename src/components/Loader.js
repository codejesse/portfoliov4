import "../App.css"
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';

const LoaderWrapper = styled.div`
     display: flex;
     justify-content: center;
     margin: auto;
     margin-top: 10rem;
`;


function Loader() {
    return (
        <Zoom><LoaderWrapper>
            <div className="loader">
                <img src="icon.png" alt="me" />
            </div>
        </LoaderWrapper></Zoom>
    )
}
export default Loader;