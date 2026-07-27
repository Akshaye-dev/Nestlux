import AuthHeader from "@/src/features/auth/components/AuthHeader";
import { useGoogleSignIn } from "@/src/features/auth/hooks/useGoogleSignIn";
import { getFirebaseErrorMessage } from "@/src/features/auth/utils/getFirebaseErrorMessage";
import { Icons } from "@/src/shared/assets/icons";
import CustomButton from "@/src/shared/components/CustomButton";
import InputText from "@/src/shared/components/InputText";
import { FORM_MESSAGES } from "@/src/shared/constants/messages";
import { AppStrings } from "@/src/shared/constants/strings";
import { Link, useRouter } from "expo-router";
import { FirebaseError } from "firebase/app";
import React, { useState } from "react";
import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native";
import { useEmailSignIn } from "../hooks/useEmailSignIn";

const SigninScreen = () => {
  const router = useRouter();
  const { googleSignIn, googleLoading } = useGoogleSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, loading } = useEmailSignIn(email, password);

  const signInHandler = async () => {
    if (!email || !password) {
      alert(FORM_MESSAGES.EMPTY_EMAIL_PASSWORD);
      return;
    }
    try {
      await signIn();
    } catch (error) {
      alert(getFirebaseErrorMessage(error as FirebaseError));
    }
  };

  return (
    <View className="flex-1 bg-white">
      <AuthHeader />
      <KeyboardAvoidingView behavior="padding" className="flex-[3] rounded-xl">
        <ScrollView
          className="flex-1 px-8"
          contentContainerClassName="pb-8"
          showsVerticalScrollIndicator={false}
        >
          <Text className="text-black  text-4xl font-plus-jakarta-sans-semi-bold mt-6 ">
            {AppStrings.signin.welcome}
          </Text>
          <Text className="text-base font-plus-jakarta-sans text-textSecondary mt-1 mb-4">
            {AppStrings.signin.description}
          </Text>
          <Text className="text-base text-black font-plus-jakarta-sans-semi-bold  mt-4 mb-1">
            {AppStrings.signin.emailLabel}
          </Text>
          <InputText
            placeholder={AppStrings.signin.emailPlaceholder}
            secureTextEntry={false}
            onChangeText={setEmail}
            value={email}
          />
          <Text className="text-base text-black font-plus-jakarta-sans-semi-bold  mt-4 mb-1">
            {AppStrings.signin.passwordLabel}
          </Text>
          <InputText
            placeholder={AppStrings.signin.passwordPlaceholder}
            onChangeText={setPassword}
            value={password}
            isPassword={true}
          />
          <Link href="/forgotpassword" asChild>
            <Text className="text-base font-plus-jakarta-sans-semi-bold text-surface self-end mt-4 mb-4">
              {AppStrings.signin.forgotPassword}
            </Text>
          </Link>

          <CustomButton
            buttonText={
              loading ? AppStrings.signin.signingIn : AppStrings.signin.signText
            }
            color="bg-surface"
            textColor="text-white"
            onPress={signInHandler}
            isDisabled={loading}
          />
          <View className="flex-row items-center justify-center mt-6 mb-2">
            <View className="flex-1 h-[1px] bg-divider mt-2" />
            <Text className="text-textSecondary mx-2 text-base font-plus-jakarta-sans">
              {AppStrings.signin.continueWith}
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
              {AppStrings.signin.signUpPrompt}
            </Text>

            <Text
              onPress={() => router.push("/(auth)/signup")}
              className="text-lg font-plus-jakarta-sans-semi-bold text-surface ml-1"
            >
              {AppStrings.signin.signUpLink}
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SigninScreen;
