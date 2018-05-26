// @flow
import type { State } from '../types';
import type { UserData } from './userTypes';

export const userActions = {
    userUpdateData: (state: State, data: UserData): $Shape<State> => ({
        user: {
            ...state.user,
            data
        }
    }),
    userShowLogin: (state: State, show: boolean = true): $Shape<State> => ({
        user: {
            ...state.user,
            showLogin: show
        }
    })
};
