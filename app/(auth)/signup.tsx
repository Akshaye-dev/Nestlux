import AuthHeader from "@/components/AuthHeader";
import CustomButton from "@/components/CustomButton";
import InputText from "@/components/InputText";
import { AppStrings } from "@/constants/strings";
import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";

const Signup = () => {
  return (
    <View className="flex-1 bg-white">
      <AuthHeader />
      <ScrollView
        className="flex-[3] rounded-xl px-8"
        contentContainerClassName="pb-24"
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-black  text-4xl font-PlusJakartaSansSemiBold mt-6 ">
          {AppStrings.signup.createAccount}
        </Text>
        <Text className="text-base font-PlusJakartaSans text-textSecondary mt-1 mb-4">
          {AppStrings.signup.description}
        </Text>
        <Text className="text-base text-black font-PlusJakartaSansSemiBold  mt-4 mb-1">
          {AppStrings.signup.nameLabel}
        </Text>

        <InputText
          placeholder={AppStrings.signup.namePlaceholder}
          secureTextEntry={false}
        />
        <Text className="text-base text-black font-PlusJakartaSansSemiBold  mt-4 mb-1">
          {AppStrings.signup.emailLabel}
        </Text>
        <InputText
          placeholder={AppStrings.signup.emailPlaceholder}
          secureTextEntry={false}
        />
        <Text className="text-base text-black font-PlusJakartaSansSemiBold  mt-4 mb-1">
          {AppStrings.signup.passwordLabel}
        </Text>
        <InputText
          placeholder={AppStrings.signup.passwordPlaceholder}
          icon={require("../../assets/icon/visibility-icon.png")}
          secureTextEntry={true}
        />
        <CustomButton
          buttonText={AppStrings.signup.createAccount}
          color="bg-surface"
          textColor="text-white"
        />
        <View className="flex-row items-center justify-center mt-6 mb-2">
          <View className="flex-1 h-[1px] bg-divider mt-2" />
          <Text className="text-textSecondary mx-2 text-base font-PlusJakartaSans">
            {AppStrings.signup.continueWith}
          </Text>
          <View className="flex-1 h-[1px] bg-divider mt-2" />
        </View>

        <CustomButton
          buttonText={AppStrings.signup.continueWithGoogle}
          icon={require("../../assets/icon/google-icon.png")}
          color="bg-white"
          textColor="text-black"
        />
        <View className="flex-row mt-8 justify-center items-center">
          <Text className="text-lg font-PlusJakartaSans text-textSecondary">
            {AppStrings.signup.signInPrompt}
          </Text>
          <Link href="/signin" asChild>
            <Text className="text-lg font-PlusJakartaSansSemiBold text-surface ml-1">
              {AppStrings.signup.signInLink}
            </Text>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
};
export default Signup;
