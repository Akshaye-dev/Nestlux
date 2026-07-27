import { useState } from "react";
import { signInWithEmail } from "../services/authService";

export function useEmailSignIn(email: string, password: string) {
  const [loading, setLoading] = useState(false);
  const signIn = async () => {
    try {
      setLoading(true);
      await signInWithEmail(email, password);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return { signIn, loading };
}
