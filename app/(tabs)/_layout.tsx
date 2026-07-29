import { AppColors } from "@/src/shared/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function TabsLayout() {
  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: AppColors.accent,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            animation: "fade",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            animation: "fade",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="saved"
          options={{
            animation: "fade",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="bookmark-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            animation: "fade",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
}
