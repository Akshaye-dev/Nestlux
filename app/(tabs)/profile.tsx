import ProfileScreen from "@/src/features/profile/screens/ProfileScreen";
import { StatusBar } from "expo-status-bar";

import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-accent" edges={["top"]}>
      <StatusBar style="dark" />
      <ProfileScreen />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
