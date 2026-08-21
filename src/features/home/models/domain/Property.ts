export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
  category: string;
  rating: number;
  noOfReviews: number;
  propertyType: string;
  listingType: string;
  noOfBathrooms: number;
  noOfBedrooms: number;
  isFavorite: boolean;
  favorites: Record<string, boolean>;
  areaSqFt: number;
  agent: [
    {
      name: string;
      position: string;
    },
  ];
  city: string;
  amenities: string[];
  images: string[];
  latitude: number;
  longitude: number;
  overview: string;
  state: string;
  yearBuilt: number;
}
