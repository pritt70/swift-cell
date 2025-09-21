import { useState, useMemo, useCallback } from 'react';
import { Product, ProductFilters, FilterOption, PriceRange } from '@/types/product';

const initialFilters: ProductFilters = {
  brands: [
    { id: 'apple', label: 'Apple', count: 110, checked: false },
    { id: 'samsung', label: 'Samsung', count: 125, checked: false },
    { id: 'xiaomi', label: 'Xiaomi', count: 68, checked: false },
    { id: 'poco', label: 'Poco', count: 44, checked: false },
    { id: 'oppo', label: 'OPPO', count: 36, checked: false },
    { id: 'honor', label: 'Honor', count: 10, checked: false },
    { id: 'motorola', label: 'Motorola', count: 34, checked: false },
    { id: 'nokia', label: 'Nokia', count: 22, checked: false },
    { id: 'realme', label: 'Realme', count: 35, checked: false },
  ],
  batteryCapacity: [
    { id: '3000-4000', label: '3000-4000 mAh', count: 45, checked: false },
    { id: '4000-5000', label: '4000-5000 mAh', count: 89, checked: false },
    { id: '5000+', label: '5000+ mAh', count: 32, checked: false },
  ],
  screenType: [
    { id: 'oled', label: 'OLED', count: 67, checked: false },
    { id: 'amoled', label: 'AMOLED', count: 98, checked: false },
    { id: 'lcd', label: 'LCD', count: 43, checked: false },
    { id: 'super-amoled', label: 'Super AMOLED', count: 56, checked: false },
  ],
  screenDiagonal: [
    { id: '5-6', label: '5.0" - 6.0"', count: 34, checked: false },
    { id: '6-6.5', label: '6.0" - 6.5"', count: 128, checked: false },
    { id: '6.5+', label: '6.5"+ ', count: 67, checked: false },
  ],
  protectionClass: [
    { id: 'ip54', label: 'IP54', count: 23, checked: false },
    { id: 'ip67', label: 'IP67', count: 89, checked: false },
    { id: 'ip68', label: 'IP68', count: 156, checked: false },
  ],
  builtInMemory: [
    { id: '64gb', label: '64 GB', count: 34, checked: false },
    { id: '128gb', label: '128 GB', count: 87, checked: false },
    { id: '256gb', label: '256 GB', count: 92, checked: false },
    { id: '512gb', label: '512 GB', count: 45, checked: false },
    { id: '1tb', label: '1 TB', count: 23, checked: false },
  ],
  priceRange: { min: 0, max: 2000 },
  onlyInStock: false,
  onlyOnSale: false,
  searchQuery: '',
};

export const useProductFilters = (products: Product[]) => {
  const [filters, setFilters] = useState<ProductFilters>(initialFilters);
  const [sortBy, setSortBy] = useState('rating');

  const updateFilter = useCallback((
    filterType: keyof ProductFilters,
    value: any
  ) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value,
    }));
  }, []);

  const updateFilterOption = useCallback((
    filterType: keyof Pick<ProductFilters, 'brands' | 'batteryCapacity' | 'screenType' | 'screenDiagonal' | 'protectionClass' | 'builtInMemory'>,
    optionId: string,
    checked: boolean
  ) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].map((option: FilterOption) =>
        option.id === optionId ? { ...option, checked } : option
      ),
    }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Search query filter
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        if (!product.title.toLowerCase().includes(query) &&
            !product.brand.toLowerCase().includes(query)) {
          return false;
        }
      }

      // Brand filter
      const selectedBrands = filters.brands.filter(b => b.checked).map(b => b.id);
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand.toLowerCase())) {
        return false;
      }

      // Battery capacity filter
      const selectedBatteries = filters.batteryCapacity.filter(b => b.checked).map(b => b.id);
      if (selectedBatteries.length > 0 && product.specifications.batteryCapacity) {
        const capacity = parseInt(product.specifications.batteryCapacity);
        const matchesBattery = selectedBatteries.some(range => {
          if (range === '3000-4000') return capacity >= 3000 && capacity < 4000;
          if (range === '4000-5000') return capacity >= 4000 && capacity < 5000;
          if (range === '5000+') return capacity >= 5000;
          return false;
        });
        if (!matchesBattery) return false;
      }

      // Screen type filter
      const selectedScreenTypes = filters.screenType.filter(s => s.checked).map(s => s.id);
      if (selectedScreenTypes.length > 0 && product.specifications.screenType) {
        if (!selectedScreenTypes.includes(product.specifications.screenType.toLowerCase())) {
          return false;
        }
      }

      // Screen diagonal filter
      const selectedDiagonals = filters.screenDiagonal.filter(d => d.checked).map(d => d.id);
      if (selectedDiagonals.length > 0 && product.specifications.screenDiagonal) {
        const diagonal = parseFloat(product.specifications.screenDiagonal);
        const matchesDiagonal = selectedDiagonals.some(range => {
          if (range === '5-6') return diagonal >= 5.0 && diagonal < 6.0;
          if (range === '6-6.5') return diagonal >= 6.0 && diagonal < 6.5;
          if (range === '6.5+') return diagonal >= 6.5;
          return false;
        });
        if (!matchesDiagonal) return false;
      }

      // Protection class filter
      const selectedProtection = filters.protectionClass.filter(p => p.checked).map(p => p.id);
      if (selectedProtection.length > 0 && product.specifications.protectionClass) {
        if (!selectedProtection.includes(product.specifications.protectionClass.toLowerCase())) {
          return false;
        }
      }

      // Built-in memory filter
      const selectedMemory = filters.builtInMemory.filter(m => m.checked).map(m => m.id);
      if (selectedMemory.length > 0 && product.specifications.builtInMemory) {
        if (!selectedMemory.includes(product.specifications.builtInMemory.toLowerCase())) {
          return false;
        }
      }

      // Price range filter
      if (product.price < filters.priceRange.min || product.price > filters.priceRange.max) {
        return false;
      }

      // Stock filter
      if (filters.onlyInStock && !product.inStock) {
        return false;
      }

      // Sale filter
      if (filters.onlyOnSale && !product.isOnSale) {
        return false;
      }

      return true;
    });

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price);
      case 'name':
        return filtered.sort((a, b) => a.title.localeCompare(b.title));
      case 'rating':
      default:
        return filtered.sort((a, b) => b.rating - a.rating);
    }
  }, [products, filters, sortBy]);

  return {
    filters,
    sortBy,
    setSortBy,
    filteredProducts,
    updateFilter,
    updateFilterOption,
    resetFilters,
    totalResults: filteredProducts.length,
  };
};