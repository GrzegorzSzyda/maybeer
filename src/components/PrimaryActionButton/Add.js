// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { LINK_STYLES, ICON_STYLES } from './styles';

export const Add = () => (
    <AddLink to="/add">
        <IconWrapper>
            <Icon name="plus" />
        </IconWrapper>
    </AddLink>
);

const AddLink = styled(Link)`
    ${LINK_STYLES};
`;
const IconWrapper = styled.span`
    ${ICON_STYLES};
`;
