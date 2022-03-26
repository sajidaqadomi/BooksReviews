import React, { useContext } from "react";

import { ModeContext } from "../../Contexts/ModeContext";
import BookList from "../BooksList";
import Categories from "../Categories";
import Container from "../Container";
import { SectionContainer, SectionTitle } from "./styles";

const Section = ({ title, cat }) => {
    const { mode } = useContext(ModeContext);

    return (
        <SectionContainer cat={cat} mode={cat ? mode[cat] : "light"}>
            <Container>
                <SectionTitle mode={cat ? mode[cat] : "light"} className={cat ? "" : "browse"}>{title}</SectionTitle>
                {cat ? <BookList cat={cat} /> : <Categories />}
            </Container>
        </SectionContainer>
    );
};

export default Section;
