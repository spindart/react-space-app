import styled from "styled-components";
import PropTypes from "prop-types";

const StylizedItemList = styled.li`
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  cursor: pointer;
  color: ${(props) => (props.$active ? "#7B78E5" : "#D9D9D9")};
  font-family: ${(props) =>
    props.$active ? "GandhiSansBold" : "GandhiSansRegular"};
  display: flex;
  align-items: center;
  gap: 22px;
`;

const NavigationItem = ({
  children,
  activeIcon,
  inactiveIcon,
  active = false,
}) => {
  return (
    <StylizedItemList $active={active}>
      <img src={active ? activeIcon : inactiveIcon} alt="" />
      {children}
    </StylizedItemList>
  );
};

NavigationItem.propTypes = {
  children: PropTypes.node.isRequired,
  activeIcon: PropTypes.string.isRequired,
  inactiveIcon: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default NavigationItem;
