import { useGoogleSignIn } from "@/src/features/auth/hooks/useGoogleSignIn";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  const { googleSignOut } = useGoogleSignIn();
  return (
    <View>
      <Text>Home</Text>
      <Button title="Sign Out" onPress={googleSignOut} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
