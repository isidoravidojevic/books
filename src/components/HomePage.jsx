import React from "react";
import styled from "styled-components";
import { BookComponent } from "./BookComponent";
import useFetchBooks from "../hooks/useFetchBooks";
import NavMenu from "./NavMenu";

const HomeContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
`;

const BookList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
`;

const SearchInput = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 20px;
    font-size: 16px;
`;

const HomePage = () => {
    const { books, searchQuery, handleSearch } = useFetchBooks();

    return (
        <HomeContainer>
            <NavMenu />
            <Title>Book Collection</Title>
            <SearchInput type="text" placeholder="Search for a book" value={searchQuery} onChange={handleSearch} />
            <BookList>
                {books.map((book) => (
                    <BookComponent key={book.id} book={book} />
                ))}
            </BookList>
        </HomeContainer>
    );
};

export default HomePage;
