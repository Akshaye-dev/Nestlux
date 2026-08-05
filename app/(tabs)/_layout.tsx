import { AppColors } from "@/src/shared/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function TabsLayout() {
  const tabBarIconHandler = (
    focused: boolean,
    color: string,
    size: number,
    icon: string,
  ) => {
    return (
      <View
        className={`${focused ? "bg-accentLight  " : "bg-transparent "} rounded-xl px-2 py-1 justify-center items-center `}
      >
        <Ionicons name={icon} size={size * 0.7} color={color} />
      </View>
    );
  };
  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: AppColors.accent,
          tabBarStyle: {
            paddingBottom: 4,
            paddingTop: 4,
          },
        }}
      >
        <Tabs.Screen
          name="home"

          options={{
            title: "Home",
            animation: "fade",
            tabBarIcon: ({ color, size, focused }) =>
              tabBarIconHandler(focused, color, size, "home-outline"),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
            animation: "fade",
            tabBarIcon: ({ color, size, focused }) =>
              tabBarIconHandler(focused, color, size, "search-outline"),
          }}
        />
        <Tabs.Screen
          name="saved"
          options={{
            title: "Saved",
            animation: "fade",
            tabBarIcon: ({ color, size, focused }) =>
              tabBarIconHandler(focused, color, size, "bookmark-outline"),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            animation: "fade",
            tabBarIcon: ({ color, size, focused }) =>
              tabBarIconHandler(focused, color, size, "person-outline"),
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
}
