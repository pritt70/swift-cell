import React from 'react';

const Footer = () => {
  const serviceLinks = [
    'Bonus program',
    'Gift cards',
    'Credit and payment',
    'Service contracts',
    'Non-cash account',
    'Payment'
  ];

  const assistanceLinks = [
    'Find an order',
    'Terms of delivery',
    'Exchange and return of goods',
    'Guarantee',
    'Frequently asked questions',
    'Terms of use of the site'
  ];

  const socialIcons = [
    {
      name: 'Twitter',
      svg: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"social-icon\" style=\"box-sizing: border-box; margin: 0; padding: 0; width: 16px; height: 16px; flex-shrink: 0\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 2.91437C15.4121 3.18209 14.7791 3.36315 14.1152 3.44404C14.7932 3.02801 15.3135 2.36832 15.5586 1.58248C14.9238 1.9677 14.2222 2.24794 13.4728 2.39817C12.8755 1.74427 12.0218 1.33594 11.0771 1.33594C9.26548 1.33594 7.79574 2.8431 7.79574 4.70177C7.79574 4.96565 7.82391 5.22182 7.88026 5.46836C5.15208 5.32775 2.73381 3.98912 1.11381 1.95036C0.831132 2.44921 0.669596 3.02801 0.669596 3.64435C0.669596 4.81156 1.24905 5.84202 2.12995 6.44585C1.59277 6.42947 1.08563 6.27635 0.642365 6.02596V6.06737C0.642365 7.69876 1.77402 9.05954 3.27663 9.36772C3.00147 9.44669 2.71128 9.48617 2.41169 9.48617C2.20039 9.48617 1.99378 9.46595 1.79374 9.42646C2.21166 10.7632 3.42313 11.7368 4.86001 11.7628C3.7368 12.6661 2.32059 13.2045 0.783234 13.2045C0.518398 13.2045 0.256383 13.1891 0 13.1583C1.45284 14.1117 3.17896 14.6693 5.03187 14.6693C11.0705 14.6693 14.3715 9.54106 14.3715 5.09277C14.3715 4.94639 14.3687 4.8 14.3631 4.65651C15.0045 4.18173 15.5614 3.58946 16 2.91437Z\" fill=\"white\"></path> </svg>"
    },
    {
      name: 'Facebook',
      svg: "<svg width=\"17\" height=\"16\" viewBox=\"0 0 17 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"social-icon\" style=\"box-sizing: border-box; margin: 0; padding: 0; width: 16px; height: 16px; flex-shrink: 0\"> <path d=\"M9.18088 3.81794C9.18088 3.98169 9.18088 4.51541 9.18088 5.27366H11.7879L11.5052 7.59763H9.18088C9.18088 11.1816 9.18088 15.9843 9.18088 15.9843H6.09569C6.09569 15.9843 6.09569 11.2452 6.09569 7.59763H4.4881V5.27366H6.09569C6.09569 4.35204 6.09569 3.69669 6.09569 3.51422C6.09569 2.64485 6.03019 2.23235 6.3996 1.55866C6.76919 0.885005 7.81169 -0.00543266 9.61478 0.0160048C11.4183 0.0382236 12.1785 0.211724 12.1785 0.211724L11.7879 2.6885C11.7879 2.6885 10.6362 2.38441 10.0709 2.49279C9.50641 2.60119 9.18088 2.94894 9.18088 3.81794Z\" fill=\"white\"></path> </svg>"
    },
    {
      name: 'TikTok',
      svg: "<svg width=\"17\" height=\"16\" viewBox=\"0 0 17 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"social-icon\" style=\"box-sizing: border-box; margin: 0; padding: 0; width: 16px; height: 16px; flex-shrink: 0\"> <path d=\"M12.5503 3.35605C11.8909 2.58949 11.5455 1.59909 11.573 0.59077L9.10919 0.53125C9.10919 0.53125 9.10919 0.63637 9.10919 0.77813V10.6583C9.14359 13.7841 4.20503 13.7082 4.59575 10.2532C4.83463 8.87941 6.31079 8.03397 7.62247 8.51189V5.99797C4.76679 5.50069 2.06055 7.77365 2.08903 10.6693C2.33863 16.9493 11.346 16.9501 11.5959 10.6693C11.533 10.4445 11.5682 6.25957 11.5593 5.90661C12.6796 6.60373 13.9831 6.95221 15.3033 6.90757V4.31125C14.0828 4.31125 13.1514 3.98677 12.5503 3.35605Z\" fill=\"white\"></path> </svg>"
    },
    {
      name: 'Instagram',
      svg: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"social-icon\" style=\"box-sizing: border-box; margin: 0; padding: 0; width: 16px; height: 16px; flex-shrink: 0\"> <g clip-path=\"url(#clip0_396_537)\"> <path d=\"M7.99998 14.6693C6.57048 14.6693 5.5418 14.6686 4.73978 14.5908C3.94695 14.5139 3.43978 14.3662 3.03503 14.1119C2.57243 13.8213 2.18126 13.4301 1.89059 12.9676C1.63634 12.5628 1.48857 12.0556 1.4118 11.2628C1.33402 10.4608 1.33331 9.4321 1.33331 8.0026C1.33331 6.57311 1.33402 5.54442 1.4118 4.7424C1.48857 3.94957 1.63634 3.4424 1.89059 3.03765C2.18125 2.57504 2.57242 2.18387 3.03503 1.89321C3.43978 1.63897 3.94695 1.49119 4.73978 1.41442C5.5417 1.33664 6.57038 1.33594 7.99998 1.33594C9.42947 1.33594 10.4582 1.33664 11.2602 1.41442C12.053 1.49119 12.5602 1.63897 12.9649 1.89321C13.4275 2.18389 13.8186 2.57505 14.1093 3.03765C14.3636 3.4424 14.5113 3.94957 14.5882 4.7424C14.6659 5.54442 14.6666 6.57311 14.6666 8.0026C14.6666 9.4321 14.6659 10.4608 14.5882 11.2628C14.5113 12.0556 14.3636 12.5628 14.1093 12.9676C13.8186 13.4301 13.4275 13.8212 12.9649 14.1119C12.5602 14.3662 12.053 14.5139 11.2602 14.5908C10.4582 14.6686 9.42947 14.6693 7.99998 14.6693Z\" fill=\"white\" stroke=\"white\" stroke-width=\"2\"></path> <path d=\"M7.99998 11.3333C9.47274 11.3333 10.6666 10.1394 10.6666 8.66667C10.6666 7.19391 9.47274 6 7.99998 6C6.52722 6 5.33331 7.19391 5.33331 8.66667C5.33331 10.1394 6.52722 11.3333 7.99998 11.3333Z\" fill=\"white\" stroke=\"black\" stroke-width=\"2\"></path> <path d=\"M11.25 5.5C11.6642 5.5 12 5.16421 12 4.75C12 4.33579 11.6642 4 11.25 4C10.8358 4 10.5 4.33579 10.5 4.75C10.5 5.16421 10.8358 5.5 11.25 5.5Z\" fill=\"black\"></path> </g> <defs> <clipPath id=\"clip0_396_537\"> <rect width=\"16\" height=\"16\" fill=\"white\"></rect> </clipPath> </defs> </svg>"
    }
  ];

  return (
    <footer className="box-border flex flex-col justify-center items-start gap-6 w-full bg-black m-0 px-40 py-[104px] max-md:px-10 max-md:py-[104px] max-sm:px-5 max-sm:py-[60px]">
      <div className="box-border flex justify-between items-start content-start gap-y-[113px] w-full flex-wrap m-0 p-0 max-sm:flex-col max-sm:gap-10">
        <div className="box-border flex flex-col items-start gap-6 m-0 p-0">
          <div className="box-border flex flex-col items-center gap-2.5 m-0 p-0">
            <div className="text-2xl font-bold text-white">
              SwiftCell
            </div>
          </div>
          <p className="box-border w-96 text-[#CFCFCF] text-sm font-medium leading-[23.87px] m-0 p-0 max-sm:w-full">
            We are a residential interior design firm located in Portland. Our boutique-studio offers more than
          </p>
        </div>
        
        <div className="box-border flex w-[623px] justify-between items-start m-0 p-0 max-md:w-full max-md:gap-10 max-sm:flex-col max-sm:gap-8">
          <div className="box-border flex w-[295.5px] flex-col items-start gap-2 shrink-0 m-0 p-0 max-md:w-auto max-md:flex-1">
            <h3 className="box-border text-white text-base font-semibold leading-4 m-0 p-0">
              Services
            </h3>
            {serviceLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="box-border w-full text-[#CFCFCF] text-sm font-normal leading-8 cursor-pointer hover:text-white transition-colors m-0 p-0"
              >
                {link}
              </a>
            ))}
          </div>
          
          <div className="box-border flex w-[295.5px] flex-col items-start gap-2 shrink-0 m-0 p-0 max-md:w-auto max-md:flex-1">
            <h3 className="box-border text-white text-base font-semibold leading-4 m-0 p-0">
              Assistance to the buyer
            </h3>
            {assistanceLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="box-border w-full text-[#CFCFCF] text-sm font-normal leading-8 cursor-pointer hover:text-white transition-colors m-0 p-0"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="box-border flex w-[173px] justify-between items-start m-0 p-0 max-sm:w-full max-sm:justify-start max-sm:gap-6">
        {socialIcons.map((icon, index) => (
          <a
            key={index}
            href="#"
            className="hover:opacity-70 transition-opacity"
            aria-label={`Follow us on ${icon.name}`}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: icon.svg,
              }}
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
