// @flow
import { type State } from './types';

export const actionsCreators = {
    addWallItem: (state: State, title: string) => ({
        wall: [
            ...state.wall,
            {
                id: Math.random(),
                title: title
            }
        ]
    })
};
