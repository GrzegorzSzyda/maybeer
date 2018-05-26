// @flow
import type { UserState } from './user/userTypes';

type WallItem = {
    id: string,
    title: string
};

export type WallState = WallItem[];

export type State = {
    user: UserState,
    wall: WallState
};
