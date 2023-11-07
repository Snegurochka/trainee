import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { TChallenge } from "../modules/Challenge/services/challenge-types";
import { TUser } from "../modules/User/services/user-types";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// DB names
const UsersDB = "users";
const ChallengesDB = "challenges";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth service
export const authUser = async (email: string, password: string) => {
  const auth = getAuth();
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

// Google auth service by token
export const setAuthByToken = async (token: string) => {};

const db = getFirestore(app);

const usersCollection = collection(db, UsersDB);
const challengesCollection = collection(db, ChallengesDB);

export const getUserInfo = async (id: string) => {
  const q = query(usersCollection, where("id", "==", id));
  const querySnapshot = await getDocs(q);
  const user = [] as TUser[];

  querySnapshot.docs.forEach((doc) => {
    const data = doc.data() as TUser;
    user.push({ ...data, idDoc: doc.id });
  });
  return user.at(0);
};

type TDateFormatFb = {
  seconds: number;
  nanoseconds: number;
};

type TChallengeFb = {
  dateStart: TDateFormatFb;
  lastCheckIn: TDateFormatFb;
};

export const getChallengeInfo = async (UID: string) => {
  const q = query(challengesCollection, where("UID", "==", UID));
  const querySnapshot = await getDocs(q);
  const challenge = [] as TChallenge[];

  querySnapshot.docs.forEach((doc) => {
    const data = doc.data() as TChallengeFb;

    challenge.push({
      idChallenge: doc.id,
      dateStart: data.dateStart.seconds * 1000,     // converted s to ms
      lastCheckIn: data.lastCheckIn.seconds * 1000,     // converted s to ms
    });
  });
  return challenge.at(0);
};

export const updateLastCheckIn = async ({idChallenge, lastCheckIn}:any) => {
  updateDoc(doc(db, ChallengesDB, idChallenge), {
    lastCheckIn,
  });
};

export const updateCompleted = async (idDoc: string, completed: number[]) => {
  updateDoc(doc(db, UsersDB, idDoc), {
    completed,
  });
};

export const updateXp = async (idDoc: string, xp: number) => {
  updateDoc(doc(db, UsersDB, idDoc), {
    xp,
  });
};
