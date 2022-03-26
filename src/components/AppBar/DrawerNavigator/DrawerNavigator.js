import React from "react";
import { Link } from "react-router-dom"
import { Drawer, IconButton } from "@material-ui/core";
import {
    ArrowForwardIosSharp,
    Search,
} from "@material-ui/icons";
import styledComponents from "styled-components";

import Container from "../../Container";
import useStyles from "./styles";
import colors from "../../../config/colors";
import AppBarCompnent from "../AppBarCompnent";

const SearchContainer = styledComponents.div`
  background-color:${colors.black};
  border-top: 2px solid ${colors.light};
 

`;
const SearchContent = styledComponents.div`
display: flex;
justify-content: space-between;
position:relative;

`;
const SearchInput = styledComponents.input`
display: block;
padding: 8px 0;
width: 80%;
background-color: transparent;
line-height: 1.9;
font-weight: 600;
font-size:18px;
color: white;
border: 0;
  

`;
const DrawerNavigator = ({ openDrawer, setOpenDrawer }) => {
    const classes = useStyles();
    return (
        <Drawer
            anchor="left"
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            classes={{ root: classes.root, paper: classes.drawerPaper }}
        >
            {/* <div className={classes.offset} /> */}
            <AppBarCompnent />
            <SearchContainer>
                <Container>
                    <SearchContent>
                        <SearchInput placeholder="Search..." />
                        <IconButton onClick={() => setOpenDrawer(false)}>
                            <Search style={{ fontSize: "24px", color: colors.spring }} />
                        </IconButton>
                    </SearchContent>
                </Container>
            </SearchContainer>
            <Container>
                <div className={classes.contents}>
                    <div className={classes.linkContainer}>
                        <Link className={classes.link} onClick={() => setOpenDrawer(false)} to={'/'}>
                            <span>Home</span> <ArrowForwardIosSharp />
                        </Link>
                    </div>
                    <div className={classes.linkContainer}>
                        <Link className={classes.link} onClick={() => setOpenDrawer(false)} to={'#'}>
                            <span>books</span> <ArrowForwardIosSharp />
                        </Link>
                    </div>
                    <div className={classes.linkContainer}>
                        <Link className={classes.link} onClick={() => setOpenDrawer(false)} to={'#'}>
                            <span>Reviews</span>
                            <ArrowForwardIosSharp />
                        </Link>
                    </div>
                    <div className={classes.linkContainer}>
                        <Link className={classes.link} onClick={() => setOpenDrawer(false)} to={'#'}>
                            <span>contacts</span>
                            <ArrowForwardIosSharp />
                        </Link>
                    </div>
                </div>
            </Container>
        </Drawer>
    );
};

export default DrawerNavigator;
