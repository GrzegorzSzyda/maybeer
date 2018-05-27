// @flow
import React from 'react';
import { connect, type State } from '../../store';
import type { WallState } from '../../store/wall/wallTypes';

type WallProps = {
    wall: WallState
};

const WallComponent = ({ wall }: WallProps) => (
    <div>
        {wall.entries.map(item => (
            <div key={item.id}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
            </div>
        ))}
    </div>
);

export const Wall = connect((state: State) => ({
    wall: state.wall,
    user: state.user
}))(WallComponent);
