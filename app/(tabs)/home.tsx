import HomeScreen from "@/src/features/home/screens/HomeScreen";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }} edges={["top"]}>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default Home;
