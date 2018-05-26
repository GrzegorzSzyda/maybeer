// @flow
import * as createStore from 'react-waterfall';

import { initialState } from './initialState';
import { actionsCreators } from './actionsCreators';
import { watchUserChanges, login, logout } from './firebase';
import type { UserState } from './types';

export * from './types';

const config = {
    initialState,
    actionsCreators
};

export const { Provider, connect, actions } = createStore(config);

export const userActions = { login, logout };

watchUserChanges((user: UserState) => {
    console.log(user); // eslint-disable-line
    actions.updateUser(user);
});
