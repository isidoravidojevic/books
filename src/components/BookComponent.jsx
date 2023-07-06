import React, { useState } from "react";
import styled from "styled-components";

const BookItem = styled.li`
    margin-bottom: 10px;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    ${({ highlighted }) =>
        highlighted &&
        `
    border: 10px solid black;
  `}
`;

const BookTitle = styled.h2`
    font-size: 18px;
    margin-bottom: 5px;
`;

const BookAuthor = styled.p`
    font-size: 14px;
    margin-bottom: 5px;
`;

const BookDescription = styled.p`
    font-size: 14px;
    color: #888;
`;

const BookImage = styled.img`
    width: 200px;
    height: 250px;
    object-fit: cover;
    margin-bottom: 10px;
`;

const BookMarker = styled.button`
    background-color: yellow;
    border: 1px solid yellow;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 14px;
    cursor: pointer;
`;

export const BookComponent = ({ book }) => {
    const [highlighted, setHighlighted] = useState(false);
    const imageUrl = `https://source.unsplash.com/480x640/?book`;

    const handleMarkerClick = () => {
        setHighlighted(!highlighted);
    };

    return (
        <BookItem highlighted={highlighted}>
            <BookImage src={imageUrl} alt={book.title} />
            <BookTitle>{book.title}</BookTitle>
            <BookAuthor>By {book.author}</BookAuthor>
            <BookDescription>{book.description}</BookDescription>
            <BookMarker
                onClick={() => {
                    highlighted === false ? alert("You have added this book to bookmark.") : alert("You have removed this book to bookmark.");
                    handleMarkerClick();
                }}
            >{highlighted === false ? "Add to bookmark" : "Remove from bookmark"}</BookMarker>
        </BookItem>
    );
};
