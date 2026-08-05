import { Property } from "@/src/features/home/models/domain/Property";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "expo-router";

export const usePropertyNavigation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const openedProperty = (property: Property) => {
    queryClient.setQueryData(["property", property.id], property);

    router.push({
      pathname: "/property/[id]",
      params: {
        id: property.id,
      },
    });
  };
  return { openedProperty };
};
