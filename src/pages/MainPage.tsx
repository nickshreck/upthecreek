import "../styling/mainpage.css";
import styled from "@emotion/styled";
import HeroImageSrc from "../assets/farm.big.png";

const Section = styled.section`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const HeroImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const HeroImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const MainTextContainer = styled.div`
    position: absolute;
    bottom: 10vh;
    left: 5vw;
    color: white;
    text-align: left;
    padding: 1rem;
    box-sizing: border-box;
`;

const MainText = styled.div`
    font-size: 2rem;
    font-family: Grandstander;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;

function MainPage() {
    return (
        <Section data-theme="dark">
            {/* <Header></Header> */}
            <HeroImageContainer>
                <HeroImage src={HeroImageSrc} alt="Hero Image" />
                <MainTextContainer>
                    <MainText>
                        <h1>Up The Creek</h1>
                        <h2>July 27th-28th 2024</h2>
                        <h3>One magical weekend of basslines</h3>
                    </MainText>
                </MainTextContainer>
            </HeroImageContainer>
        </Section>
    );
}

export default MainPage;
