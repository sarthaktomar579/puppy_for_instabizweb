'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Puppies', href: '/puppies' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Happy families', href: '/happy-families' },
    { label: 'Gone home', href: '/gone-home' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Visit & contact', href: '/contact' },
  ];

  const pawPath = "M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z";

  return (
    <>
      <header
        id="site-header"
        data-scrolled={isScrolled ? "true" : "false"}
        data-hidden="false"
        data-home={pathname === '/' ? "true" : "false"}
        className="tp-header fixed inset-x-0 top-0 z-50 transition-all duration-300"
      >
        <div className="tp-header__bar gutter">
          <Link className="tp-header__brand" aria-label="TeddyPups U.A.E. home" href="/">
            <Image
              alt="TeddyPups Logo"
              width={56}
              height={56}
              priority
              className="tp-header__logo"
              src="/brand/logo.png"
            />
            <span className="font-plush tp-header__name">TeddyPups</span>
          </Link>

          <nav aria-label="Main" className="tp-header__nav hidden lg:block">
            <ul>
              {navLinks.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <li key={item.href}>
                    <Link
                      data-active={isActive ? "true" : "false"}
                      aria-current={isActive ? "page" : undefined}
                      className="tp-nav-link"
                      href={item.href}
                    >
                      <span>{item.label}</span>
                      <svg viewBox="0 0 64 64" className="tp-nav-link__paw" aria-hidden="true" fill="currentColor">
                        <path d={pawPath} />
                      </svg>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="tp-header__end flex items-center gap-3">
            <a
              href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp tp-header__wa hidden sm:inline-flex"
            >
              WhatsApp us
            </a>

            <button
              type="button"
              onClick={() => setIsMobileOpen(true)}
              className="inline-flex h-10 items-center gap-2 rounded-full border-2 border-cocoa bg-milk px-4 text-[0.95rem] font-semibold lg:hidden shadow-sm hover:bg-honey-soft transition-colors"
              aria-haspopup="dialog"
              aria-label="Open mobile navigation menu"
            >
              <svg viewBox="0 0 64 64" className="size-4" aria-hidden="true" fill="currentColor">
                <path d={pawPath} />
              </svg>
              <span>Menu</span>
            </button>
          </div>
        </div>

        {/* Scalloped hem decoration */}
        <svg aria-hidden="true" className="tp-header__hem" width="100%" height="14" preserveAspectRatio="none">
          <defs>
            <pattern id="tp-hem" width="44" height="14" patternUnits="userSpaceOnUse">
              <path d="M0 0H44V2A22 11 0 0 1 0 2Z" className="tp-header__hem-fill" />
              <path d="M0 2A22 11 0 0 0 44 2" className="tp-header__hem-line" />
            </pattern>
          </defs>
          <rect width="100%" height="14" fill="url(#tp-hem)" />
        </svg>
      </header>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-[100] bg-cocoa/50 backdrop-blur-sm transition-opacity">
          <dialog
            open
            aria-label="Site menu"
            className="tp-menu m-0 h-dvh max-h-none w-screen max-w-none bg-honey p-0 text-cocoa animate-in fade-in slide-in-from-top-4 duration-300"
          >
            <div className="flex h-full flex-col gutter pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-5 overflow-y-auto">
              <div className="flex items-center justify-between">
                <span className="font-scrawl text-xl">where to, friend? 🐾</span>
                <button
                  type="button"
                  onClick={() => setIsMobileOpen(false)}
                  className="h-11 rounded-full bg-cocoa px-5 font-semibold text-milk hover:bg-cocoa-soft transition-colors"
                >
                  Close
                </button>
              </div>

              <nav aria-label="Mobile" className="mt-8 flex-1">
                <ul className="space-y-1">
                  {navLinks.map((item) => {
                    const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                    return (
                      <li key={item.href}>
                        <Link
                          onClick={() => setIsMobileOpen(false)}
                          aria-current={isActive ? "page" : undefined}
                          data-active={isActive ? "true" : "false"}
                          className="tp-menu-link font-plush block py-2 text-[clamp(2.2rem,9vw,3.2rem)] flex items-center justify-between"
                          href={item.href}
                        >
                          <span>{item.label}</span>
                          {isActive && (
                            <svg viewBox="0 0 64 64" className="size-6 text-toffee shrink-0" aria-hidden="true" fill="currentColor">
                              <path d={pawPath} />
                            </svg>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="space-y-3 pt-6 border-t border-cocoa/15">
                <a
                  href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies."
                  className="btn btn-whatsapp w-full !text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp us
                </a>
                <p className="text-center text-sm font-medium text-cocoa-soft">
                  Downtown Dubai &bull; +971 54 167 6733
                </p>
              </div>
            </div>
          </dialog>
        </div>
      )}
    </>
  );
}

