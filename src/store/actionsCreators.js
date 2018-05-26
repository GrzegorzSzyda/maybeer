// @flow
import type { State, UserState } from './types';

export const actionsCreators = {
    updateUser: (user: UserState) => ({ user }),
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
