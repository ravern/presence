import firebase from "@firebase/app";
import "@firebase/auth";

import config from "../../environment.json";

if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
}

export default firebase;
