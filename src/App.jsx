import styled from "styled-components";
import GlobalStyle from "./components/global-styles";

const BackgroundGradient = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100vh;
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
    </BackgroundGradient>
  );
}

export default App;
