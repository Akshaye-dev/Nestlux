import { Stack } from "expo-router";

export default function AuthLayout() {
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
