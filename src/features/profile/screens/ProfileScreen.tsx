import { ScrollView, View } from "react-native";
import ProfileHeader from "../components/ProfileHeader";
import ProfileOptions from "../components/ProfileOptions";
import SignOutOption from "../components/SignOutOption";
import UserProfileItems from "../components/UserProfileItems";

const ProfileScreen = () => {
  return (
    <View className="flex-1 bg-white ">
      <ProfileHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}

        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <UserProfileItems />
        <ProfileOptions />
        <SignOutOption />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
