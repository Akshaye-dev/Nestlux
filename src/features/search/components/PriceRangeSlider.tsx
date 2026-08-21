import { AppColors } from "@/src/shared/constants/colors";
import { Slider } from "@miblanchard/react-native-slider";
import React, { useState } from "react";
import { Text, View } from "react-native";

type PriceRangeSliderProps = {
  priceValues?: number[];
  onPriceChange: (values: number[]) => void;
};

const PriceRangeSlider = ({
  priceValues = [1000, 500000],
  onPriceChange,
}: PriceRangeSliderProps) => {
  const [priceRange, setPriceRange] = useState([1000, 500000]);
  const minPrice = priceValues[0] ?? 1000;
  const maxPrice = priceValues[1] ?? 500000;

  const priceChangeHandler = (values: number[]) => {
    setPriceRange(values);
    onPriceChange(values); // Call the callback function with the new values
  };
  return (
    <View className="flex-1 justify-center bg-white pb-1 ">
      {/* Display current values */}
      <View className="flex-row justify-end gap-2 ">
        <Text className="text-accent text-sm font-plus-jakarta-sans-semi-bold">
          Min: ${minPrice} - Max: ${maxPrice}
        </Text>
      </View>

      <Slider
        value={priceRange}
        onValueChange={priceChangeHandler}
        minimumValue={1000}
        maximumValue={500000}
        step={1000}
        minimumTrackTintColor={AppColors.accent}
        maximumTrackTintColor={AppColors.gray[300]}
        thumbTintColor={AppColors.accent}
      />
    </View>
  );
};

export default PriceRangeSlider;
