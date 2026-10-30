'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PuppyCard from '@/components/PuppyCard';
import { Puppy } from '@/types';

interface PuppyDetailClientProps {
  puppy: Puppy;
  relatedPuppies: Puppy[];
}

export default function PuppyDetailClient({
  puppy,
  relatedPuppies,
}: PuppyDetailClientProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const images =
    puppy.images && puppy.images.length > 0
      ? puppy.images
      : ['/brand/logo.png'];
  const currentImage = images[activeImageIndex] || images[0];

  const isGone = puppy.status === 'Gone Home' || puppy.location === 'Gone Home';
  const isLocal = puppy.location === 'In Dubai';

  const whatsappMessage = encodeURIComponent(
    `Hi TeddyPups! I'm interested in ${puppy.name}, the ${puppy.breed}: https://puppy.instabizweb.com/puppies/${puppy.slug}`
  );

  return (
    <div className="min-h-screen bg-milk pb-24">
      {/* Breadcrumb Bar */}
      <div className="border-b border-cocoa/10 bg-honey-soft/20 py-3">
        <div className="gutter mx-auto max-w-[110rem]">
          <nav
            aria-label="Breadcrumb"
            className="text-sm font-semibold text-cocoa-soft flex items-center gap-2"
          >
            <Link href="/" className="hover:text-toffee transition-colors">
              Home
            </Link>
            <span aria-hidden="true" className="text-cocoa/30">
              /
            </span>
            <Link href="/puppies" className="hover:text-toffee transition-colors">
              Available puppies
            </Link>
            <span aria-hidden="true" className="text-cocoa/30">
              /
            </span>
            <span aria-current="page" className="text-cocoa font-bold">
              {puppy.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="gutter mx-auto max-w-[110rem] pt-8 md:pt-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Photo Gallery */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Featured Photo */}
            <div
              onClick={() => setIsLightboxOpen(true)}
              className="group relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-3xl border-2 border-cocoa bg-honey-soft/30 shadow-[6px_8px_0px_#2a170e]"
            >
              <Image
                src={currentImage}
                alt={`${puppy.name} puppy photo`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-500 group-hover:scale-102"
              />

              <div className="absolute top-4 left-4 flex gap-2">
                <span
                  className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold border shadow-xs ${
                    isGone
                      ? 'bg-cocoa text-milk border-cocoa'
                      : isLocal
                      ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                      : 'bg-honey text-cocoa border-cocoa/30'
                  }`}
                >
                  {isGone
                    ? '🐾 Gone Home'
                    : isLocal
                    ? '📍 In Dubai Showroom'
                    : '✈️ Imported For You'}
                </span>
              </div>

              <div className="absolute bottom-4 right-4 rounded-full bg-cocoa/75 px-3 py-1.5 text-xs font-semibold text-milk backdrop-blur-xs">
                Click to expand ({activeImageIndex + 1}/{images.length})
              </div>
            </div>

            {/* Thumbnail selector */}
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2 pt-1 scrollbar-thin">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative size-20 sm:size-24 shrink-0 overflow-hidden rounded-2xl border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-toffee ring-2 ring-toffee ring-offset-2'
                        : 'border-cocoa/30 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Puppy Details & Purchase Flow */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-scrawl text-lg text-toffee">
                  {isGone
                    ? 'adopted into loving family'
                    : 'ready for a loving family'}
                </span>
                <span className="rounded-full bg-honey/40 px-3 py-1 text-xs font-bold text-cocoa border border-cocoa/20">
                  {puppy.gender === 'Boy'
                    ? '♂️ Boy'
                    : puppy.gender === 'Girl'
                    ? '♀️ Girl'
                    : puppy.gender}
                </span>
              </div>

              <h1 className="font-plush text-4xl sm:text-5xl font-extrabold text-cocoa mt-1 tracking-tight">
                {puppy.name}
              </h1>
              <p className="font-medium text-lg text-cocoa-soft mt-1">
                {puppy.breed}
              </p>

              {/* Specifications Card */}
              <div className="mt-6 rounded-2xl border-2 border-cocoa bg-honey-soft/40 p-5 shadow-[4px_4px_0px_#2a170e]">
                <h2 className="font-plush text-lg font-bold text-cocoa mb-3">
                  Puppy Details
                </h2>
                <dl className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
                  <div>
                    <dt className="text-xs font-bold uppercase text-cocoa/60">
                      Breed
                    </dt>
                    <dd className="font-semibold text-cocoa mt-0.5">
                      {puppy.breed}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase text-cocoa/60">
                      Gender
                    </dt>
                    <dd className="font-semibold text-cocoa mt-0.5">
                      {puppy.gender}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase text-cocoa/60">
                      Age
                    </dt>
                    <dd className="font-semibold text-cocoa mt-0.5">
                      {puppy.age}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase text-cocoa/60">
                      Availability
                    </dt>
                    <dd className="font-semibold text-cocoa mt-0.5">
                      {isGone
                        ? 'Adopted'
                        : isLocal
                        ? 'In Dubai Showroom'
                        : 'Imported for you'}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Description */}
              <div className="mt-6 space-y-3 text-sm text-cocoa-soft leading-relaxed">
                <p>{puppy.description}</p>
                <p>
                  Every puppy at TeddyPups is raised in clean, nurturing home
                  settings with early socialisation, proper nutrition, and
                  round-the-clock professional supervision.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                {!isGone ? (
                  <>
                    <a
                      href={`https://wa.me/971541676733?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp w-full !text-base !py-3.5 flex items-center justify-center gap-2 shadow-[4px_4px_0px_#2a170e]"
                    >
                      <svg className="size-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.184 1.564 5.938l-1.66 6.072 6.224-1.632c1.701.928 3.652 1.455 5.727 1.455 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
                      </svg>
                      <span>Enquire about {puppy.name} on WhatsApp</span>
                    </a>

                    <Link
                      href="/contact"
                      className="btn btn-ghost w-full !text-base !py-3 flex items-center justify-center border-2 border-cocoa"
                    >
                      Book a Downtown Dubai Showroom Visit
                    </Link>
                  </>
                ) : (
                  <div className="rounded-2xl border-2 border-cocoa bg-cocoa text-milk p-4 text-center">
                    <p className="font-plush text-lg font-bold">
                      This puppy has found a forever home
                    </p>
                    <p className="text-xs text-milk/75 mt-1">
                      Looking for a similar puppy? We can source one from certified
                      international breeders.
                    </p>
                    <a
                      href={`https://wa.me/971541676733?text=${encodeURIComponent(
                        `Hi TeddyPups! I loved ${puppy.name} (${puppy.breed}). Can you import a similar puppy for me?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block rounded-full bg-honey px-5 py-2 text-xs font-bold text-cocoa hover:bg-honey-soft"
                    >
                      Enquire about custom import
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* TeddyPups Promise List */}
            <div className="mt-10 pt-6 border-t border-cocoa/15">
              <h3 className="font-plush text-base font-bold text-cocoa mb-3">
                Every Teddy Pup comes with:
              </h3>
              <ul className="space-y-2 text-xs font-semibold text-cocoa-soft">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✓</span>
                  <span>1-Year Genetic Health Guarantee</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✓</span>
                  <span>Complete up-to-date vaccinations &amp; deworming</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✓</span>
                  <span>
                    Official Veterinary Health Certificate &amp; Passport
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✓</span>
                  <span>ISO Standard Electronic Microchip</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✓</span>
                  <span>Travel crate &amp; puppy welcome starter kit</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Puppies section */}
        {relatedPuppies.length > 0 && (
          <div className="mt-20 pt-12 border-t-2 border-cocoa">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="font-scrawl text-lg text-toffee block">
                  other cuties
                </span>
                <h2 className="font-plush text-3xl font-extrabold text-cocoa">
                  You might also love
                </h2>
              </div>
              <Link href="/puppies" className="btn btn-ghost !text-sm">
                View all &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPuppies.map((p) => (
                <PuppyCard key={p.id} puppy={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
        >
          <div className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl">
            <Image
              src={currentImage}
              alt="Full view"
              width={1200}
              height={900}
              className="max-h-[85vh] w-auto object-contain rounded-2xl"
            />
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 rounded-full bg-black/60 px-4 py-2 font-bold text-white hover:bg-black"
            >
              Close &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

