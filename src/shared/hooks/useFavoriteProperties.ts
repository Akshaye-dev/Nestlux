import { Property } from "@/src/features/home/models/domain/Property";
import { InfiniteData, useQueryClient } from "@tanstack/react-query";
import { doc, updateDoc } from "firebase/firestore";
import { auth, firestoreDB } from "../services/firebase/firebase";

export const useFavoriteProperties = () => {
  const queryClient = useQueryClient();

  const toggleFavorite = async (propertyId: string, isFavorite: boolean) => {
    const userId = auth.currentUser?.uid;
    if (!userId) {
      console.log("User not logged in");
      return;
    }

    const propertyRef = doc(firestoreDB, "properties", propertyId);
    try {
      await updateDoc(propertyRef, { [`favorites.${userId}`]: isFavorite });
      console.log("Favorite status updated successfully");
    } catch (error) {
      console.error("Error updating favorite status: ", error);
    }

    queryClient.setQueriesData<InfiniteData<{ properties: Property[] }>>(
      { queryKey: ["properties"] },
      (oldData) => {
        if (!oldData) return oldData;

        return {
          ...oldData,
          pages: oldData.pages.map((page) => ({
            ...page,
            properties: page.properties.map((property) =>
              property.id === propertyId
                ? {
                    ...property,
                    favorites: {
                      ...property.favorites,
                      [userId]: isFavorite,
                    },
                  }
                : property,
            ),
          })),
        };
      },
    );

    queryClient.setQueryData<Property>(["property", propertyId], (property) =>
      property
        ? {
            ...property,
            favorites: {
              ...property.favorites,
              [userId]: isFavorite,
            },
          }
        : property,
    );
  };
  return { toggleFavorite };
};
