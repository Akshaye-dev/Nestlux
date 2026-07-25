import {
  AUTH_MESSAGES,
  FIREBASE_ERROR_MESSAGES,
} from "@/src/shared/constants/messages";
import { FirebaseError } from "firebase/app";
export const getFirebaseErrorMessage = (error: unknown) => {
  if (!(error instanceof FirebaseError)) {
    return "Something went wrong. Please try again.";
  }
  return (
    FIREBASE_ERROR_MESSAGES[
      error.code as keyof typeof FIREBASE_ERROR_MESSAGES
    ] ?? AUTH_MESSAGES.DEFAULT
  );
};
