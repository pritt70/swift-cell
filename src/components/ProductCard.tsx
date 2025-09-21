import React from "react";

interface ProductCardProps {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
  inStock?: boolean;
  isOnSale?: boolean;
  rating?: number;
  reviews?: number;
  onBuyNow?: (id: string) => void;
  onToggleFavorite?: (id: string) => void;
  isFavorite?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  originalPrice,
  image,
  inStock = true,
  isOnSale = false,
  rating = 0,
  reviews = 0,
  onBuyNow,
  onToggleFavorite,
  isFavorite = false,
}) => {
  return (
    <article
      className="flex flex-col items-center gap-3 border border-border rounded-xl p-5 transition-all duration-200 hover:border-primary hover:shadow-sm bg-card"
    >
      {/* Badges + Favorite */}
      <div className="flex justify-between items-start w-full">
        <div className="flex gap-2">
          {isOnSale && (
            <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-medium rounded">
              Sale
            </span>
          )}
          {!inStock && (
            <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded">
              Out of Stock
            </span>
          )}
        </div>
        <button
          onClick={() => onToggleFavorite?.(id)}
          className={`flex w-8 h-8 justify-center items-center rounded-full transition-colors ${
            isFavorite
              ? "bg-red-500 text-white"
              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
          }`}
          aria-label="Toggle favorite"
        >
          ❤️
        </button>
      </div>

      {/* Image */}
      <div className="relative w-full h-44 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="max-h-full object-contain"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col items-center gap-2 w-full">
        <h3 className="text-center text-sm font-medium line-clamp-2">{title}</h3>

        {rating > 0 && (
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <span className="text-yellow-500">★ {rating}</span>
            <span>({reviews} reviews)</span>
          </div>
        )}

        <div className="flex items-center justify-center gap-2">
          <span className="text-lg font-semibold">{price}</span>
          {originalPrice && (
            <span className="text-gray-400 text-sm line-through">
              {originalPrice}
            </span>
          )}
        </div>

        <button
          onClick={() => onBuyNow?.(id)}
          disabled={!inStock}
          className={`w-full py-2.5 rounded-lg text-sm font-medium transition-colors ${
            inStock
              ? "bg-primary text-white hover:bg-primary/90"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
          aria-label={`Buy ${title}`}
        >
          {inStock ? "Buy Now" : "Out of Stock"}
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
