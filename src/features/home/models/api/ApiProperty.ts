export interface ApiProperty {
  id: string;
  title: string;
  city: string;
  price: number;
  imageUrl: string;
  category: string;
  rating: number;
  reviewCount: number;
  listingType: string;
  propertyType: string;
  bathrooms: number;
  bedrooms: number;
  isFavorite: boolean;
  favorites: Record<string, boolean>;
  areaSqFt: number;
  agent: {
    name: string;
    position: string;
  };
  features: string[];
  images: string[];
  latitude: number;
  longitude: number;
  overview: string;
  state: string;
  yearBuilt: number;
}
