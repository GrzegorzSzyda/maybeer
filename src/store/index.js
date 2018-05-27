// @flow
import * as createStore from 'react-waterfall';
import { initialState } from './initialState';
import { actionsCreators } from './actionsCreators';
import { createAsyncActions } from './asyncActions';
import { authService } from '../services/auth';
import type { UserData } from './user/userTypes';

export * from './types';

export const { Provider, connect, actions } = createStore({
    initialState,
    actionsCreators
});

export const { asyncActions } = createAsyncActions(actions);

authService.watchUserChanges((user: UserData) => {
    console.log('watchUserChanges', user); // eslint-disable-line
    actions.userUpdateData(user);
});
