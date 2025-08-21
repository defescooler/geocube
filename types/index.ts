// Core type definitions
export interface MetaData {
  title?: string;
  description?: string;
  keywords?: string[];
}

export interface Image {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export * from './services';
export * from './team';
export * from './api';
