// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../../Icon';
import { BUTTON_DEFAULT_STYLES, ICON_STYLES } from './styles';

export const Add = () => (
    <Button to="/add">
        <IconWrapper>
            <Icon name="plus" />
        </IconWrapper>
    </Button>
);

const Button = styled(Link)`
    ${BUTTON_DEFAULT_STYLES};
`;
const IconWrapper = styled.span`
    ${ICON_STYLES};
`;
