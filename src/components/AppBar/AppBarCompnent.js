import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { Link } from 'react-router-dom'
import { Search } from "@material-ui/icons";

import useStyles from "./styles";
import DrawerNavigator from "./DrawerNavigator";
import Container from "../Container";

const AppBarCompnent = ({ setOpenDrawer, openDrawer }) => {
    const classes = useStyles();
    // const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = () => {
        setOpenDrawer((openDrawer) => !openDrawer);
    };
    return (
        <>
            <AppBar position="static" className={classes.appBar}>
                <Container>
                    <Toolbar disableGutters className={classes.toolBar}>
                        <div className={classes.leftSide}>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                onClick={toggleDrawer}
                                color="inherit"
                                aria-label="menu"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Link to={'/'} style={{ textDecoration: 'none' }}>
                                <h1 className={classes.title}>
                                    <span className={classes.strong}>Books</span>Reviews
                                </h1>
                            </Link>
                        </div>
                        <div className={classes.rightSide}>
                            <Link className={classes.link} to='/'>home</Link>
                            <Link className={classes.link} to='#'>books</Link>
                            <Link className={classes.link} to='#'>Reviews</Link>
                            <Link className={classes.link} to='#'>contacts</Link>
                            <IconButton>
                                <Search className={classes.search} />
                            </IconButton>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>

        </>
    );
};

export default AppBarCompnent;
