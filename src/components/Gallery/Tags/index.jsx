import styled from "styled-components";
import tags from "./tags.json";

const TagTitleStyle = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  margin: 0;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 30px;
  align-items: center;
`;

const Tag = styled.button`
  font-size: 24px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;

const Tags = () => {
  return (
    <>
      <TagsContainer>
        <TagTitleStyle>Search by tags:</TagTitleStyle>

        {tags.map((tag) => (
          <Tag key={tag.id}>{tag.title}</Tag>
        ))}
      </TagsContainer>
    </>
  );
};

export default Tags;
