import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

// Define the structure of a single place
interface PlaceDetails {
  id: number;
  location_id: string;
  location_code:string;
  district: string;
  location_name: string;
  description: string;
  ticket_availability: number;
  latitude: string;
  longitude: string;
  distance: number;
  duration: number;
  warning_data: string;
  contact_number: string;
  city:string;
  tag:string;
  thumbnail_path:string;
}

// Update the context type to support multiple places (an array)
interface PlaceContextType {
  places: PlaceDetails[];
  setPlaces: Dispatch<SetStateAction<PlaceDetails[]>>;
}

const PlaceContext = createContext<PlaceContextType | undefined>(undefined);

export const PlaceProvider = ({ children }: { children: ReactNode }) => {
  const [places, setPlaces] = useState<PlaceDetails[]>([]);

  return (
    <PlaceContext.Provider value={{ places, setPlaces }}>
      {children}
    </PlaceContext.Provider>
  );
};

// Custom hook to use the context
export const usePlace = (): PlaceContextType => {
    const context = useContext(PlaceContext);
    if (!context) {
      throw new Error("usePlace must be used within a PlaceProvider");
    }
    return context;
  };
  
