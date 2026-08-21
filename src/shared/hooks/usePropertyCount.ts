import { getPropertyCount } from "@/src/entities/properties/propertyCountApi";
import { useQuery } from "@tanstack/react-query";

export function usePropertyCount(selectedCategory: string) {
  const { data: propertyCount = 0 } = useQuery({
    queryKey: ["property-count", selectedCategory],
    queryFn: () => getPropertyCount(selectedCategory),
    placeholderData: (prevData) => prevData,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
  return propertyCount;
}
