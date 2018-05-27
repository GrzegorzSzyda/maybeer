// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { PrimaryActionButton } from '../PrimaryActionButton';

type NavigationProps = {
    isLogged: boolean | null,
    onShowLogin(): void
};

export const NavigationBar = ({ isLogged, onShowLogin }: NavigationProps) => (
    <NavigationWrapper>
        <NavigationItem to="/">
            <IconWrapperLeft>
                <Icon name="list" />
            </IconWrapperLeft>
        </NavigationItem>
        <NavigationItem to="/user">
            <IconWrapperRight>
                <Icon name="userCircle" />
            </IconWrapperRight>
        </NavigationItem>
        <PrimaryActionButton isLogged={isLogged} onShowLogin={onShowLogin} />
    </NavigationWrapper>
);

const NavigationWrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 68px;
    background: #fff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    display: grid;
    grid-template-columns: 50% 50%;
    justify-items: strech;
    align-items: stretch;
`;

const NavigationItem = styled(Link)`
    line-height: 63px;
    text-align: center
    color: #4f4f4f;
    font-size: 36px;
    border-bottom: 5px solid transparent;
    border-color: #F2994A;
`;

const IconWrapperLeft = styled.div`
    padding-right: 45px;
`;

const IconWrapperRight = styled.div`
    padding-left: 45px;
`;
