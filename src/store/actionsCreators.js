// @flow
import { userActions } from './user/userActions';
import { wallActions } from './wall/wallActions';

export const actionsCreators = {
    ...userActions,
    ...wallActions
};
