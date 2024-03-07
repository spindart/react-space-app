import styled from "styled-components";
import GlobalStyle from "./components/global-styles";
import Header from "./components/Header";
import LateraralBar from "./components/LateralBar";

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

/**
 * This function returns the JSX code for the main application component.
 *
 * @returns {JSX.Element} The main application component
 */
function App() {
  return (
    <BackgroundGradient>
      <GlobalStyle />
      <Header />
      <LateraralBar />
    </BackgroundGradient>
  );
}

export default App;
