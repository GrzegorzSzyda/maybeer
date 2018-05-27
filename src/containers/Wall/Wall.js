// @flow
import React from 'react';
import { connect, type State, asyncActions } from '../../store';
import type { WallState } from '../../store/wall/wallTypes';

type WallProps = {
    wall: WallState
};

class WallComponent extends React.PureComponent<WallProps> {
    componentDidMount() {
        asyncActions.getWallItems();
    }
    render() {
        const { wall } = this.props;
        if (wall.loading) {
            return 'Loading…';
        }
        return (
            <div>
                <h3>Entries</h3>
                {wall.entries.map(item => (
                    <div key={item._id}>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export const Wall = connect((state: State) => ({
    wall: state.wall,
    user: state.user
}))(WallComponent);
