import React, { useState } from 'react';

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  totalPages = 12,
  onPageChange
}) => {
  const [activePage, setActivePage] = useState(currentPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setActivePage(page);
      onPageChange?.(page);
    }
  };

  const handlePrevious = () => {
    handlePageChange(activePage - 1);
  };

  const handleNext = () => {
    handlePageChange(activePage + 1);
  };

  const getVisiblePages = () => {
    const pages = [];
    
    // Always show first page
    pages.push(1);
    
    // Show current page and neighbors if not at the beginning
    if (activePage > 3) {
      pages.push('...');
    }
    
    if (activePage > 2 && activePage < totalPages - 1) {
      pages.push(activePage);
    }
    
    // Show last page if not already included
    if (activePage < totalPages - 2) {
      pages.push('...');
    }
    
    if (totalPages > 1) {
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <nav className="box-border flex justify-center items-center gap-4 m-0 p-0" aria-label="Pagination">
      <button
        onClick={handlePrevious}
        disabled={activePage === 1}
        className="hover:opacity-70 disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Previous page"
      >
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"pagination-arrow prev\" style=\"box-sizing: border-box; margin: 0; padding: 0; width: 24px; height: 24px\"> <path d=\"M15 18L9 12L15 6\" stroke=\"black\"></path> </svg>",
          }}
        />
      </button>
      
      <div className="box-border flex items-end gap-2 m-0 p-0">
        <button
          onClick={() => handlePageChange(1)}
          className={`box-border flex flex-col justify-center items-center gap-2 cursor-pointer m-0 px-3 py-1 rounded-[5px] ${
            activePage === 1 ? 'bg-black' : 'bg-[#F6F6F6] hover:bg-gray-200'
          }`}
          aria-label="Page 1"
          aria-current={activePage === 1 ? 'page' : undefined}
        >
          <span className={`box-border text-center text-base font-medium leading-6 tracking-[0.48px] m-0 p-0 ${
            activePage === 1 ? 'text-white' : 'text-black'
          }`}>
            1
          </span>
        </button>
        
        <button
          onClick={() => handlePageChange(2)}
          className={`box-border flex flex-col justify-center items-center gap-2 cursor-pointer m-0 px-3 py-1 rounded-[5px] ${
            activePage === 2 ? 'bg-black' : 'bg-[#F6F6F6] hover:bg-gray-200'
          }`}
          aria-label="Page 2"
          aria-current={activePage === 2 ? 'page' : undefined}
        >
          <span className={`box-border text-center text-base font-medium leading-6 tracking-[0.48px] m-0 p-0 ${
            activePage === 2 ? 'text-white' : 'text-black'
          }`}>
            2
          </span>
        </button>
        
        <button
          onClick={() => handlePageChange(3)}
          className={`box-border flex flex-col justify-center items-center gap-2 cursor-pointer m-0 px-3 py-1 rounded-[5px] ${
            activePage === 3 ? 'bg-black' : 'bg-[#F6F6F6] hover:bg-gray-200'
          }`}
          aria-label="Page 3"
          aria-current={activePage === 3 ? 'page' : undefined}
        >
          <span className={`box-border text-center text-base font-medium leading-6 tracking-[0.48px] m-0 p-0 ${
            activePage === 3 ? 'text-white' : 'text-black'
          }`}>
            3
          </span>
        </button>
        
        <div className="flex items-center">
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg width=\"24\" height=\"6\" viewBox=\"0 0 24 6\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"pagination-dots\" style=\"box-sizing: border-box; margin: 0; padding: 0; display: flex; padding-bottom: 3px; align-items: flex-start; gap: 4px; width: 24px; height: 6px\"> <circle cx=\"1.5\" cy=\"1.5\" r=\"1.5\" fill=\"#737373\"></circle> <circle cx=\"8.5\" cy=\"1.5\" r=\"1.5\" fill=\"#737373\"></circle> <circle cx=\"15.5\" cy=\"1.5\" r=\"1.5\" fill=\"#737373\"></circle> <circle cx=\"22.5\" cy=\"1.5\" r=\"1.5\" fill=\"#737373\"></circle> </svg>",
            }}
          />
        </div>
        
        <button
          onClick={() => handlePageChange(totalPages)}
          className={`box-border flex flex-col justify-center items-center gap-2 cursor-pointer m-0 px-3 py-1 rounded-[5px] ${
            activePage === totalPages ? 'bg-black' : 'bg-[#F6F6F6] hover:bg-gray-200'
          }`}
          aria-label={`Page ${totalPages}`}
          aria-current={activePage === totalPages ? 'page' : undefined}
        >
          <span className={`box-border text-center text-base font-medium leading-6 tracking-[0.48px] m-0 p-0 ${
            activePage === totalPages ? 'text-white' : 'text-black'
          }`}>
            {totalPages}
          </span>
        </button>
      </div>
      
      <button
        onClick={handleNext}
        disabled={activePage === totalPages}
        className="hover:opacity-70 disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Next page"
      >
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"pagination-arrow next\" style=\"box-sizing: border-box; margin: 0; padding: 0; width: 24px; height: 24px\"> <path d=\"M9 6L15 12L9 18\" stroke=\"black\"></path> </svg>",
          }}
        />
      </button>
    </nav>
  );
};

export default Pagination;
