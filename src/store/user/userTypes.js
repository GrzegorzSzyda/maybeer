// @flow

export type UserData = null | {
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

export type UserState = {
    isLogged: boolean | null,
    data: UserData
};
