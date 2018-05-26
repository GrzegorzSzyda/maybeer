// @flow
import React from 'react';
import { connect, userActions, type State, type WallState } from '../../store';

type WallProps = {
    wall: WallState,
    user: any
};

const WallComponent = (props: WallProps) => (
    <div>
        <button onClick={userActions.login}>Login</button>
        <button onClick={userActions.logout}>Logout</button>
        {props.wall.map(item => <h4 key={item.id}>{item.title}</h4>)}
    </div>
);

export const Wall = connect((state: State) => ({
    wall: state.wall,
    user: state.user
}))(WallComponent);
