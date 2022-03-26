import styled from "styled-components";

import colors from "../../config/colors";

export const SectionContainer = styled.section`
  padding: 40px 0;
  background: ${({ mode }) => {
    return mode === "dark"
      ? "radial-gradient(circle, rgba(83,81,84,1) 0%, rgba(5,2,2,1) 50%, rgba(40,38,38,1) 100%)"
      : mode === "medLight"
        ? colors.light
        : colors.white;
  }};
`;
export const SectionTitle = styled.h3`
  font-size: 32px;
  text-transform: capitalize;
  margin-bottom: 24px;
  color: ${({ mode }) => (mode === "dark" ? colors.white : colors.black)};
  &.browse{
    font-weight:400;
    &:before{
      content:'Browse ';
      font-weight: 900;
    }
  }
`;
