// @flow
import React from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { LINK_STYLES, ICON_STYLES } from './styles';

type LoginProps = {
    onShowLogin(): void
};

export const Login = ({ onShowLogin }: LoginProps) => (
    <OpenLoginButton onClick={() => onShowLogin()}>
        <IconWrapper>
            <Icon name="key" />
        </IconWrapper>
    </OpenLoginButton>
);

const OpenLoginButton = styled.button`
    ${LINK_STYLES};
`;

const IconWrapper = styled.span`
    ${ICON_STYLES};
`;
