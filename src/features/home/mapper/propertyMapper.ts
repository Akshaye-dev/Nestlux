import { ApiProperty } from "../models/api/ApiProperty";
import { Property } from "../models/domain/Property";

export function mapProperty(apiProperty: ApiProperty): Property {
  return {
    id: apiProperty.id,
    title: apiProperty.title,
    location: apiProperty.location,
    price: apiProperty.price,
    image: apiProperty.image,
    isFeatured: apiProperty.featured,
    isFavorite: apiProperty.favorite,
    rating: apiProperty.rating,
  };
}
