import { AuthProvider } from "@/src/providers/AuthProvider";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "./global.css";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="(tabs)"
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
    </>
  );
}
