// @flow
type WallItem = {
    id: string,
    title: string
};

export type WallState = WallItem[];

export type State = {
    wall: WallState
};
