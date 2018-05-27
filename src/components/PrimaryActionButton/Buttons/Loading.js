// @flow
import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../Icon';
import { BUTTON_DEFAULT_STYLES, ICON_STYLES } from './styles';

export const Loading = () => (
    <Button>
        <IconWrapper>
            <Icon name="spinner" />
        </IconWrapper>
    </Button>
);

const Button = styled.span`
    ${BUTTON_DEFAULT_STYLES};
    cursor: auto;
`;

const IconWrapper = styled.span`
    ${ICON_STYLES};
`;
