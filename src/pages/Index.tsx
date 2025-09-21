import React, { useState } from 'react';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import FilterSidebar from '@/components/FilterSidebar';
import ProductGrid from '@/components/ProductGrid';
import Pagination from '@/components/Pagination';
import Footer from '@/components/Footer';
import { useProductFilters } from '@/hooks/useProductFilters';
import { mockProducts } from '@/data/mockProducts';

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    filters,
    sortBy,
    setSortBy,
    filteredProducts,
    updateFilter,
    updateFilterOption,
    resetFilters,
    totalResults,
  } = useProductFilters(mockProducts);

  const breadcrumbItems = [
    { label: 'Home', href: '#' },
    { label: 'Catalog', href: '#' },
    { label: 'Smartphones' }
  ];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFiltersChange = () => {
    // Reset to first page when filters change
    setCurrentPage(1);
  };

  const handleProductBuy = (productId: string) => {
    console.log('Buy product:', productId);
    // Implement buy functionality
  };

  const handleProductFavorite = (productId: string) => {
    console.log('Toggle favorite:', productId);
    // Implement favorite functionality
  };

  return (
    <div className="box-border flex w-full flex-col items-end bg-white m-0 p-0 font-['Inter']">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      />
      
      <Header />
      
      <Breadcrumbs items={breadcrumbItems} />
      
      <main className="box-border flex items-start gap-8 w-full m-0 pt-6 pb-14 px-40 max-md:pt-6 max-md:pb-14 max-md:px-10 max-sm:flex-col max-sm:pt-5 max-sm:pb-10 max-sm:px-5">
        <div className="box-border flex items-start gap-8 flex-[1_0_0] m-0 p-0">
          <FilterSidebar 
            filters={filters}
            onFilterUpdate={(filterType, value) => {
              updateFilter(filterType, value);
              handleFiltersChange();
            }}
            onFilterOptionUpdate={(filterType, optionId, checked) => {
              updateFilterOption(filterType, optionId, checked);
              handleFiltersChange();
            }}
            onResetFilters={() => {
              resetFilters();
              handleFiltersChange();
            }}
          />
          
          <div className="box-border flex flex-col items-center gap-10 flex-[1_0_0] m-0 p-0">
            <ProductGrid
              products={filteredProducts}
              totalResults={totalResults}
              sortBy={sortBy}
              onSortChange={setSortBy}
              onProductBuy={handleProductBuy}
              onProductFavorite={handleProductFavorite}
            />
            
            <Pagination
              currentPage={currentPage}
              totalPages={12}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
