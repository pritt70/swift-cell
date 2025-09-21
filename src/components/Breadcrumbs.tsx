import React from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="box-border flex items-center gap-4 w-full m-0 px-40 py-10 max-md:p-10 max-sm:flex-wrap max-sm:p-5">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.href ? (
            <a
              href={item.href}
              className="box-border text-[#A4A4A4] text-base font-medium leading-4 m-0 p-0 hover:text-gray-600"
            >
              {item.label}
            </a>
          ) : (
            <span className="box-border text-[#A4A4A4] text-base font-medium leading-4 m-0 p-0">
              {item.label}
            </span>
          )}
          {index < items.length - 1 && (
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"breadcrumb-arrow\" style=\"box-sizing: border-box; margin: 0; padding: 0; width: 24px; height: 24px; transform: rotate(-90deg)\"> <path d=\"M9 6L15 12L9 18\" stroke=\"#A4A4A4\"></path> </svg>",
                }}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
