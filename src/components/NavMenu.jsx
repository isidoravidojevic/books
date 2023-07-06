import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

const NavItem = styled(Link)`
    text-decoration: none;
    color: #333;
    font-size: 18px;
    margin-right: 20px;
    &:hover {
        color: #555;
    }
`;

const NavMenu = () => {
    return (
        <NavContainer>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/contact">Contact</NavItem>
        </NavContainer>
    );
};

export default NavMenu;
