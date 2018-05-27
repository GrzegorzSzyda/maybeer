// @flow

export type WallItem = {
    _id: string,
    title: string,
    description: string
};

export type WallState = {
    loading: boolean,
    entries: WallItem[]
};
