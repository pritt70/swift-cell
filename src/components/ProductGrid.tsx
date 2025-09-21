import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/types/product';

interface ProductGridProps {
  products: Product[];
  totalResults: number;
  sortBy: string;
  onSortChange: (sortBy: string) => void;
  onProductBuy?: (id: string) => void;
  onProductFavorite?: (id: string) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  totalResults,
  sortBy,
  onSortChange,
  onProductBuy,
  onProductFavorite
}) => {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());


  const handleToggleFavorite = (id: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
    onProductFavorite?.(id);
  };

  const handleBuyNow = (id: string) => {
    onProductBuy?.(id);
  };

  const sortOptions = [
    { value: 'rating', label: 'By rating' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'name', label: 'Name' }
  ];

  return (
    <section className="box-border flex flex-col items-center gap-10 flex-[1_0_0] m-0 p-0">
      <div className="box-border flex flex-col items-start gap-6 w-full m-0 p-0">
        <div className="box-border flex justify-between items-center content-center gap-y-4 w-full flex-wrap m-0 p-0 max-sm:flex-col max-sm:items-start max-sm:gap-4">
          <div className="box-border flex min-w-[200px] items-end gap-1.5 m-0 p-0">
            <span className="box-border text-[#6C6C6C] text-base font-medium leading-4 tracking-[0.48px] m-0 p-0">
              Selected Products:
            </span>
            <span className="box-border text-foreground text-center text-xl font-medium leading-4 tracking-[0.6px] m-0 p-0">
              {totalResults}
            </span>
          </div>
          <div className='box-border flex min-w-[140px] max-w-64 justify-between items-center flex-[1_0_0] border-neutral-300 bg-white m-0 px-4 py-2 rounded-lg border-[0.5px] border-solid max-sm:w-full max-sm:max-w-full'>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="w-full"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {products.length === 0 ? (
          <div className="box-border flex flex-col items-center justify-center gap-4 w-full h-64 m-0 p-0">
            <p className="text-muted-foreground text-lg">No products found matching your filters</p>
            <p className="text-muted-foreground text-sm">Try adjusting your search criteria</p>
          </div>
        ) : (
          <div className="box-border grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full m-0 p-0">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={`$${product.price}`}
                originalPrice={product.originalPrice ? `$${product.originalPrice}` : undefined}
                image={product.image}
                inStock={product.inStock}
                isOnSale={product.isOnSale}
                rating={product.rating}
                reviews={product.reviews}
                onBuyNow={handleBuyNow}
                onToggleFavorite={handleToggleFavorite}
                isFavorite={favorites.has(product.id)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
