import React from "react";
import { ArrowBackIos, ArrowForwardIos, ChevronLeft, ChevronRight } from "@material-ui/icons";

import useStyle from "./styles";

const CustomArrow = (props) => {
    const { className, style, onClick, isNext = true } = props;
    const classes = useStyle({ isNext });

    return (
        <div
            className={`${className} ${classes.root}`}
            style={{ ...style, display: "flex", justifyContent: "center" }}
            onClick={onClick}
        >
            {isNext ? (
                <ChevronRight fontSize="large" className={classes.icon} />
            ) : (
                <ChevronLeft fontSize="medium" className={classes.icon} />
            )}
        </div>
    );
};

export default CustomArrow;
