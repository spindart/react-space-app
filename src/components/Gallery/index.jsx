import styled from "styled-components";
import Title from "../Title";
import Tags from "./Tags";
import Populars from "./Populars";

const GalleryContainer = styled.div`
  display: flex;
`;

const FluidSection = styled.section`
  flex-grow: 1;
`;

const Gallery = () => {
  return (
    <>
      <Tags />

      <GalleryContainer>
        <FluidSection>
          <Title>Browse the gallery</Title>;
        </FluidSection>
        <Populars></Populars>
      </GalleryContainer>
    </>
  );
};

export default Gallery;
