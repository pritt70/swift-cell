import React, { useState } from 'react';
import { ProductFilters, FilterOption } from '@/types/product';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

interface FilterSidebarProps {
  filters: ProductFilters;
  onFilterUpdate: (filterType: keyof ProductFilters, value: any) => void;
  onFilterOptionUpdate: (
    filterType: keyof Pick<ProductFilters, 'brands' | 'batteryCapacity' | 'screenType' | 'screenDiagonal' | 'protectionClass' | 'builtInMemory'>,
    optionId: string,
    checked: boolean
  ) => void;
  onResetFilters: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ 
  filters, 
  onFilterUpdate, 
  onFilterOptionUpdate, 
  onResetFilters 
}) => {
  const [searchQueries, setSearchQueries] = useState<Record<string, string>>({
    brands: '',
    batteryCapacity: '',
    screenType: '',
    screenDiagonal: '',
    protectionClass: '',
    builtInMemory: '',
  });

  const [expandedSections, setExpandedSections] = useState({
    brands: true,
    batteryCapacity: false,
    screenType: false,
    screenDiagonal: false,
    protectionClass: false,
    builtInMemory: false,
    priceRange: false,
    additionalFilters: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const updateSearchQuery = (section: string, query: string) => {
    setSearchQueries(prev => ({
      ...prev,
      [section]: query
    }));
  };

  const getFilteredOptions = (options: FilterOption[], searchQuery: string) => {
    return options.filter(option =>
      option.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const renderFilterSection = (
    sectionKey: keyof Pick<ProductFilters, 'brands' | 'batteryCapacity' | 'screenType' | 'screenDiagonal' | 'protectionClass' | 'builtInMemory'>,
    title: string,
    options: FilterOption[]
  ) => {
    const searchQuery = searchQueries[sectionKey] || '';
    const filteredOptions = getFilteredOptions(options, searchQuery);
    const isExpanded = expandedSections[sectionKey];

    return (
      <div className="box-border flex flex-col items-end gap-4 w-full m-0 p-0">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="box-border flex flex-col items-start gap-2.5 w-full m-0 px-0 py-3 border-b-[0.5px] border-border hover:bg-accent/50 transition-colors"
        >
          <div className="box-border flex justify-between items-center w-full">
            <h3 className="box-border text-foreground text-lg font-medium leading-6 tracking-[0.54px] m-0 p-0">
              {title}
            </h3>
            {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>
        </button>

        {isExpanded && (
          <div className="box-border flex flex-col items-start gap-4 w-full m-0 p-0 max-h-80 overflow-hidden">
            {/* Search input */}
            <div className="box-border flex items-center gap-2 w-full bg-muted m-0 px-4 py-2 rounded-lg">
              <Search size={20} className="text-muted-foreground" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => updateSearchQuery(sectionKey, e.target.value)}
                className="box-border text-foreground text-sm font-medium leading-[18px] bg-transparent border-none outline-none flex-1 m-0 p-0 placeholder:text-muted-foreground"
              />
            </div>
            
            {/* Options list */}
            <div className="box-border flex flex-col items-start gap-2 w-full m-0 p-0 overflow-y-auto max-h-60">
              {filteredOptions.map((option) => (
                <label key={option.id} className="box-border flex items-center gap-3 w-full m-0 p-2 cursor-pointer hover:bg-accent/30 rounded-md transition-colors">
                  <input
                    type="checkbox"
                    checked={option.checked}
                    onChange={(e) => onFilterOptionUpdate(sectionKey, option.id, e.target.checked)}
                    className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary focus:ring-2"
                  />
                  <div className="box-border flex-1 text-foreground text-[15px] font-normal leading-6 m-0 p-0">
                    {option.label}
                    <div className="box-border text-xs text-muted-foreground m-0 p-0">
                      ({option.count})
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="box-border flex max-w-80 flex-col items-end gap-6 flex-[1_0_0] m-0 p-0 max-sm:max-w-full max-sm:w-full">
      {/* Reset Filters Button */}
      <div className="box-border flex justify-between items-center w-full mb-4">
        <h2 className="text-lg font-semibold text-foreground">Filters</h2>
        <button
          onClick={onResetFilters}
          className="text-sm text-primary hover:text-primary/80 underline"
        >
          Reset All
        </button>
      </div>

      {/* Brand Filter */}
      {renderFilterSection('brands', 'Brand', filters.brands)}

      {/* Battery Capacity Filter */}
      {renderFilterSection('batteryCapacity', 'Battery Capacity', filters.batteryCapacity)}

      {/* Screen Type Filter */}
      {renderFilterSection('screenType', 'Screen Type', filters.screenType)}

      {/* Screen Diagonal Filter */}
      {renderFilterSection('screenDiagonal', 'Screen Diagonal', filters.screenDiagonal)}

      {/* Protection Class Filter */}
      {renderFilterSection('protectionClass', 'Protection Class', filters.protectionClass)}

      {/* Built-in Memory Filter */}
      {renderFilterSection('builtInMemory', 'Built-in Memory', filters.builtInMemory)}

      {/* Price Range Filter */}
      <div className="box-border flex flex-col items-end gap-4 w-full m-0 p-0">
        <button
          onClick={() => toggleSection('priceRange')}
          className="box-border flex flex-col items-start gap-2.5 w-full m-0 px-0 py-3 border-b-[0.5px] border-border hover:bg-accent/50 transition-colors"
        >
          <div className="box-border flex justify-between items-center w-full">
            <h3 className="box-border text-foreground text-lg font-medium leading-6 tracking-[0.54px] m-0 p-0">
              Price Range
            </h3>
            {expandedSections.priceRange ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>
        </button>

        {expandedSections.priceRange && (
          <div className="box-border flex flex-col items-start gap-4 w-full m-0 p-0">
            <div className="flex gap-2 w-full">
              <input
                type="number"
                placeholder="Min"
                value={filters.priceRange.min}
                onChange={(e) => onFilterUpdate('priceRange', { ...filters.priceRange, min: Number(e.target.value) })}
                className="flex-1 px-3 py-2 border border-border rounded-md bg-background text-foreground text-sm"
              />
              <span className="self-center text-muted-foreground">-</span>
              <input
                type="number"
                placeholder="Max"
                value={filters.priceRange.max}
                onChange={(e) => onFilterUpdate('priceRange', { ...filters.priceRange, max: Number(e.target.value) })}
                className="flex-1 px-3 py-2 border border-border rounded-md bg-background text-foreground text-sm"
              />
            </div>
          </div>
        )}
      </div>

      {/* Additional Filters */}
      <div className="box-border flex flex-col items-end gap-4 w-full m-0 p-0">
        <button
          onClick={() => toggleSection('additionalFilters')}
          className="box-border flex flex-col items-start gap-2.5 w-full m-0 px-0 py-3 border-b-[0.5px] border-border hover:bg-accent/50 transition-colors"
        >
          <div className="box-border flex justify-between items-center w-full">
            <h3 className="box-border text-foreground text-lg font-medium leading-6 tracking-[0.54px] m-0 p-0">
              Additional Filters
            </h3>
            {expandedSections.additionalFilters ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>
        </button>

        {expandedSections.additionalFilters && (
          <div className="box-border flex flex-col items-start gap-3 w-full m-0 p-0">
            <label className="flex items-center gap-3 w-full cursor-pointer hover:bg-accent/30 p-2 rounded-md transition-colors">
              <input
                type="checkbox"
                checked={filters.onlyInStock}
                onChange={(e) => onFilterUpdate('onlyInStock', e.target.checked)}
                className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary focus:ring-2"
              />
              <span className="text-foreground text-sm">Only in stock</span>
            </label>
            <label className="flex items-center gap-3 w-full cursor-pointer hover:bg-accent/30 p-2 rounded-md transition-colors">
              <input
                type="checkbox"
                checked={filters.onlyOnSale}
                onChange={(e) => onFilterUpdate('onlyOnSale', e.target.checked)}
                className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary focus:ring-2"
              />
              <span className="text-foreground text-sm">Only on sale</span>
            </label>
          </div>
        )}
      </div>
    </aside>
  );
};

export default FilterSidebar;
