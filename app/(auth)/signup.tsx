import AuthHeader from "@/components/AuthHeader";
import CustomButton from "@/components/CustomButton";
import InputText from "@/components/InputText";
import { FORM_MESSAGES } from "@/constants/messages";
import { AppStrings } from "@/constants/strings";
import { useGoogleSignIn } from "@/hooks/useGoogleSignIn";
import { getFirebaseErrorMessage } from "@/utils/getFirebaseErrorMessage";
import { useRouter } from "expo-router";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native";
import { auth } from "../../firebase";

const SignupScreen = () => {
  const { googleSignIn, googleLoading } = useGoogleSignIn();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signUpHandler = () => {
    if (!email || !password || !name) {
      alert(FORM_MESSAGES.EMPTY_FIELDS);
      return;
    }
    signUp();
  };

  const signUp = async () => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
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
            icon={require("../../assets/icon/visibility-icon.png")}
            secureTextEntry={true}
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
            icon={require("../../assets/icon/google-icon.png")}
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
