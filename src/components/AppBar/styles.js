import { makeStyles } from "@material-ui/core";
import { NoEncryption } from "@material-ui/icons";
import colors from "../../config/colors";

export default makeStyles((theme) => ({
    appBar: {
        backgroundColor: colors.spring,
        position: 'relative',
        zIndex: 1400

    },

    toolBar: {
        justifyContent: 'space-between',

    },
    leftSide: {
        display: 'flex'

    },
    menuButton: {
        display: 'block',
        [theme.breakpoints.up(1024)]: {
            display: 'none',
        }

    },
    rightSide: {
        display: 'none',
        [theme.breakpoints.up(1024)]: {
            display: 'flex',
            alignItems: 'center'
        }


    },
    strong: {

    },
    title: {
        fontWeight: 600,
        color: colors.white,
        '& $strong': {
            fontWeight: 900,
        }

    },
    link: {
        color: colors.white,
        margin: '0 8px',
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontWeight: 600,
        transition: 'all .3s ease-in-out',
        '&:hover': {
            textDecoration: 'none',
            cursor: 'pointer',
            color: colors.dark,


        }


    },
    search: {
        color: colors.white
    }

}))
