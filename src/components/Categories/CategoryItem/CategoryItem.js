import React from "react";

import colors from "../../../config/colors";
import {
    CategoryDetails,
    CategoryRoot,
    Description,
    Image,
    ImageContainer,
    Title,
} from "./styles";

const CategoryItem = ({ category: { description, title, image } }) => {
    return (
        <CategoryRoot>
            <ImageContainer>
                <Image src={image} alt="title" />
            </ImageContainer>
            <CategoryDetails>
                <Title color={colors.black}>{title}</Title>
                <Description color={"rgba(0,0,0,.6)"}>{description}</Description>
            </CategoryDetails>
        </CategoryRoot>
    );
};

export default CategoryItem;
