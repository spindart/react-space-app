import styled from "styled-components";

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
            activeIcon="/images/icons/home.png"
            inactiveIcon="/images/icons/home-inactive.png"
            text="Home"
          ></NavigationItem>
        </StylizedList>
      </nav>
    </aside>
  );
};

export default LateraralBar;
