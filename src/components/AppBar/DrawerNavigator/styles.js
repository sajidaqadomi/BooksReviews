import { makeStyles } from "@material-ui/core";

import colors from "../../../config/colors";

export default makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    root: {
        display: "flex",
        [theme.breakpoints.up(1024)]: {
            display: "none",
        },
    },
    drawerPaper: {
        width: "100%",
        height: "60%",
    },
    link: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 0",
        fontWeight: 700,
        color: colors.black,
        textDecoration: "none",
        textTransform: "uppercase",
        fontSize: "18px",
        transition: "all .3s ease-in-out",
        "&:hover": {
            color: colors.spring,
            textDecoration: "none",
        },
    },
    linkContainer: {
        borderBottom: `1px solid ${colors.light}`,
        padding: "8px 0",
    },
}));
