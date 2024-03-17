import styled from "styled-components";
import GlobalStyle from "./components/global-styles";
import Header from "./components/Header";
import LateraralBar from "./components/LateralBar";
import Banner from "./components/Banner";

import bannerBackground from "/assets/banner.png";
import Gallery from "./components/Gallery";

import photos from "./photos.json";
import { useState } from "react";

const BackgroundGradient = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100vw;
  min-height: 100vh;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ContentGallery = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const App = () => {
  const [photosGallery, setPhotosGallery] = useState(photos);
  return (
    <BackgroundGradient>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <MainContainer>
          <LateraralBar />
          <ContentGallery>
            <Banner
              text="The most complete photo gallery in space!"
              backgroundImage={bannerBackground}
            />
            <Gallery expandida={true} photos={photosGallery} />
          </ContentGallery>
        </MainContainer>
      </AppContainer>
    </BackgroundGradient>
  );
};

export default App;