import styled from "styled-components";
import NavigationItem from "./NavigationItem";

const StylizedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`;

const LateraralBar = () => {
  return (
    <aside>
      <nav>
        <StylizedList>
          <NavigationItem
            activeIcon="/icons/home-active.png"
            inactiveIcon="/icons/home-inactive.png"
            active
          >
            Home
          </NavigationItem>
        </StylizedList>
        <StylizedList>
          <NavigationItem
            activeIcon="/icons/more-viewed-active.png"
            inactiveIcon="/icons/more-viewed-inactive.png"
          >
            More viewed
          </NavigationItem>
          <NavigationItem
            activeIcon="/icons/more-liked-active.png"
            inactiveIcon="/icons/more-liked-inactive.png"
          >
            More liked
          </NavigationItem>
          <NavigationItem
            activeIcon="/icons/news-active.png"
            inactiveIcon="/icons/news-inactive.png"
          >
            News
          </NavigationItem>
          <NavigationItem
            activeIcon="/icons/surpriseme-active.png"
            inactiveIcon="/icons/surpriseme-inactive.png"
          >
            Surprise-me
          </NavigationItem>
        </StylizedList>
      </nav>
    </aside>
  );
};

export default LateraralBar;
