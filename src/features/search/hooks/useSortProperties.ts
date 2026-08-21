import { useMemo } from "react";
import { Property } from "../../home/models/domain/Property";

export const useSortProperties = (
  properties: Property[],
  sortOrder: string,
) => {
  const sortedProperties = useMemo(() => {
    const sorted = [...properties];
    if (sortOrder === "asc") {
      console.log("Sorting ascending");
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      console.log("Sorting descending");
      sorted.sort((a, b) => b.price - a.price);
    }
    return sorted;
  }, [properties, sortOrder]);

  return sortedProperties;
};
