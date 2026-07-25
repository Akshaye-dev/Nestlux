import { getFirebaseErrorMessage } from "@/src/features/auth/utils/getFirebaseErrorMessage";
import { AUTH_MESSAGES } from "@/src/shared/constants/messages";
import { auth } from "@/src/shared/services/firebase/firebase";
import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { useRouter } from "expo-router";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { Alert } from "react-native";
import { signInWithGoogleCredential } from "../services/authService";

const webClientId = process.env.EXPO_PUBLIC_WEB_CLIENT_ID;

let isGoogleSigninConfigured = false;

const ensureGoogleSigninConfigured = () => {
  if (isGoogleSigninConfigured) {
    return;
  }

  GoogleSignin.configure({
    webClientId,
  });
  isGoogleSigninConfigured = true;
};

const getGoogleSignInErrorMessage = (error: unknown) => {
  if (isErrorWithCode(error)) {
    switch (error.code) {
      case statusCodes.IN_PROGRESS:
        return "Google Sign-In is already in progress.";
      case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
        return "Google Play Services is unavailable or needs an update on this device.";
      case statusCodes.SIGN_IN_CANCELLED:
        return "Google Sign-In was cancelled.";
      case "DEVELOPER_ERROR":
        return "Google Sign-In is misconfigured for this app build. Verify the Android SHA-1 and package name in Firebase.";
      default:
        return error.message || AUTH_MESSAGES.DEFAULT;
    }
  }

  return getFirebaseErrorMessage(error);
};

export const useGoogleSignIn = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const googleSignIn = async () => {
    try {
      setLoading(true);
      ensureGoogleSigninConfigured();

      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });

      const signInResult = await GoogleSignin.signIn();
      if (!isSuccessResponse(signInResult)) {
        Alert.alert("Google Sign-In", "Google Sign-In was cancelled.");
        return;
      }

      const idToken = signInResult.data.idToken;
      if (!idToken) {
        throw new Error("No ID token found");
      }

      const googleCredential = GoogleAuthProvider.credential(idToken);

      await signInWithGoogleCredential(googleCredential);
      // router.replace("/home");
    } catch (error) {
      console.error("Google Sign-In Error:", error);

      if (
        isErrorWithCode(error) &&
        error.code === statusCodes.SIGN_IN_CANCELLED
      ) {
        return;
      }

      Alert.alert("Google Sign-In Error", getGoogleSignInErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  const googleSignOut = async () => {
    try {
      ensureGoogleSigninConfigured();
      await GoogleSignin.signOut(); // Disconnect Google session
      await auth.signOut(); // Sign out from Firebase as well and clear the user session from persistent storage
      router.replace("/signin");
    } catch (error) {
      console.error("Google Sign-Out Error:", error);
      Alert.alert("Google Sign-Out Error", getGoogleSignInErrorMessage(error));
    }
  };

  return {
    googleSignIn,
    googleSignOut,
    googleLoading: loading,
  };
};
