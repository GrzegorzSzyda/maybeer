// @flow
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

export const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyBQ0-ft8KWF9GF6cOtQmKcvp_OHfvclebE',
    authDomain: 'maybeer-e3df6.firebaseapp.com',
    databaseURL: 'https://maybeer-e3df6.firebaseio.com',
    projectId: 'maybeer-e3df6',
    storageBucket: 'maybeer-e3df6.appspot.com',
    messagingSenderId: '960385474400'
});

const provider = new firebase.auth.FacebookAuthProvider();

export const login = () =>
    firebaseApp
        .auth()
        .signInWithPopup(provider)
        .then(result => {
            console.log('[auth] Login ok:', result); // eslint-disable-line
            // var token = result.credential.accessToken;
            // var user = result.user;
        })
        .catch(error => {
            console.log('[auth] Login error:', error); // eslint-disable-line
        });

firebaseApp
    .auth()
    .getRedirectResult()
    .then(result => {
        console.log('[auth] Redirect result', result); // eslint-disable-line
    })
    .catch(error => {
        console.log('[auth] Redirect error', error); // eslint-disable-line
    });

export const watchUserChanges = (cb: any) => {
    firebase.auth().onAuthStateChanged(cb);
};

export const logout = () => firebase.auth().signOut();
