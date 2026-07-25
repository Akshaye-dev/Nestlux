import { AuthProvider } from "@/context/AuthContext";
import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="index"
          options={{
            animation: "fade",
            animationDuration: 500,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="(auth)"
          options={{ animation: "slide_from_bottom", animationDuration: 500 }}
        />
      </Stack>
    </AuthProvider>
  );
}
