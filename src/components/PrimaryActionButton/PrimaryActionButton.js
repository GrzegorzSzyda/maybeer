// @flow
import React from 'react';
import styled from 'styled-components';
import { Add } from './Add';
import { Login } from './Login';

type PrimaryActionButtonProps = {
    isLogged: boolean | null,
    onShowLogin(): void
};

export const PrimaryActionButton = ({
    isLogged,
    onShowLogin
}: PrimaryActionButtonProps) => (
    <Button>
        {isLogged && <Add />}
        <Login onShowLogin={onShowLogin} />
    </Button>
);

const Button = styled.div`
    background: #f2994a;
    position: absolute;
    left: 0;
    right: 0;
    top: -11px
    height: 90px;
    width: 90px;
    border-radius: 100%;
    margin: 0 auto;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    overflow: hidden;
`;
