// @flow
import type { UserState } from './user/userTypes';
import type { WallState } from './wall/wallTypes';

export type State = {
    user: UserState,
    wall: WallState
};
