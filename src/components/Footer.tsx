import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const twinkleStars = [
    { left: '6%', top: '18%', width: '12.6px', delay: '0.00s' },
    { left: '14%', top: '42%', width: '8.4px', delay: '0.40s' },
    { left: '23%', top: '12%', width: '9.8px', delay: '0.80s' },
    { left: '31%', top: '30%', width: '7px', delay: '1.20s' },
    { left: '42%', top: '16%', width: '11.2px', delay: '1.60s' },
    { left: '55%', top: '38%', width: '8.4px', delay: '0.30s' },
    { left: '68%', top: '14%', width: '14px', delay: '0.90s' },
    { left: '79%', top: '32%', width: '7px', delay: '1.50s' },
    { left: '89%', top: '20%', width: '11.2px', delay: '0.60s' },
  ];

  return (
    <footer className="tp-footer relative pb-[calc(var(--bar-h)+2rem)] text-milk md:pb-10 bg-cocoa overflow-hidden">
      {/* Top wavy hill divider */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="tp-footer__hill w-full h-12 text-cocoa"
      >
        <path
          d="M0 80V44c120-30 240-44 360-30s240 46 360 34 240-58 360-46 240 40 360 26v52z"
          fill="currentColor"
        />
      </svg>

      {/* Sparkling background stars */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-6 h-64 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {twinkleStars.map((star, idx) => (
            <svg
              key={idx}
              viewBox="0 0 40 40"
              className="tp-twinkle absolute text-honey"
              style={{
                left: star.left,
                top: star.top,
                width: star.width,
                animationDelay: star.delay,
              }}
              aria-hidden="true"
            >
              <path
                d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z"
                fill="currentColor"
              />
            </svg>
          ))}
        </div>
      </div>

      <div className="gutter relative mx-auto max-w-[110rem] pt-12 md:pt-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand info */}
          <div className="space-y-4 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/brand/logo.png"
                alt="TeddyPups Logo"
                width={50}
                height={50}
                className="size-12 drop-shadow"
              />
              <span className="font-plush text-3xl font-extrabold text-honey">TeddyPups</span>
            </Link>
            <p className="max-w-md text-sm text-milk/75 leading-relaxed">
              Ethical, premium teacup &amp; toy puppies in Dubai. Health-guaranteed, microchipped, and raised with unmatched warmth, love, and professional veterinary care.
            </p>
            <div className="pt-2">
              <span className="inline-block rounded-full bg-honey/15 px-3.5 py-1 text-xs font-semibold text-honey border border-honey/30">
                Downtown Dubai Showroom &bull; By Appointment
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="font-plush text-lg font-bold text-honey mb-4">Explore</h2>
            <ul className="space-y-2.5 text-sm text-milk/80 font-medium">
              <li>
                <Link href="/" className="hover:text-honey transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/puppies" className="hover:text-honey transition-colors">Available puppies</Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-honey transition-colors">How it works</Link>
              </li>
              <li>
                <Link href="/happy-families" className="hover:text-honey transition-colors">Happy families</Link>
              </li>
              <li>
                <Link href="/gone-home" className="hover:text-honey transition-colors">Gone home</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-honey transition-colors">Questions &amp; answers</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-honey transition-colors">Visit &amp; contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact info & socials */}
          <div>
            <h2 className="font-plush text-lg font-bold text-honey mb-4">Say hello</h2>
            <div className="space-y-3 text-sm text-milk/80 font-medium">
              <p>Downtown Dubai, United Arab Emirates</p>
              <p>
                <a
                  href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-honey transition-colors flex items-center gap-1.5"
                >
                  <span>WhatsApp:</span>
                  <span className="font-semibold text-honey">+971 54 167 6733</span>
                </a>
              </p>
              <p className="text-xs text-milk/60">
                Open Daily: 10:00 AM &ndash; 9:00 PM (GST)
              </p>

              <div className="pt-3">
                <ul className="flex flex-wrap gap-2" aria-label="Social media">
                  <li>
                    <a
                      href="https://www.instagram.com/teddypups.worldwide/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 items-center rounded-full border border-milk/30 px-3.5 text-xs font-semibold hover:border-honey hover:text-honey transition-colors"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@teddypupsuae"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 items-center rounded-full border border-milk/30 px-3.5 text-xs font-semibold hover:border-honey hover:text-honey transition-colors"
                    >
                      TikTok
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=61567496944539"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 items-center rounded-full border border-milk/30 px-3.5 text-xs font-semibold hover:border-honey hover:text-honey transition-colors"
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative mt-12 flex flex-col items-start justify-between gap-4 border-t border-milk/15 pt-6 text-sm text-milk/60 md:flex-row md:items-center">
          <span className="flex items-center gap-2">
            <Image
              alt="Logo"
              width={28}
              height={28}
              className="size-7 opacity-80"
              src="/brand/logo.png"
            />
            &copy; 2026 TeddyPups U.A.E. All rights reserved.
          </span>
          <span className="font-scrawl text-base text-honey/90 tracking-wide">
            every puppy is family 🐾
          </span>
        </div>
      </div>
    </footer>
  );
}

