import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import config from "../../../environment.json";

if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });
}

const getCurrentUser = (): Promise<firebase.User> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase
      .auth()
      .onAuthStateChanged(resolve, reject, () => {
        unsubscribe();
      });
  });
};

const snapshotToArray = (
  snapshot: firebase.firestore.QuerySnapshot,
): firebase.firestore.QueryDocumentSnapshot[] => {
  const array = [];
  snapshot.forEach((doc) => array.push(doc));
  return array;
};

export { firebase, getCurrentUser, snapshotToArray };
