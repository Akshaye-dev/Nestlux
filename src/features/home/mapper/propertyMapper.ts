import { ApiProperty } from "../models/api/ApiProperty";
import { Property } from "../models/domain/Property";

export function mapProperty(apiProperty: ApiProperty): Property {
  return {
    id: apiProperty.id,
    title: apiProperty.title,
    location: apiProperty.city,
    price: apiProperty.price,
    imageUrl: apiProperty.imageUrl,
    category: apiProperty.category,
    rating: apiProperty.rating,
    noOfReviews: apiProperty.reviewCount,
    propertyType: apiProperty.propertyType,
    listingType: apiProperty.listingType,
    noOfBathrooms: apiProperty.bathrooms,
    noOfBedrooms: apiProperty.bedrooms,
    areaSqFt: apiProperty.areaSqFt,
  };
}
