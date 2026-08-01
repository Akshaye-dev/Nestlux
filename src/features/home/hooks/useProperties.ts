import { fetchInfiniteProperties } from "@/src/entities/properties/propertiesApi";
import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import { QueryDocumentSnapshot } from "firebase/firestore";
type PropertyFilters = {
  type?: string;
  featured?: boolean;
  limit?: number;
};
export function useProperties(filters: PropertyFilters) {
  const {
    data: properties,
    isLoading,
    error,
    isFetchingNextPage,
    fetchNextPage,
    isFetching,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["properties", filters],
    queryFn: ({ pageParam }) => fetchInfiniteProperties({ filters, pageParam }),
    placeholderData: keepPreviousData,
    initialPageParam: undefined as QueryDocumentSnapshot | undefined,
    getNextPageParam: (lastPage) => {
      return lastPage.hasMore ? lastPage.nextCursor : undefined;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const allProperties =
    properties?.pages.flatMap((page) => page.properties) || []; // Flatten the pages into a single array of properties

  return {
    propertiesData: allProperties,
    loading: isLoading,
    loadingMore: isFetchingNextPage,
    hasMore: hasNextPage,
    loadMore: fetchNextPage,
    isFetching: isFetching,
    error: error as Error | null,
  };
}
