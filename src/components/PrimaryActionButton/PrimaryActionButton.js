// @flow
import React from 'react';
import { Add, Login, Loading } from './Buttons';

type PrimaryActionButtonProps = {
    isLogged: boolean | null,
    onShowLogin(): void
};

export const PrimaryActionButton = ({
    isLogged,
    onShowLogin
}: PrimaryActionButtonProps) => {
    if (isLogged === null) {
        return <Loading />;
    }
    if (isLogged) {
        return <Add />;
    }
    return <Login onShowLogin={onShowLogin} />;
};
