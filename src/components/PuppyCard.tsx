import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Puppy } from '@/types';

interface PuppyCardProps {
  puppy: Puppy;
  compact?: boolean;
}

export default function PuppyCard({ puppy, compact = false }: PuppyCardProps) {
  const isGone = puppy.status === 'Gone Home' || puppy.location === 'Gone Home';
  const isLocal = puppy.location === 'In Dubai';
  const imageSrc = puppy.featuredImage || (puppy.images && puppy.images[0]) || '/brand/logo.png';

  return (
    <article className="group relative flex flex-col rounded-3xl border-2 border-cocoa bg-milk overflow-hidden shadow-[4px_6px_0px_#2a170e] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_10px_0px_#2a170e]">
      {/* Image container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-honey-soft/40">
        <Image
          src={imageSrc}
          alt={`${puppy.name}, ${puppy.gender} ${puppy.breed} puppy`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges container */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 pointer-events-none">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${
              isGone
                ? 'bg-cocoa text-milk border-cocoa'
                : isLocal
                ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                : 'bg-honey text-cocoa border-cocoa/30'
            }`}
          >
            {isGone ? '🐾 Gone Home' : isLocal ? '📍 In Dubai Showroom' : '✈️ Imported For You'}
          </span>

          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-milk/90 text-cocoa border border-cocoa/20 shadow-sm backdrop-blur-xs">
            {puppy.gender === 'Boy' ? '♂️ Boy' : puppy.gender === 'Girl' ? '♀️ Girl' : puppy.gender}
          </span>
        </div>
      </div>

      {/* Info Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-plush text-2xl font-extrabold text-cocoa group-hover:text-toffee transition-colors">
              {puppy.name}
            </h3>
            <p className="font-medium text-sm text-cocoa-soft mt-0.5">
              {puppy.breed}
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-honey-soft/60 text-cocoa border border-cocoa/15">
            {puppy.age}
          </span>
        </div>

        {!compact && puppy.description && (
          <p className="mt-3 text-xs text-cocoa-soft/85 line-clamp-2 leading-relaxed">
            {puppy.description}
          </p>
        )}

        {/* Card Footer / CTA */}
        <div className="mt-auto pt-4 flex items-center gap-2">
          <Link
            href={`/puppies/${puppy.slug}`}
            className="flex-1 text-center py-2.5 px-4 rounded-full font-semibold text-sm border-2 border-cocoa bg-honey hover:bg-honey-soft text-cocoa transition-colors shadow-xs"
          >
            {isGone ? 'View Story' : 'Meet ' + puppy.name}
          </Link>

          {!isGone && (
            <a
              href={`https://wa.me/971541676733?text=${encodeURIComponent(
                `Hi TeddyPups! I'm interested in ${puppy.name}, the ${puppy.breed}: https://puppy.instabizweb.com/puppies/${puppy.slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Enquire on WhatsApp about ${puppy.name}`}
              className="inline-flex items-center justify-center size-10 rounded-full border-2 border-cocoa bg-emerald-500 text-white hover:bg-emerald-600 transition-colors shrink-0 shadow-xs"
            >
              <svg className="size-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.184 1.564 5.938l-1.66 6.072 6.224-1.632c1.701.928 3.652 1.455 5.727 1.455 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

