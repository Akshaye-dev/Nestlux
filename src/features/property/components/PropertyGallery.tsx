import { AppColors } from "@/src/shared/constants/colors";
import { useFavoriteProperties } from "@/src/shared/hooks/useFavoriteProperties";
import { auth } from "@/src/shared/services/firebase/firebase";
import { handleShare } from "@/src/shared/utils/share";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Carousel, CarouselRef } from "react-native-reanimated-carousel";
import { Property } from "../../home/models/domain/Property";

const PropertyGallery = ({ property }: { property: Property }) => {
  const userId = auth.currentUser?.uid;
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<CarouselRef>(null);
  const [isSaved, setIsSaved] = useState(property.isFavorite);
  const router = useRouter();
  const { toggleFavorite } = useFavoriteProperties();

  const backHandler = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  useEffect(() => {
    setIsSaved((userId && property.favorites?.[userId]) || false);
  }, []);

  const saveHandler = () => {
    const newSaved = !isSaved;
    console.log("saved1:", isSaved);
    setIsSaved(newSaved);
    console.log("saved2:", isSaved);
    toggleFavorite(property.id, newSaved);
  };

  return (
    <View>
      <View>
        <Carousel
          ref={carouselRef}
          renderWindowSize={3}
          onProgressChange={(progress) => {
            const index = Math.round(progress);
            setCurrentIndex(index);
          }}
          style={{
            width: Dimensions.get("window").width,
            height: 250,
          }}
          data={property.images}

          onSnapToItem={setCurrentIndex}
          renderItem={({ item }) => (
            <View>
              <Image source={{ uri: item }} className="w-full h-full " />
            </View>
          )}
        />

        <View className="absolute bottom-3 left-0 right-0 flex-row justify-center">
          {property.images.map((_, index) => (
            <View
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                currentIndex === index ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </View>

        <View className="bg-accent absolute rounded-xl px-2 py-1 bottom-2 right-2">
          <Text className="text-xs text-white font-plus-jakarta-sans-semi-bold">
            {property.listingType}
          </Text>
        </View>
      </View>

      <View className="flex-row absolute top-12 px-4 justify-between items-center w-full">
        <Pressable onPress={backHandler}>
          <View className="bg-gray-600 rounded-full p-2">
            <Ionicons name="chevron-back" size={18} color={AppColors.white} />
          </View>
        </Pressable>

        <View className="flex-row gap-3 items-center justify-center">
          <Pressable onPress={saveHandler}>
            <View className="bg-gray-600 rounded-full p-2 ">
              <Ionicons
                name={isSaved ? "heart" : "heart-outline"}
                size={18}
                color={isSaved ? AppColors.red : AppColors.white}
              />
            </View>
          </Pressable>
          <Pressable onPress={handleShare}>
            <View className="bg-gray-600 rounded-full p-2 ">
              <Ionicons
                name="share-social-outline"
                size={18}
                color={AppColors.white}
              />
            </View>
          </Pressable>
        </View>
      </View>

      <View className="items-center">
        <FlatList
          data={property.images}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          keyExtractor={(item, index) => index.toString()}

          contentContainerStyle={{
            marginTop: 8,
            alignItems: "center",
          }}
          renderItem={({ item, index }) => (
            <Pressable
              onPress={() => {
                setCurrentIndex(index);
                carouselRef.current?.scrollTo({ index, animated: true });
              }}
            >
              <Image
                source={{ uri: item }}
                className={`w-16 h-12 rounded-2xl mr-2 ${currentIndex === index ? "border-2 border-accent" : "border border-gray-300"}`}
                resizeMode="cover"
              />
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

export default PropertyGallery;

const styles = StyleSheet.create({});
