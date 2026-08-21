import { AppColors } from "@/src/shared/constants/colors";
import { AppStrings } from "@/src/shared/constants/strings";
import { Ionicons } from "@expo/vector-icons";
import { Slider } from "@miblanchard/react-native-slider";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import {
  bedroomOptions,
  propertyCategories,
} from "../../../shared/mock/filtersData";
import { PropertyFilters } from "../types/filters";

type FilterContentProps = {
  initialFilters?: PropertyFilters;
  onApplyFilters: (filters: PropertyFilters) => void;
  onClose?: () => void;
};

const propertyTypes = propertyCategories;
const bedroomOptionsList = bedroomOptions;
const FilterContent = ({
  initialFilters,
  onApplyFilters,
  onClose,
}: FilterContentProps) => {
  const [tempFilters, setTempFilters] = React.useState<PropertyFilters>(
    initialFilters || {},
  );
  console.log("tempFilters::::", initialFilters);
  const [priceRange, setPriceRange] = useState([1000, 500000]);
  const minPrice = tempFilters.minPrice ?? 1000;
  const maxPrice = tempFilters.maxPrice ?? 500000;

  const priceChangeHandler = (values: number[]) => {
    console.log("PriceRangeSlider::::selected", values);
    setTempFilters((prevFilters) => ({
      ...prevFilters,
      minPrice: values[0],
      maxPrice: values[1],
    }));
    setPriceRange(values);
  };

  const applyFiltersHandler = () => {
    console.log("tempFilters::::", tempFilters);
    onApplyFilters(tempFilters);
  };

  const handleResetFilters = () => {
    setTempFilters({});
  };
  return (
    <View className="flex-1 bg-white px-4 pb-20">
      <View className="flex-row justify-between items-center">
        <Text className="text-black text-lg font-plus-jakarta-sans-semi-bold py-6">
          {AppStrings.filters}
        </Text>
        <Ionicons
          name="close"
          size={18}
          color={AppColors.gray[600]}
          onPress={onClose}
        />
      </View>
      <Text className="text-black text-base font-plus-jakarta-sans-semi-bold ">
        {AppStrings.propertyType}
      </Text>
      <View className="flex-row flex-wrap">
        {propertyTypes.map((type) => (
          <Pressable
            key={type.id}
            onPress={() => {
              setTempFilters((prevFilters) => ({
                ...prevFilters,
                propertyType: type.id,
              }));
            }}
          >
            <View
              className={` ${tempFilters.propertyType === type.id ? "bg-accent" : "bg-white"}   border border-gray-200 rounded-3xl px-4 py-1 mt-2 mr-2 mb-2`}
            >
              <Text
                className={` ${tempFilters.propertyType === type.id ? "text-white" : "text-black"} text-sm`}
              >
                {type.title}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
      <Text className="text-black text-base font-plus-jakarta-sans-semi-bold mt-4">
        {AppStrings.bedrooms}
      </Text>
      <View className="flex-row flex-wrap">
        {bedroomOptionsList.map((option) => (
          <Pressable
            key={option.id}
            onPress={() => {
              setTempFilters((prevFilters) => ({
                ...prevFilters,
                noOfBedrooms: option.id,
              }));
            }}
          >
            <View
              className={`${tempFilters.noOfBedrooms === option.id ? "bg-accent" : "bg-white"} border border-gray-200 rounded-3xl px-4 py-1 mt-2 mr-2 mb-2`}
            >
              <Text
                className={`${tempFilters.noOfBedrooms === option.id ? "text-white" : "text-black"} text-sm font-plus-jakarta-sans`}
              >
                {option.title}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
      <Text className="text-black text-base font-plus-jakarta-sans-semi-bold mt-4">
        {AppStrings.priceRange}
      </Text>

      <View className="flex-1 justify-center bg-white pb-1 ">
        <View className="flex-row justify-end gap-2 ">
          <Text className="text-accent text-sm font-plus-jakarta-sans-semi-bold">
            Min: ${minPrice} - Max: ${maxPrice}
          </Text>
        </View>

        <Slider
          value={[minPrice, maxPrice]}
          onSlidingComplete={priceChangeHandler}
          minimumValue={1000}
          maximumValue={500000}
          step={1000}
          minimumTrackTintColor={AppColors.accent}
          maximumTrackTintColor={AppColors.gray[300]}
          thumbTintColor={AppColors.accent}
        />
      </View>

      <View className="flex-1 flex-row justify-between  mt-4  gap-2 pb-2">
        <Pressable
          className="flex-1 flex-row mt-6 overflow-hidden  rounded-3xl  elevation-sm "
          android_ripple={{ color: AppColors.ripple, foreground: true }}
          onPress={handleResetFilters}
        >
          <View className="flex-1 flex-row bg-gray-500 justify-center  rounded-3xl py-3  items-center ">
            <Text className="text-white text-base font-plus-jakarta-sans-semi-bold">
              {AppStrings.reset}
            </Text>
          </View>
        </Pressable>

        <Pressable
          className="flex-1 flex-row mt-6 overflow-hidden  rounded-3xl  elevation-sm"
          android_ripple={{ color: AppColors.ripple, foreground: true }}
          onPress={applyFiltersHandler}
        >
          <View className="flex-1 flex-row bg-accent justify-center  rounded-3xl py-3  items-center ">
            <Text className="text-white text-base font-plus-jakarta-sans-semi-bold">
              {AppStrings.apply}
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default FilterContent;
