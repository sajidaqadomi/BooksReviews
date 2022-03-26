import React, { useEffect } from "react";
import { useParams } from "react-router";

import { getBooksById } from "../../api/book";
import { Container,ErrorMessage,Loading } from "../../components";
import { useApi } from "../../hooks/useApi";
import {
    BookContent,
    BookDate,
    BookDesc,
    BookDetails,
    BookTitle,
    Content,
    Image,
    ImageConatiner,

} from "./styles";

const Book = () => {
    const { id } = useParams();
    const { requset, data: book, isLoading, errors } = useApi();

    useEffect(() => {
        id && requset(id, getBooksById);
    }, [id]);

    if (isLoading && !errors) return <Loading />;
    if (errors) return <ErrorMessage message={errors} />
    return (

        <Container>
            <Content>
                <BookTitle>{book?.title}</BookTitle>
                <BookContent>
                    <ImageConatiner>
                        <Image src={book?.image} alt={"name"} />
                    </ImageConatiner>
                    <BookDetails>
                        <BookDesc>{book?.description}</BookDesc>
                        <BookDate>
                            published On : <span className="date">{book?.publishedOn}</span>
                        </BookDate>
                    </BookDetails>
                </BookContent>
            </Content>
        </Container>

    );
};

export default Book;
