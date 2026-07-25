import { auth } from "@/src/shared/services/firebase/firebase";
import {
    AuthCredential,
    createUserWithEmailAndPassword,
    signInWithCredential,
    signInWithEmailAndPassword,
} from "firebase/auth";

export const signInWithEmail = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signInWithGoogleCredential = (credential: AuthCredential) => {
  return signInWithCredential(auth, credential);
};

export const signUpWithEmail = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
