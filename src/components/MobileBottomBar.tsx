import React from 'react';

export default function MobileBottomBar() {
  return (
    <div
      data-whatsapp-bar="true"
      className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-cocoa bg-milk px-3 pb-[calc(0.6rem+env(safe-area-inset-bottom))] pt-2.5 md:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.06)]"
    >
      <div className="mx-auto flex max-w-md gap-2">
        <a
          href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp !min-h-12 flex-1 !shadow-none font-semibold text-center justify-center"
        >
          WhatsApp us
        </a>
        <a
          href="tel:+971541676733"
          className="btn btn-ghost !min-h-12 !px-5 font-semibold text-center justify-center border-2 border-cocoa"
        >
          Call
        </a>
      </div>
    </div>
  );
}

