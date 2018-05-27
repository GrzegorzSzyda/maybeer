// @flow
import type { State } from './types';
import { userInitialState } from './user/userInitialState';
import { wallInitialState } from './wall/wallInitialState';

export const initialState: State = {
    user: userInitialState,
    wall: wallInitialState
};
