// @flow
import 'firebase/firestore';
import { firebaseService } from './firebase';

const service = firebaseService.firestore();
service.settings({ timestampsInSnapshots: true });

export const firestoreService = service;
