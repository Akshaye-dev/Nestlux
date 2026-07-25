import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="home" options={{ animation: "fade" }} />
      <Tabs.Screen name="profile" options={{ animation: "fade" }} />
    </Tabs>
  );
}
