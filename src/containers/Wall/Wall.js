// @flow
import React from 'react';
import { connect, type State, type WallState } from '../../store';

type WallProps = {
    wall: WallState
};

const WallComponent = (props: WallProps) => (
    <div>{props.wall.map(item => <h4 key={item.id}>{item.title}</h4>)}</div>
);

export const Wall = connect((state: State) => ({
    wall: state.wall,
    user: state.user
}))(WallComponent);
