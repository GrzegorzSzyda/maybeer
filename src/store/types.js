// @flow
type WallItem = {
    id: string,
    title: string
};

export type WallState = WallItem[];

export type UserState = null | {
    uid: string,
    displayName: string,
    photoURL: string,
    email: string,
    emailVerified: boolean,
    phoneNumber?: any,
    isAnonymous: boolean,
    providerData: {
        uid: string,
        displayName: string,
        photoURL: string,
        email: string,
        phoneNumber?: any,
        providerId: string
    }[],
    apiKey: string,
    appName: string,
    authDomain: string,
    stsTokenManager: {
        apiKey: string,
        refreshToken: string,
        accessToken: string,
        expirationTime: number
    },
    redirectEventId?: any,
    lastLoginAt: string,
    createdAt: string
};

export type State = {
    user: UserState,
    wall: WallState
};
