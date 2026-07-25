import { useGoogleSignIn } from "@/hooks/useGoogleSignIn";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Home = () => {
  const { googleSignOut } = useGoogleSignIn();
  return (
    <View>
      <Text>Home</Text>
      <Button title="Sign Out" onPress={googleSignOut} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
