import { useState } from "react";
import { mapProperty } from "../mapper/propertyMapper";
import { mockPropertiesData } from "../mocks/properties";

export function useProperties() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const properties = mockPropertiesData.map(mapProperty);

  return {
    loading: isLoading,
    error,
    properties,
  };
}
