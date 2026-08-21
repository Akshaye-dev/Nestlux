import { mapProperty } from "@/src/features/home/mapper/propertyMapper";
import { ApiProperty } from "@/src/features/home/models/api/ApiProperty";
import { PropertyFilters } from "@/src/features/search/types/filters";
import { firestoreDB } from "@/src/shared/services/firebase/firebase";

import {
  collection,
  getDocs,
  limit,
  query,
  QueryDocumentSnapshot,
  startAfter,
  where,
} from "firebase/firestore";

type FetchPropertiesParams = {
  filters: PropertyFilters;
  pageParam?: QueryDocumentSnapshot;
};

export const fetchInfiniteProperties = async ({
  filters,
  pageParam,
}: FetchPropertiesParams) => {
  let q = query(collection(firestoreDB, "properties"));
  console.log("filters Firestore::::selected", filters);
  if (filters.propertyType === "Rent" || filters.propertyType === "Sale") {
    console.log("filters Firestore::::selected", filters.propertyType);
    q = query(q, where("listingType", "==", filters.propertyType));
  } else if (filters.propertyType && filters.propertyType !== "all") {
    q = query(q, where("category", "==", filters.propertyType));
  }

  if (filters.featured) {
    q = query(q, where("propertyType", "==", "Featured"));
  }

  if (filters.noOfBedrooms !== undefined) {
    q = query(q, where("bedrooms", "==", filters.noOfBedrooms));
  }

  if (filters.minPrice !== undefined && filters.maxPrice !== undefined) {
    q = query(
      q,
      where("price", ">=", Number(filters.minPrice)),
      where("price", "<=", Number(filters.maxPrice)),
    );
  }

  if (filters.searchQuery && filters.searchQuery.trim() !== "") {
    const searchQuery = filters.searchQuery.trim();

    q = query(
      q,
      where("city", ">=", searchQuery),
      where("city", "<=", searchQuery + "\uf8ff"),
    );
  }

  const pageSize = filters.limit || 10;
  q = query(q, limit(pageSize));

  if (pageParam) {
    q = query(q, startAfter(pageParam));
  }

  try {
    const querySnapshot = await getDocs(q);
    console.log("querySnapshot Firestore::::selected", querySnapshot.size);

    const propertiesList: ApiProperty[] = [];
    querySnapshot.forEach((docSnap) => {
      const rawData = docSnap.data() as Omit<ApiProperty, "id">;
      propertiesList.push({
        id: docSnap.id,
        ...rawData,
      });
    });

    const formattedProperties = propertiesList.map(mapProperty);

    const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];

    return {
      properties: formattedProperties,
      nextCursor: lastVisibleDoc,
      hasMore: querySnapshot.docs.length === pageSize,
    };
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
};
