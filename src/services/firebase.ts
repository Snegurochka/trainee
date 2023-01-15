import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, doc, getDocs, getFirestore, query, updateDoc, where } from "firebase/firestore";
import { TUser } from "../modules/User/services/user-types";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth service
export const authUser = async (email: string, password: string) => {
  const auth = getAuth();
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
}

// Google auth service by token
export const setAuthByToken = async (token: string) => {
}

const db = getFirestore(app);

const usersCollection = collection(db, "users");

export const getUserInfo = async (id: string) => {
  const q = query(usersCollection, where("id", "==", id));
  const querySnapshot = await getDocs(q);
  const user = [] as TUser[];

  querySnapshot.docs.forEach((doc) => {
    const data = doc.data() as TUser;
    user.push({...data, idDoc: doc.id});
  });
  return user[0];
}

export const updateCompleted = async (idDoc: string, completed: string[]) => {
  updateDoc(doc(db, "users", idDoc), {
    completed
  });
}