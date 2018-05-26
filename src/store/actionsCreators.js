// @flow
import type { State } from './types';
import { userActions } from './user/userActions';

export const actionsCreators = {
    ...userActions,
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
