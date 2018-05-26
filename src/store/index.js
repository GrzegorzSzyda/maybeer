// @flow
import * as createStore from 'react-waterfall';
import { initialState } from './initialState';
import { actionsCreators } from './actionsCreators';
import { watchUserChanges, login, logout } from './firebase';
import type { UserData } from './user/userTypes';

export * from './types';

export const { Provider, connect, actions } = createStore({
    initialState,
    actionsCreators
});

export const userFirebaseActions = { login, logout };

watchUserChanges((user: UserData) => {
    console.log('watchUserChanges', user); // eslint-disable-line
    actions.userUpdateData(user);
});
