import { useAuth } from "@/src/providers/AuthProvider";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const { user, loading } = useAuth();
  if (loading) {
    return null;
  }
  if (user) {
    return <Redirect href="/home" />;
  }
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="signin"
        options={{ animation: "slide_from_left", animationDuration: 500 }}
      />

      <Stack.Screen
        name="signup"
        options={{ animation: "slide_from_right", animationDuration: 500 }}
      />
    </Stack>
  );
}
