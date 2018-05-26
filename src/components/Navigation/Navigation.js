// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = () => (
    <NavigationWrapper>
        <Link to="/">Ściana</Link>
        <Link to="/add">Dodaj</Link>
        <Link to="/user">O mnie</Link>
    </NavigationWrapper>
);

const NavigationWrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    border: 1px solid #353535;
    height: 60px;
`;
