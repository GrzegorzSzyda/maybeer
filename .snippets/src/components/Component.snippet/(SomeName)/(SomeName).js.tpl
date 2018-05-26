// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';

type <%= SomeName %>Props = {
    name: string,
    children: Node
};

export const <%= SomeName %> = (props: <%= SomeName %>Props) => (
    <Container>
        {props.name}
        {props.children}
    </Container>
);

const Container = styled.div`
    padding: 10px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 3px 10px 20px rgba(0, 0, 0, 0.1);
`;
