import { FooterSectionProps } from '@/src/layout/footer/v2';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa6';

export const footerSectionData: FooterSectionProps = {
  socialLinks: [
    {
      icon: <FaFacebookF />,
      href: 'https://www.facebook.com/',
    },
    {
      icon: <FaLinkedinIn />,
      href: 'https://www.linkedin.com/',
    },
    {
      icon: <FaTwitter />,
      href: 'https://twitter.com/',
    },
    {
      icon: <FaInstagram />,
      href: 'https://www.instagram.com/',
    },
  ],
  columnOne: {
    title: 'Quick Links',
    links: [
      {
        label: 'Home',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'About us',
        href: '/about',
        openNewTab: false,
      },
      {
        label: 'Services',
        href: '/services',
        openNewTab: false,
      },
      {
        label: 'Portfolio',
        href: '/portfolio',
        openNewTab: false,
      },
      {
        label: 'Blog',
        href: '/blog',
        openNewTab: false,
      },
    ],
  },
  columnTwo: {
    title: 'Service Links',
    links: [
      {
        label: 'Cloud services',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Backup solutions',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Network security',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Monitoring',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'IT Consulting',
        href: '/',
        openNewTab: false,
      },
    ],
  },
  columnThree: {
    title: 'Recent Blog',
    blogs: [
      {
        image: {
          src: '/assets/images/blog/blog-sm-1.jpg',
          alt: 'We provide a range of IT solutions',
        },
        title: 'We provide a range of IT solutions',
        date: 'january 11, 2024',
        slug: './blog-details',
      },
      {
        image: {
          src: '/assets/images/blog/blog-sm-2.jpg',
          alt: 'IT solutions enhance efficiency',
        },
        title: 'IT solutions enhance efficiency',
        date: 'january 11, 2024',
        slug: './blog-details',
      },
    ],
  },
  columnFour: {
    title: 'Contact Us',
    phoneNumber: '+880 123 45 67 89',
    mail: 'info@foxhoundgames.com',
    location: '1212, Lav Vegas, The Veg Street, USA',
  },
  footerBottom: {
    copyrightText: '© 2024 Foxhound Games Ltd | All Rights Reserved',
    links: [
      {
        label: 'Privacy Policy',
        href: '/privacy-policy',
        openNewTab: false,
      },
    ],
    textLink: {
      href: 'https://www.gambleaware.org/',
      textParts: [
        { text: 'Be', bold: true },
        { text: 'Gamble', bold: false },
        { text: 'Aware', bold: true },
        { text: '.org', bold: false },
        { text: '®', bold: false },
      ],
    },
  },
};
