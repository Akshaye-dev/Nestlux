import { useAuth } from "@/src/providers/AuthProvider";
import { useRouter } from "expo-router";
import { useEffect } from "react";
type UseSplashNavigationProps = {
  animationFinished: boolean;
};

export function useSplashNavigation({
  animationFinished,
}: UseSplashNavigationProps) {
  const router = useRouter();
  const { loading, user } = useAuth();

  useEffect(() => {
    if (!animationFinished || loading) {
      return; // Wait until firebase auth state is determined before navigating to the next screen
    }

    router.replace(user ? "/home" : "/signin");
  }, [animationFinished, loading, user, router]);
}
