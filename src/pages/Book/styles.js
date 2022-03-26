import styled from "styled-components";
import colors from "../../config/colors";

export const Content = styled.div`
  padding: 24px 0;
  @media (min-width:1024px) {
    padding: 32px 0;

    }
`;
export const BookContent = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width:1024px) {
    flex-direction: row;
    }
`;
export const ImageConatiner = styled.div`
  width: 100%;
  height: 350px;
  overflow: hidden;
  @media (min-width:1024px) {
    flex:1
    }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
export const BookDetails = styled.div`
  padding: 16px 0;
  @media (min-width:1024px) {
    padding:0px 0px 0px 16px;
    flex:1;
    }
`;
export const BookTitle = styled.h3`
  margin-bottom: 16px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 28px;
  @media (min-width:1024px) {
    font-size: 36px;
    }
`;
export const BookDesc = styled.p`
  line-height: 1.6;
  font-size: 18px;
  text-transform: capitalize;
  margin-bottom: 32px;
  color:${colors.dark}
  @media (min-width:1024px) {
    font-size: 24px;
    margin-bottom: 40px;
    }
`;

export const BookDate = styled.p`
  font-size: 18px;
  font-weight: 600;
  text-transform: capitalize;
  color: ${colors.spring};
`;
