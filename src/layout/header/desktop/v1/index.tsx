'use client';

import { LinkProps } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { BrandLogo } from '../../../brand-logo';
import { useStickyHeader } from '../../utils/use-sticky-header';
import { cn } from '@/src/utils/shadcn';
import { Navigation } from '../common/navigation';
import { headerData } from 'data/layout/header/v1';

interface SubMenu {
  title: string;
  subMenuItems: LinkProps[];
}

export interface HeaderProps {
  menuItems: (LinkProps | SubMenu)[];
}

export function Header() {
  const { menuItems } = headerData;
  const isSticky = useStickyHeader(700);

  return (
    <header
      className={cn(
        'left-0 right-0 top-0 z-99 mx-auto hidden w-full py-[26px] lg:block',
        isSticky
          ? 'sticky-header fixed left-0 top-0 w-full animate-fadeInDown bg-white/90 backdrop-blur-md [box-shadow:0px_0px_15px_10px_rgba(58,0,81,.4)] dark:bg-accent-900/90'
          : 'absolute'
      )}
    >
      <Container>
        <div className="flex items-center justify-center gap-x-10">
          {/* Brand logo */}
          <div className="absolute left-4 lg:left-10">
            <BrandLogo />
          </div>

          {/* Navigation */}
          {menuItems && menuItems.length > 0 && (
            <div className="flex-grow">
              <Navigation menuItems={menuItems} />
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
