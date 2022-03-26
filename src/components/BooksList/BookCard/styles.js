import styled, { css } from "styled-components";

import colors from '../../../config/colors'

const spanStyles = css`
  display: block;
  text-transform: uppercase;
  font-size: 16px;
`;

export const Card = styled.div`
height: 100%;

`;
export const ImageConatiner = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const CardContent = styled.div`
padding:16px 8px 4px 4px;
`;
export const Title = styled.p`
  font-weight: 600;
  line-height: 1.5;
  font-size: 16px;
  margin-bottom: 8px;
  color: ${({ color }) => color};
`;
export const Auther = styled.span`
  ${spanStyles}
  margin-bottom: 8px;
  color: ${({ color }) => color};
`;
export const ReviewedInf = styled.span`
  ${spanStyles}
  color:${({ color }) => color}
`;
