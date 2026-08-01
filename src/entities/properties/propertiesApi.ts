import { mapProperty } from "@/src/features/home/mapper/propertyMapper";
import { ApiProperty } from "@/src/features/home/models/api/ApiProperty";
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
type PropertyFilters = {
  type?: string;
  featured?: boolean;
  limit?: number;
};

type FetchPropertiesParams = {
  filters: PropertyFilters;
  pageParam?: QueryDocumentSnapshot;
};

export const fetchInfiniteProperties = async ({
  filters,
  pageParam,
}: FetchPropertiesParams) => {
  let q = query(collection(firestoreDB, "properties"));

  if (filters.type && filters.type !== "all") {
    // Check if the type filter is provided and not equal to "all"
    q = query(q, where("category", "==", filters.type));
  }
  if (filters.featured) {
    q = query(q, where("propertyType", "==", "Featured"));
  }

  const pageSize = filters.limit || 10;
  q = query(q, limit(pageSize));

  if (pageParam) {
    q = query(q, startAfter(pageParam));
  }

  const querySnapshot = await getDocs(q);

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
};
