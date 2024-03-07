import styled from "styled-components";
import PropTypes from "prop-types";

const StylezedFigure = styled.figure`
  background-image: ${(props) => `url(${props.$backgroundImage})`};
  flex-grow: 1;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  min-height: 328px;
  margin: 0;
  border-radius: 20px;
  max-width: 100%;
  background-size: cover;
`;

const StylizedTitle = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  max-width: 300px;
  padding: 0 64px;
`;

const Banner = ({ text, backgroundImage }) => {
  return (
    <StylezedFigure $backgroundImage={backgroundImage}>
      <StylizedTitle>{text}</StylizedTitle>
    </StylezedFigure>
  );
};

Banner.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};
export default Banner;
