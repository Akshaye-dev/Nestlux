import { ImageSourcePropType } from "react-native";

export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  image: ImageSourcePropType;
  isFeatured: boolean;
  isFavorite: boolean;
  rating: number;
}
