// @flow
import type { State } from './types';

export const initialState: State = {
    user: null,
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
