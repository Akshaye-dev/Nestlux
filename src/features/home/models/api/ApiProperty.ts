import { ImageSourcePropType } from "react-native";

export interface ApiProperty {
  id: number;
  title: string;
  location: string;
  price: string;
  image: ImageSourcePropType;
  featured: boolean;
  favorite: boolean;
  rating: number;
}
