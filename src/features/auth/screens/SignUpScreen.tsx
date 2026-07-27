import AuthHeader from "@/src/features/auth/components/AuthHeader";
import { useGoogleSignIn } from "@/src/features/auth/hooks/useGoogleSignIn";
import { getFirebaseErrorMessage } from "@/src/features/auth/utils/getFirebaseErrorMessage";
import { Icons } from "@/src/shared/assets/icons";
import CustomButton from "@/src/shared/components/CustomButton";
import InputText from "@/src/shared/components/InputText";
import { FORM_MESSAGES } from "@/src/shared/constants/messages";
import { AppStrings } from "@/src/shared/constants/strings";
import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native";
import { useEmailSignUp } from "../hooks/useEmailSignUp";

const SignupScreen = () => {
  const { googleSignIn, googleLoading } = useGoogleSignIn();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { signUp, loading } = useEmailSignUp({ name, email, password });

  const signUpHandler = async () => {
    if (!email || !password || !name) {
      alert(FORM_MESSAGES.EMPTY_FIELDS);
      return;
    }

    try {
      await signUp();
    } catch (error) {
      alert(getFirebaseErrorMessage(error));
    }
  };

  return (
    <View className="flex-1 bg-white">
      <AuthHeader />
      <KeyboardAvoidingView behavior="padding" className="flex-[3] rounded-xl">
        <ScrollView
          className="flex-1 px-8 "
          contentContainerClassName="pb-16"
          showsVerticalScrollIndicator={false}
        >
          <Text className="text-black  text-4xl font-plus-jakarta-sans-semi-bold mt-6 ">
            {AppStrings.signup.createAccount}
          </Text>
          <Text className="text-base font-plus-jakarta-sans text-textSecondary mt-1 mb-4">
            {AppStrings.signup.description}
          </Text>
          <Text className="text-base text-black font-plus-jakarta-sans-semi-bold  mt-4 mb-1">
            {AppStrings.signup.nameLabel}
          </Text>

          <InputText
            placeholder={AppStrings.signup.namePlaceholder}
            secureTextEntry={false}
            onChangeText={setName}
            value={name}
          />
          <Text className="text-base text-black font-plus-jakarta-sans-semi-bold  mt-4 mb-1">
            {AppStrings.signup.emailLabel}
          </Text>
          <InputText
            placeholder={AppStrings.signup.emailPlaceholder}
            secureTextEntry={false}
            onChangeText={setEmail}
            value={email}
          />
          <Text className="text-base text-black font-plus-jakarta-sans-semi-bold  mt-4 mb-1">
            {AppStrings.signup.passwordLabel}
          </Text>
          <InputText
            placeholder={AppStrings.signup.passwordPlaceholder}
            onChangeText={setPassword}
            value={password}
            isPassword={true}
          />
          <CustomButton
            buttonText={
              loading
                ? AppStrings.signup.pleaseWait
                : AppStrings.signup.createAccount
            }
            color="bg-surface"
            textColor="text-white"
            onPress={signUpHandler}
            isDisabled={loading}
          />
          <View className="flex-row items-center justify-center mt-6 mb-2">
            <View className="flex-1 h-[1px] bg-divider mt-2" />
            <Text className="text-textSecondary mx-2 text-base font-plus-jakarta-sans">
              {AppStrings.signup.continueWith}
            </Text>
            <View className="flex-1 h-[1px] bg-divider mt-2" />
          </View>

          <CustomButton
            buttonText={
              googleLoading
                ? AppStrings.signin.signingIn
                : AppStrings.signup.continueWithGoogle
            }
            icon={Icons.googleIcon}
            color="bg-white"
            textColor="text-black"
            onPress={googleSignIn}
            isDisabled={googleLoading}
          />
          <View className="flex-row mt-8 justify-center items-center">
            <Text className="text-lg font-plus-jakarta-sans text-textSecondary">
              {AppStrings.signup.signInPrompt}
            </Text>

            <Text
              onPress={() =>
                router.canGoBack()
                  ? router.back()
                  : router.replace("/(auth)/signin")
              }
              className="text-lg font-plus-jakarta-sans-semi-bold text-surface ml-1"
            >
              {AppStrings.signup.signInLink}
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
export default SignupScreen;
