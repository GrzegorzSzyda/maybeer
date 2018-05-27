// @flow
import type { State } from '../types';

export const wallActions = {
    addWallItem: (state: State, title: string, description: string): $Shape<State> => ({
        wall: {
            ...state.wall,
            entries: [
                {
                    id: Math.random().toString(),
                    title,
                    description
                },
                ...state.wall.entries
            ]
        }
    })
};
