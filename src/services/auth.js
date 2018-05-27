// @flow
import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseService } from './firebase';

const provider = new firebase.auth.FacebookAuthProvider();

export const authService = {
    login: () => firebaseService.auth().signInWithPopup(provider),

    logout: () => firebaseService.auth().signOut(),

    watchUserChanges: (cb: any) => {
        firebaseService.auth().onAuthStateChanged(cb);
    }
};
