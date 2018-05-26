// @flow
import { userInitialState } from './user/userInitialState';
import type { State } from './types';

export const initialState: State = {
    user: userInitialState,
    wall: [
        {
            id: '1',
            title: 'IPA'
        },
        {
            id: '2',
            title: 'Double IPA'
        }
    ]
};
