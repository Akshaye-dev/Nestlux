import { Share } from "react-native";

export const handleShare = async () => {
  try {
    await Share.share({
      message: "Check out this property I found on Nestlux!",
    });
  } catch (error) {
    console.error("Error sharing property:", error);
  }
};
