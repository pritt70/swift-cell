export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  brand: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  isOnSale: boolean;
  specifications: {
    batteryCapacity?: string;
    screenType?: string;
    screenDiagonal?: string;
    protectionClass?: string;
    builtInMemory?: string;
    ram?: string;
    camera?: string;
    processor?: string;
  };
  tags: string[];
}

export interface FilterOption {
  id: string;
  label: string;
  count: number;
  checked: boolean;
}

export interface PriceRange {
  min: number;
  max: number;
}

export interface ProductFilters {
  brands: FilterOption[];
  batteryCapacity: FilterOption[];
  screenType: FilterOption[];
  screenDiagonal: FilterOption[];
  protectionClass: FilterOption[];
  builtInMemory: FilterOption[];
  priceRange: PriceRange;
  onlyInStock: boolean;
  onlyOnSale: boolean;
  searchQuery: string;
}

export interface FilterState {
  filters: ProductFilters;
  sortBy: string;
  filteredProducts: Product[];
}