// @flow
import * as createStore from 'react-waterfall';
import { initialState } from './initialState';
import { actionsCreators } from './actionsCreators';
import { watchUserChanges, login, logout } from './firebase';
import type { UserData } from './user/userTypes';

export * from './types';

const config = {
    initialState,
    actionsCreators
};

export const { Provider, connect, actions } = createStore(config);

export const userActions = { login, logout };

watchUserChanges((user: UserData) => {
    console.log(user); // eslint-disable-line
    actions.userUpdateData(user);
});
