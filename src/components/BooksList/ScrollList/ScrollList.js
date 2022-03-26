import React from "react";
import Slider from "react-slick";

import { Root } from "./styles";
import CustomArrow from "./CustomArrow";

const ScrollList = ({ children, slidesNumber, ...rest }) => {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        lazyLoad: true,
        slidesToShow: Math.min(slidesNumber, 5),
        slidesToScroll: 1,
        centerMode: false,
        draggable: false,
        focusOnSelect: true,
        swipeToSlide: true,
        rows: 1,
        nextArrow: <CustomArrow />,
        prevArrow: <CustomArrow isNext={false} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: Math.min(slidesNumber, 3),
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: Math.min(slidesNumber, 1),
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <Root>
            <Slider {...settings} {...rest}>
                {children}
            </Slider>
        </Root>
    );
};

export default ScrollList;
