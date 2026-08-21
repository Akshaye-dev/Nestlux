import Search from "@/src/shared/components/Search";
import { AppStrings } from "@/src/shared/constants/strings";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { InfiniteData, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useProperties } from "../../../shared/hooks/useProperties";
import { usePropertyCount } from "../../../shared/hooks/usePropertyCount";
import { Property } from "../../home/models/domain/Property";
import Filters from "../components/Filters";
import FilterContent from "../components/FiltersContent";
import SearchList from "../components/SearchList";
import SearchListHeader from "../components/SearchListHeader";
import { useDebounce } from "../hooks/useDebounce";
import { useSortProperties } from "../hooks/useSortProperties";
import { PropertyFilters } from "../types/filters";

const SearchScreen = () => {
  const [propertyType, setPropertyType] = useState("all");
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<
    InfiniteData<{ properties: Property[] }>
  >(["properties", { featured: false, limit: 15, propertyType: "all" }]);
  const propertyCount = usePropertyCount(propertyType);
  const [viewMode, setViewMode] = useState("grid");
  const [searchedQuery, setSearchedQuery] = useState("");
  const [listingType, setListingType] = useState("all");
  const [filters, setFilters] = useState<PropertyFilters>({});
  const debounceSearchQuery = useDebounce(searchedQuery, 300);
  const {
    propertiesData,
    loading,
    loadingMore,
    hasMore,
    loadMore,
    error,
    isFetching,
  } = useProperties(filters);
  const [sortOrder, setSortOrder] = useState("");
  const cachedProperties = data?.pages.flatMap((page) => page.properties) || [];
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["65%"], []); // Set the snap points for the bottom sheet modal

  useEffect(() => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      searchQuery: debounceSearchQuery,
    }));
  }, [debounceSearchQuery]);

  const propertiesList =
    propertiesData.length > 0 ? propertiesData : cachedProperties;
  const filteredProperties =
    listingType === "all"
      ? propertiesList
      : propertiesList.filter(
          (property) => property.listingType === listingType,
        );
  const sortedProperties = useSortProperties(filteredProperties, sortOrder);

  if (!sortedProperties || sortedProperties.length === 0) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-gray-600 text-base font-plus-jakarta-sans-semi-bold">
          No properties found.
        </Text>
      </View>
    );
  }

  const propertyTypeHandler = (type: string) => {
    setListingType(type);
  };

  const searchInputHandler = (input: string) => {
    setSearchedQuery(input);
  };

  const handleApplyFilters = (filters: PropertyFilters) => {
    setFilters(filters);
    bottomSheetRef.current?.dismiss();
  };

  return (
    <View className="flex-1 px-4">
      <View className="flex-1">
        <Text className="text-xl font-plus-jakarta-sans-semi-bold text-black mt-4 mb-3">
          Discover
        </Text>
        <Search
          placeholder={AppStrings.search.placeholder}
          isRightIcon={false}
          isEditable={true}
          onChangeText={searchInputHandler}
        />
        <Filters
          isFetching={isFetching}
          onPress={propertyTypeHandler}
          onPressFilter={() => bottomSheetRef.current?.present()}
        />
        <SearchListHeader
          propertyCount={propertyCount}
          onLayoutTypePress={(viewMode) => setViewMode(viewMode)}
          setPriceSort={(sortOrder) => setSortOrder(sortOrder)}
        />
        <SearchList propertiesData={sortedProperties} viewMode={viewMode} />
      </View>
      <BottomSheetModal
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={0}
        enablePanDownToClose
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            opacity={0.5}
          />
        )}
      >
        <BottomSheetView>
          <FilterContent
            initialFilters={filters}
            onApplyFilters={handleApplyFilters}
            onClose={() => bottomSheetRef.current?.dismiss()}
          />
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
