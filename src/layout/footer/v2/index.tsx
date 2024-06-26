import { footerSectionData } from '@/data/layout/footer/v2';
import { ImageProps, LinkProps, SectionProps } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { cn } from '@/src/utils/shadcn';
import { BrandLogo } from 'src/layout/brand-logo';
import { FaEnvelope } from 'react-icons/fa6';
import { ClassValue } from 'clsx';

interface RecentBlog {
  slug: string;
  image: Omit<ImageProps, 'width' | 'height'>;
  date: string;
  title: string;
}

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

export interface FooterSectionProps {
  socialLinks: SocialLinkProps[];
  columnOne: {
    title: string;
    links: LinkProps[];
  };
  columnTwo: {
    title: string;
    links: LinkProps[];
  };
  columnThree: {
    title: string;
    blogs: RecentBlog[];
  };
  columnFour: {
    title: string;
    location: string;
    mail: string;
    phoneNumber: string;
  };
  footerBottom: {
    copyrightText: string;
    links: LinkProps[];
    textLink?: {
      href: string;
      textParts: { text: string; bold: boolean }[];
    };
  };
}

const titleClasses = cn(
  'text-gray-900 dark:text-white text-md font-bold leading-[1.25] md:text-lg mb-5 md:mb-[1.875rem]'
);
const addressIconParentClasses = cn(
  'text-primary flex-none leading-none self-start relative top-2'
);
const addressItemClasses = cn('flex gap-5');
const textColor = cn(
  'transition-colors duration-300 hover:text-primary dark:hover:text-white'
);

interface Props extends SectionProps {
  footerTopClassName?: ClassValue;
}

