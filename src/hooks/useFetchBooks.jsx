import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetchBooks = () => {
    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                let url = "https://fakerapi.it/api/v1/books?_quantity=10";
                const response = await axios.get(url);
                setBooks(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchBooks();
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()));

    return { books: filteredBooks, searchQuery, handleSearch };
};

export default useFetchBooks;
