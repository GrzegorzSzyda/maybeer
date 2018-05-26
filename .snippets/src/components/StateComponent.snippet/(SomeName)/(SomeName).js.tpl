// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';

type <%= SomeName %>Props = {
    name: string,
    children: Node
};

type <%= SomeName %>State = {
    data: number
};

export class <%= SomeName %> extends PureComponent<<%= SomeName %>Props, <%= SomeName %>State> {
    state = { data: 0 };

    render() {
        const { name } = this.props;
        const { data } = this.state;

        return (
            <Container>
                {name} - {data}
                <Button onClick={this.handleIncrement}>+1</Button>
            </Container>
        );
    }

    handleIncrement = () => {
        this.setState(state => ({
            data: state.data + 1
        }));
    };
}

const Container = styled.div`
    padding: 10px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 3px 10px 20px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
    padding: 10px;
    background: hotpink;
    color: white;
    border-radius: 4px;
`;