export function Footer({ className, footerTopClassName }: Props) {
  const { columnFour, footerBottom } = footerSectionData;
  return (
    <footer
      className={cn(
        'overflow-hidden bg-accent-100 text-accent-800 dark:bg-accent-700 dark:text-body',
        className
      )}
    >
      <Container>
        {/* Footer top */}
        <div
          className={cn(
            'flex items-center justify-between gap-x-20 gap-y-4 pb-5 pt-[60px] lg:pt-20',
            footerTopClassName
          )}
        >
          <BrandLogo />
        </div>

        {/* Footer middle */}
        <div className="border-y border-accent-800 border-opacity-30 py-[60px] dark:border-accent-100 dark:border-opacity-30">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Column one */}
            <div data-aos="fade-up" data-aos-delay="200"></div>

            {/* Column Two */}
            <div data-aos="fade-up" data-aos-delay="400"></div>

            {/* Column three */}
            <div data-aos="fade-up" data-aos-delay="600"></div>

            {/* Column Four */}
            <div data-aos="fade-up" data-aos-delay="800">
              <h3 className={titleClasses}>{columnFour.title}</h3>
              <ul aria-label="addresses" className="grid gap-5">
                <li className={addressItemClasses}>
                  <span className={addressIconParentClasses}>
                    <FaEnvelope />
                  </span>
                  <a href={`mailto:${columnFour.mail}`} className={textColor}>
                    {columnFour.mail}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex min-h-[90px] items-center py-5">
          <Container>
            <div className="flex flex-col flex-wrap items-center justify-between gap-x-8 gap-y-4 md:flex-row md:gap-x-10">
              {footerBottom.textLink && (
                <a
                  href={footerBottom.textLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-4 flex items-center gap-2 md:mb-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    imageRendering="optimizeQuality"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    viewBox="0 0 512 512"
                    className="h-10 w-10" // Adjust the size as needed
                  >
                    <g fillRule="nonzero">
                      <path
                        fill="#D92D27"
                        d="M256 0c38.58 0 75.19 8.54 108 23.83-14.77 10.49-24.8 21.13-33.01 35.9-23.28-8.91-48.57-13.79-74.99-13.79-58.01 0-110.53 23.52-148.54 61.52-38 38.01-61.52 90.53-61.52 148.54 0 58 23.52 110.53 61.52 148.54 38.01 38 90.53 61.52 148.54 61.52 58 0 110.53-23.52 148.54-61.52 38-38.01 61.52-90.54 61.52-148.54 0-15.26-1.63-30.13-4.72-44.46 14.35-8.37 25.67-22.81 37.86-35.69 8.31 25.22 12.8 52.16 12.8 80.15 0 70.68-28.66 134.7-74.98 181.02C390.7 483.34 326.68 512 256 512c-70.69 0-134.7-28.66-181.02-74.98C28.66 390.7 0 326.68 0 256c0-70.69 28.66-134.7 74.98-181.02C121.3 28.66 185.31 0 256 0z"
                      />
                      <path
                        fill="#BEBEBE" // Update color here
                        d="M404.42 172.39v-44.21h-40.63V92.31h40.63v-44.2h37.79v44.2h40.92v35.87h-40.92v44.21h-37.79zM159.1 345.32V212.36a301.3 301.3 0 0 1-13.62 2.74c-4.47.81-8.93 1.56-13.4 2.28l-3.58-26.3c3.83-.89 8.29-2.27 13.35-4.19 5.06-1.91 10.2-4.06 15.43-6.45 5.21-2.39 10.03-4.87 14.51-7.38 4.46-2.51 7.96-4.78 10.52-6.85l21.52 2.86-.24 176.25H159.1zm157.13 1.91c-10.92 0-20.69-1.16-29.34-3.43-8.64-2.27-15.98-5.5-22-9.72-6.02-4.23-10.6-9.33-13.75-15.27-3.15-5.94-4.75-12.55-4.75-19.88 0-6.46 1.64-12.84 4.91-19.1 3.26-6.26 8.65-12.03 16.1-17.33 7.45-5.3 17.42-9.73 29.94-13.31l14.82 17.69c-4.86 2.23-9.17 4.7-12.95 7.46-3.79 2.74-6.78 5.98-8.93 9.64-2.16 3.66-3.23 8.01-3.23 13.04 0 3.9.95 7.76 2.87 11.59 1.91 3.83 4.99 6.98 9.21 9.49 4.22 2.51 9.76 3.79 16.62 3.79 4.38 0 8.41-1.04 12.07-3.08 3.67-2.03 6.62-4.7 8.81-8.01 2.2-3.3 3.27-6.85 3.27-10.68 0-4.46-1.6-8.33-4.78-11.59-3.2-3.28-7.38-6.3-12.6-9.06-5.22-2.74-10.95-5.49-17.21-8.29-6.26-2.78-12.52-5.86-18.78-9.2-6.25-3.35-11.99-7.3-17.22-11.84-5.22-4.54-9.44-9.97-12.63-16.22-3.19-6.26-4.78-13.67-4.78-22.28 0-8.61 2.39-16.46 7.17-23.56 4.79-7.09 11.8-12.75 21.05-16.98 9.24-4.22 20.56-6.33 33.95-6.33 13.39 0 24.68 1.83 33.8 5.5 9.13 3.67 16.03 8.69 20.69 15.06 4.66 6.38 6.97 13.64 6.97 21.77 0 6.93-1.55 13.63-4.7 20.12-3.15 6.5-8.17 12.28-15.07 17.3-6.89 5.03-16.02 8.81-27.34 11.36l-14.58-16.74c8.6-2.63 14.7-6.61 18.29-11.92 3.58-5.29 5.38-11.43 5.38-18.45 0-5.18-1.96-9.6-5.86-13.23-3.91-3.63-9.52-5.43-16.86-5.43-7.01 0-12.56 1.84-16.62 5.55-4.07 3.71-6.1 7.85-6.1 12.39 0 4.94 1.64 9.33 4.91 13.15 3.26 3.83 7.6 7.34 13.03 10.56 5.42 3.24 11.35 6.38 17.81 9.42 6.46 3.02 12.96 6.21 19.46 9.6 6.49 3.39 12.47 7.17 17.92 11.36 5.47 4.18 9.85 9 13.16 14.47 3.31 5.46 4.98 11.79 5.06 18.97.08 10.92-2.78 20.21-8.61 27.9-5.82 7.69-13.79 13.59-23.95 17.66-10.16 4.06-21.72 6.09-34.63 6.09z"
                      />
                    </g>
                  </svg>
                  <span>
                    {footerBottom.textLink.textParts.map((part, index) => (
                      <span
                        key={index}
                        className={part.bold ? 'font-bold' : 'font-normal'}
                      >
                        {part.text}
                      </span>
                    ))}
                  </span>
                </a>
              )}
              <p className="text-center md:text-left">
                {footerBottom.copyrightText}
              </p>
            </div>
          </Container>
        </div>
      </Container>
    </footer>
  );
}
