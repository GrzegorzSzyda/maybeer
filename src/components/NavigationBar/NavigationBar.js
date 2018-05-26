// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../Icon';

type NavigationProps = {
    isLogged: boolean | null,
    onShowLogin: Function
};

export const NavigationBar = ({ isLogged, onShowLogin }: NavigationProps) => (
    <NavigationWrapper>
        <Link to="/">Ściana</Link>
        {isLogged ? (
            <Link to="/add">
                <Icon name="plus" />
            </Link>
        ) : (
            <span>
                <Icon name="key" />
            </span>
        )}
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
