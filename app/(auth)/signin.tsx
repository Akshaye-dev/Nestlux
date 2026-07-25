import AuthHeader from "@/components/AuthHeader";
import CustomButton from "@/components/CustomButton";
import InputText from "@/components/InputText";
import { FORM_MESSAGES } from "@/constants/messages";
import { AppStrings } from "@/constants/strings";
import { useGoogleSignIn } from "@/hooks/useGoogleSignIn";
import { getFirebaseErrorMessage } from "@/utils/getFirebaseErrorMessage";
import { Link, useRouter } from "expo-router";
import { FirebaseError } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native";

const Signin = () => {
  const router = useRouter();
  const { googleSignIn, googleLoading } = useGoogleSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signInHandler = () => {
    if (!email || !password) {
      alert(FORM_MESSAGES.EMPTY_EMAIL_PASSWORD);
      return;
    }
    signInWithEmail();
  };
  const signInWithEmail = async () => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(getAuth(), email, password);
    } catch (error) {
      const err = error as FirebaseError;
      alert(getFirebaseErrorMessage(err));
    } finally {
      setLoading(false);
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
            icon={require("../../assets/icon/google-icon.png")}
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

export default Signin;
