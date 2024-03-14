import styled from "styled-components";
import Title from "../Title";
import Tags from "./Tags";
import Populars from "./Populars";

import PropTypes from "prop-types";

const GalleryContainer = styled.div`
  display: flex;
`;

const FluidSection = styled.section`
  flex-grow: 1;
`;

const Figure = styled.figure`
  width: ${(props) => (props.$expandida ? "90%" : "460px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: "GandhiSansBold";
    }
    h4 {
      flex-grow: 1;
    }
    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

const ImagesContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

const Container = styled.div`
  /* Estilos para todas as telas */
  width: 100%;

  @media (min-width: 768px) {
    /* Estilos para telas a partir de 768px */
    width: 80%;
  }

  @media (min-width: 1200px) {
    /* Estilos para telas a partir de 1200px */
    width: 60%;
  }
`;

const Gallery = ({ photos = [], expandida = true }) => {
  return (
    <>
      <Tags />

      <GalleryContainer>
        <FluidSection>
          <Title>Browse the gallery</Title>
          <Container>
            <ImagesContainer>
              {photos.map((photo) => {
                return (
                  <Figure $expandida={expandida} key={photo.id}>
                    <img src={photo.src} alt={photo.title} />
                  </Figure>
                );
              })}
            </ImagesContainer>
          </Container>
        </FluidSection>
        <Populars></Populars>
      </GalleryContainer>
    </>
  );
};

Gallery.propTypes = {
  photos: PropTypes.array.isRequired,
  expandida: PropTypes.bool.isRequired, // Changed prop type to bool
};

export default Gallery;
