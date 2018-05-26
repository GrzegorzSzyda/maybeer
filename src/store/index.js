// @flow
import * as createStore from 'react-waterfall';

import { initialState } from './initialState';
import { actionsCreators } from './actionsCreators';

const config = {
    initialState,
    actionsCreators
};

export const { Provider, connect, actions } = createStore(config);
export * from './types';
