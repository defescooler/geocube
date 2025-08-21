// Service-related types
export interface Service {
  id: string;
  title: string;
  description: string;
  image?: string;
  icon?: string;
  features?: string[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  services: Service[];
}
