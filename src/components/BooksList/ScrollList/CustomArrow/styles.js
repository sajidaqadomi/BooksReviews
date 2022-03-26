import { makeStyles } from "@material-ui/core";

import colors from "../../../../config/colors";

export default makeStyles((theme) => ({
    root: {
        width: "30px",
        height: "30px",
        //  display: "flex",
        background: "white",
        right: ({ isNext }) => isNext && "-35px",
        left: ({ isNext }) => !isNext && "-35px",
    },
    icon: {
        color: 'gray',
        flex: 1,
        height: "100%",
    },
}));
