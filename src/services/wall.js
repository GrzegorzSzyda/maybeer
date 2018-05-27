// @flow
import { firestoreService } from './firestore';

const WALL_COLLECTION = 'wall';

export const wallService = {
    getWallItems: () =>
        firestoreService
            .collection(WALL_COLLECTION)
            .get()
            .then(querySnapshot => {
                const collection = [];
                querySnapshot.forEach(doc => {
                    collection.push({
                        _id: doc.id,
                        ...doc.data()
                    });
                });
                return collection;
            })
};
