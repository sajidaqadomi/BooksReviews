import axios from "axios";

export const getBooksByCat = (cat) => {
    return axios.get(`/data/categories/${cat}.json`)
};

export const getBooksById = (id) => {
    return axios.get(`/data/books/book${id}.json`)
};
//export default { getBooksByCat, getBooksById }

