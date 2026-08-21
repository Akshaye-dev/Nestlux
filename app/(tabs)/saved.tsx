import SavedScreen from "@/src/features/saved/screens/SavedScreen";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Saved = () => {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <SavedScreen />
    </SafeAreaView>
  );
};

export default Saved;
