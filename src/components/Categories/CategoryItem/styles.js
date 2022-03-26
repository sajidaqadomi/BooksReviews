import styled from "styled-components";

export const CategoryRoot = styled.div`
  padding-left: 100px;
  position: relative;
`;
export const ImageContainer = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 0;
  left: 0;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const CategoryDetails = styled.div``;
export const Title = styled.h4`
  font-weight: 600;
  line-height: 1.5;
  font-size: 16px;
  margin-bottom: 8px;
  color: ${({ color }) => color};
`;
export const Description = styled.p`
  font-weight: 600;
  line-height: 1.5;
  font-size: 16px;

  color: ${({ color }) => color};
`;
