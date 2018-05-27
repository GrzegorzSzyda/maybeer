// @flow
import type { WallItem } from './wallTypes';
import type { State } from '../types';

export const wallActions = {
    wallClearEntries: (state: State): $Shape<State> => ({
        wall: {
            loading: true,
            entries: []
        }
    }),
    wallSetEntries: (state: State, entries: WallItem[]): $Shape<State> => ({
        wall: {
            loading: false,
            entries
        }
    })
};
