import React, { useEffect } from "react";

import { getBooksByCat } from "../../api/book";
import { useApi } from "../../hooks/useApi";
import ErrorMessage from "../ErrorMessage";
import Loading from "../Loading";
import BookCard from "./BookCard";
import ScrollList from "./ScrollList";

const BookList = ({ cat }) => {
    const {
        requset,
        data: { books },
        isLoading,
        errors,
    } = useApi();

    useEffect(() => {
        cat && requset(cat, getBooksByCat);
    }, [cat]);

    if (isLoading && !errors) return <Loading />;
    if (errors) return <ErrorMessage message={errors} />;
    return (
        books?.length && (
            <ScrollList slidesNumber={books.length}>
                {books.map((book) => (
                    <BookCard key={book.id} book={{ ...book, cat }} />
                ))}
            </ScrollList>
        )
    );
};

export default BookList;
