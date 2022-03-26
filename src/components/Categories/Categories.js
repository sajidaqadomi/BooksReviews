import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";

import { getCategories } from "../../api/category";
import CategoryItem from "./CategoryItem";
import { useApi } from "../../hooks/useApi";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";

const Categories = () => {
    const {
        requset,
        data: { categories },
        isLoading,
        errors,
    } = useApi();
    const [filterCat, setFilterCat] = useState([]);

    useEffect(() => {
        if (categories) {
            let filterCats =
                categories.length <= 8 ? categories : categories.slice(0, 8);
            setFilterCat(filterCats);
        }
        return () => {
            setFilterCat([]);
        };
    }, [categories]);

    useEffect(() => {
        requset(null, getCategories);
    }, []);

    if (isLoading && !errors) return <Loading />;
    if (errors) return <ErrorMessage message={errors} />;


    return (
        <>
            {filterCat.length && (
                <Grid container spacing={2}>
                    {filterCat.map((cat) => (
                        <Grid key={cat.id} item sm={6} md={4} lg={3}>
                            <CategoryItem category={cat} />{" "}
                        </Grid>
                    ))}
                </Grid>
            )}
        </>
    );
};

export default Categories;
