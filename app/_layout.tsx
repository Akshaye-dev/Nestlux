import { AuthProvider } from "@/src/providers/AuthProvider";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "./global.css";

const queryClient = new QueryClient();
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <QueryClientProvider client={queryClient}>
        <BottomSheetModalProvider>
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
                options={{
                  animation: "slide_from_bottom",
                  animationDuration: 500,
                }}
              />
            </Stack>
          </AuthProvider>
        </BottomSheetModalProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
