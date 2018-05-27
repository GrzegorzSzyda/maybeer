// @flow
import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../Icon';
import { BUTTON_DEFAULT_STYLES, ICON_STYLES } from './styles';

type LoginProps = {
    onShowLogin(): void
};

export const Login = ({ onShowLogin }: LoginProps) => (
    <Button onClick={() => onShowLogin()}>
        <IconWrapper>
            <Icon name="key" />
        </IconWrapper>
    </Button>
);

const Button = styled.button`
    ${BUTTON_DEFAULT_STYLES};
`;

const IconWrapper = styled.span`
    ${ICON_STYLES};
`;
