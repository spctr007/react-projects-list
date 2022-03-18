import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBc-WZNZ8zYilA_v7qij6vmF-1tcyJDpRM",
    authDomain: "react-projects-list.firebaseapp.com",
    databaseURL: "https://react-projects-list-default-rtdb.firebaseio.com",
    projectId: "react-projects-list",
    storageBucket: "react-projects-list.appspot.com",
    messagingSenderId: "169905327088",
    appId: "1:169905327088:web:c9714b379af0b29f22ab35",
    measurementId: "G-KQ09PHL4KZ"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
