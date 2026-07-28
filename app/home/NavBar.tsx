'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import { Sheet, SheetTitle, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const Services = [
  {
    title: 'Website Development',
    href: '/services/web',
    description: 'Responsive and modern websites',
  },
  {
    title: 'Mobile App Development',
    href: '/services/mobile',
    description: 'iOS & Android apps',
  },
  {
    title: 'UI/UX Design',
    href: '/services/uiux',
    description: 'User-focused design',
  },
  {
    title: 'Digital Marketing',
    href: '/services/marketing',
    description: 'Grow your business online',
  },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  const linkClass = (path: string) =>
    `${navigationMenuTriggerStyle()} ${
      pathname === path
        ? 'bg-gray-100 text-[var(--primary-color)]'
        : 'hover:text-[var(--primary-color)]'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/comfavorLog.png" alt="Logo" width={120} height={40} priority />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  href="/"
                  className={linkClass('/')}
                  aria-current={pathname === '/' ? 'page' : undefined}
                >
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/aboutus"
                  className={linkClass('/aboutus')}
                  aria-current={pathname === '/aboutus' ? 'page' : undefined}
                >
                  About Us
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/products"
                  className={`${navigationMenuTriggerStyle()} ${
                    pathname === '/products' || pathname.startsWith('/products/')
                      ? 'bg-gray-100 text-[var(--primary-color)]'
                      : 'hover:text-[var(--primary-color)]'
                  }`}
                  aria-current={
                    pathname === '/products' || pathname.startsWith('/products/')
                      ? 'page'
                      : undefined
                  }
                >
                  Products
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={
                    pathname.startsWith('/services')
                      ? 'bg-gray-100 text-(--primary-color)'
                      : 'hover:text-(--primary-color)'
                  }
                  aria-current={pathname.startsWith('/services') ? 'page' : undefined}
                >
                  Services
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid w-[500px] grid-cols-2 gap-3 p-4">
                    {Services.map((s) => (
                      <li key={s.title}>
                        <Link href={s.href} className="block rounded-md p-3 hover:bg-green-50">
                          <p className="font-medium text-green-700">{s.title}</p>
                          <p className="text-sm text-gray-600">{s.description}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/blogs"
                  className={linkClass('/blogs')}
                  aria-current={
                    pathname === '/blogs' || pathname.startsWith('/blogs/') ? 'page' : undefined
                  }
                >
                  Blogs
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/careers"
                  className={linkClass('/careers')}
                  aria-current={
                    pathname === '/careers' || pathname.startsWith('/careers/') ? 'page' : undefined
                  }
                >
                  Careers
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/contact"
                  className={linkClass('/contact')}
                  aria-current={
                    pathname === '/contact' || pathname.startsWith('/contact/') ? 'page' : undefined
                  }
                >
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="flex size-10 items-center justify-center rounded-md border border-gray-200 bg-white shadow-sm transition-transform duration-300 hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] focus-visible:ring-offset-2 focus-visible:outline-none motion-reduce:transition-none"
              >
                <Menu
                  className={`h-5 w-5 text-gray-700 transition-transform duration-300 motion-reduce:transition-none ${
                    open ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                  }`}
                />
                <X
                  className={`absolute h-5 w-5 text-gray-700 transition-transform duration-300 motion-reduce:transition-none ${
                    open ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
                  }`}
                />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="flex w-72 flex-col p-0">
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b px-4 py-3">
                <Link href="/" onClick={() => setOpen(false)}>
                  <Image src="/comfavorLog.png" alt="Logo" width={100} height={34} />
                </Link>

                <SheetClose asChild>
                  <button
                    aria-label="Close menu"
                    className="flex size-9 items-center justify-center rounded-md hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] focus-visible:outline-none"
                  >
                    <X className="h-5 w-5 text-gray-600" />
                  </button>
                </SheetClose>
              </div>

              {/* Accessibility title (hidden) */}
              <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>

              {/* Nav Links */}
              <nav className="flex flex-col gap-1 overflow-y-auto px-3 pb-6 pt-4">
                <MobileLink href="/" pathname={pathname} onNav={() => setOpen(false)}>
                  Home
                </MobileLink>
                <MobileLink href="/aboutus" pathname={pathname} onNav={() => setOpen(false)}>
                  About Us
                </MobileLink>
                <MobileLink href="/products" pathname={pathname} onNav={() => setOpen(false)}>
                  Products
                </MobileLink>

                {/* Services Group */}
                <div className="mt-2">
                  <p className="mb-1 flex items-center gap-1.5 border-l-2 border-green-500 pl-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    <ChevronRight className="h-3 w-3 text-green-500" />
                    Services
                  </p>
                  <div className="ml-3 space-y-0.5 border-l-2 border-green-100 pl-2">
                    {Services.map((s) => (
                      <MobileLink
                        key={s.title}
                        href={s.href}
                        pathname={pathname}
                        onNav={() => setOpen(false)}
                      >
                        {s.title}
                      </MobileLink>
                    ))}
                  </div>
                </div>

                <MobileLink href="/blogs" pathname={pathname} onNav={() => setOpen(false)}>
                  Blogs
                </MobileLink>
                <MobileLink href="/careers" pathname={pathname} onNav={() => setOpen(false)}>
                  Careers
                </MobileLink>
                <MobileLink href="/contact" pathname={pathname} onNav={() => setOpen(false)}>
                  Contact
                </MobileLink>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Mobile Link ---------------- */

function MobileLink({
  href,
  pathname,
  onNav,
  children,
}: {
  href: string;
  pathname: string;
  onNav: () => void;
  children: React.ReactNode;
}) {
  const active = pathname === href || pathname.startsWith(href + '/');

  return (
    <Link
      href={href}
      onClick={onNav}
      className={`flex items-center rounded-md px-4 py-3.5 text-sm transition-colors duration-200 motion-reduce:transition-none ${
        active
          ? 'bg-green-50 font-medium text-green-700'
          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
      }`}
      aria-current={active ? 'page' : undefined}
    >
      {children}
    </Link>
  );
}
