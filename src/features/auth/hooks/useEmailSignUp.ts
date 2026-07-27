import { useState } from "react";
import { signUpWithEmail } from "../services/authService";
type emailSignUpProps = {
  name: string;
  email: string;
  password: string;
};
export function useEmailSignUp({ name, email, password }: emailSignUpProps) {
  const [loading, setLoading] = useState(false);
  const signUp = async () => {
    setLoading(true);
    try {
      await signUpWithEmail(email, password);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return { signUp, loading };
}
