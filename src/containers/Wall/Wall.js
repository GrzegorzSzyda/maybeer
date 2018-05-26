// @flow
import React from 'react';
import {
    connect,
    userActions,
    type State,
    type WallState,
    type UserState
} from '../../store';

type WallProps = {
    wall: WallState,
    user: UserState
};

const WallComponent = (props: WallProps) => (
    <div>
        {props.user && (
            <div>
                {props.user.displayName}
                <br />
                {props.user.email}
                <button onClick={userActions.logout}>Logout</button>
            </div>
        )}
        {!props.user && <button onClick={userActions.login}>Login</button>}
        {props.wall.map(item => <h4 key={item.id}>{item.title}</h4>)}
    </div>
);

export const Wall = connect((state: State) => ({
    wall: state.wall,
    user: state.user
}))(WallComponent);
