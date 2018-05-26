// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';

type ButtonProps = {
    name: string,
    onClick(event: Event): void
};

export const Button = (props: ButtonProps) => (
    <Btn onClick={props.onClick}>{props.name}</Btn>
);

const Btn = styled.div`
    padding: 10px;
    background: #f2994a;
    box-shadow: 3px 10px 20px rgba(0, 0, 0, 0.1);
`;
