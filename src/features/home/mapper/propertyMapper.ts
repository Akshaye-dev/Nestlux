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
    agent: [
      {
        name: apiProperty.agent.name,
        position: apiProperty.agent.position,
      },
    ],
    city: apiProperty.city,
    amenities: apiProperty.features,
    images: apiProperty.images,
    latitude: apiProperty.latitude,
    longitude: apiProperty.longitude,
    overview: apiProperty.overview,
    state: apiProperty.state,
    yearBuilt: apiProperty.yearBuilt,
  };
}
