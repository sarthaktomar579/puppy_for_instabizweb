'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import puppiesData from '@/data/puppies.json';
import PuppyCard from '@/components/PuppyCard';
import { Puppy } from '@/types';

export default function PuppiesPage() {
  const allPuppies = puppiesData as Puppy[];
  
  const [selectedBreed, setSelectedBreed] = useState<string>('All');
  const [selectedGender, setSelectedGender] = useState<string>('All');
  const [selectedLocation, setSelectedLocation] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const breeds = ['All', 'Maltipoo', 'Cavapoo', 'Pomeranian', 'Poodle', 'Shih Tzu'];

  // Filter available puppies
  const availablePuppies = useMemo(() => {
    return allPuppies.filter((p) => p.status !== 'Gone Home');
  }, [allPuppies]);

  // Adopted puppies
  const goneHomePuppies = useMemo(() => {
    return allPuppies.filter((p) => p.status === 'Gone Home');
  }, [allPuppies]);

  const filteredPuppies = useMemo(() => {
    return availablePuppies.filter((p) => {
      // Breed match
      if (selectedBreed !== 'All') {
        const pBreed = p.breed.toLowerCase();
        if (selectedBreed === 'Maltipoo' && !pBreed.includes('maltipoo')) return false;
        if (selectedBreed === 'Cavapoo' && !pBreed.includes('cavapoo')) return false;
        if (selectedBreed === 'Pomeranian' && !pBreed.includes('pomeranian')) return false;
        if (selectedBreed === 'Poodle' && !pBreed.includes('poodle')) return false;
        if (selectedBreed === 'Shih Tzu' && !pBreed.includes('shitzu') && !pBreed.includes('shih tzu')) return false;
      }

      // Gender match
      if (selectedGender !== 'All') {
        if (p.gender !== selectedGender) return false;
      }

      // Location match
      if (selectedLocation !== 'All') {
        if (selectedLocation === 'In Dubai' && !p.location.includes('Dubai')) return false;
        if (selectedLocation === 'Imported' && !p.location.includes('Imported')) return false;
      }

      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesBreed = p.breed.toLowerCase().includes(query);
        const matchesDesc = p.description.toLowerCase().includes(query);
        if (!matchesName && !matchesBreed && !matchesDesc) return false;
      }

      return true;
    });
  }, [availablePuppies, selectedBreed, selectedGender, selectedLocation, searchQuery]);

  return (
    <div className="min-h-screen bg-milk pb-20">
      {/* Hero Banner Header */}
      <section className="relative overflow-hidden border-b-2 border-cocoa bg-honey-soft/50 py-12 md:py-16">
        <div className="gutter mx-auto max-w-[110rem]">
          <span className="font-scrawl text-lg text-toffee block mb-2">our current litters &bull; ethically raised</span>
          <h1 className="font-plush text-4xl sm:text-5xl md:text-6xl font-extrabold text-cocoa tracking-tight">
            Available puppies
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-cocoa-soft leading-relaxed">
            Every puppy is raised with love, fully vaccinated, microchipped, and veterinary-checked. Visit our showroom in Downtown Dubai or enquire for custom concierge adoption.
          </p>

          {/* Search bar & filter pills */}
          <div className="mt-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by puppy name or breed (e.g. Maltipoo, Max)..."
                  className="w-full rounded-full border-2 border-cocoa bg-milk px-5 py-3 text-sm font-medium text-cocoa placeholder:text-cocoa/40 focus:outline-none focus:ring-2 focus:ring-honey shadow-xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-cocoa/60 hover:text-cocoa"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Location filter */}
              <div className="flex gap-2">
                {['All', 'In Dubai', 'Imported'].map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setSelectedLocation(loc)}
                    className={`rounded-full border-2 border-cocoa px-4 py-2.5 text-xs font-bold transition-all shadow-xs ${
                      selectedLocation === loc
                        ? 'bg-cocoa text-milk'
                        : 'bg-milk text-cocoa hover:bg-honey-soft'
                    }`}
                  >
                    {loc === 'In Dubai' ? '📍 In Dubai' : loc === 'Imported' ? '✈️ Imported' : 'All Locations'}
                  </button>
                ))}
              </div>
            </div>

            {/* Breed filter buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cocoa-soft mr-2">Breed:</span>
              {breeds.map((b) => (
                <button
                  key={b}
                  onClick={() => setSelectedBreed(b)}
                  className={`rounded-full border-2 border-cocoa px-3.5 py-1.5 text-xs font-semibold transition-all ${
                    selectedBreed === b
                      ? 'bg-honey text-cocoa font-bold shadow-xs'
                      : 'bg-milk text-cocoa hover:bg-honey-soft/50'
                  }`}
                >
                  {b}
                </button>
              ))}

              <div className="ml-auto flex items-center gap-2 pl-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cocoa-soft mr-1">Gender:</span>
                {['All', 'Boy', 'Girl'].map((g) => (
                  <button
                    key={g}
                    onClick={() => setSelectedGender(g)}
                    className={`rounded-full border border-cocoa/40 px-3 py-1 text-xs font-semibold ${
                      selectedGender === g
                        ? 'bg-cocoa text-milk'
                        : 'bg-milk text-cocoa hover:bg-honey-soft/40'
                    }`}
                  >
                    {g === 'Boy' ? '♂️ Boy' : g === 'Girl' ? '♀️ Girl' : 'All'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Puppy Grid */}
      <section className="gutter mx-auto max-w-[110rem] py-12 md:py-16">
        <div className="flex items-center justify-between pb-6 border-b border-cocoa/15">
          <p className="text-sm font-semibold text-cocoa-soft">
            Showing <span className="font-extrabold text-cocoa">{filteredPuppies.length}</span> {filteredPuppies.length === 1 ? 'puppy' : 'puppies'}
          </p>
          {(selectedBreed !== 'All' || selectedGender !== 'All' || selectedLocation !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedBreed('All');
                setSelectedGender('All');
                setSelectedLocation('All');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-toffee underline hover:text-toffee-deep"
            >
              Reset all filters
            </button>
          )}
        </div>

        {filteredPuppies.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-scrawl text-2xl text-toffee mb-2">no puppies match your filters 🐾</p>
            <p className="text-sm text-cocoa-soft mb-6">
              We frequently welcome new litters. Chat with us on WhatsApp to order your desired breed!
            </p>
            <button
              onClick={() => {
                setSelectedBreed('All');
                setSelectedGender('All');
                setSelectedLocation('All');
                setSearchQuery('');
              }}
              className="btn btn-primary"
            >
              Show all puppies
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPuppies.map((puppy) => (
              <PuppyCard key={puppy.id} puppy={puppy} />
            ))}
          </div>
        )}
      </section>

      {/* Already Gone Home Section */}
      <section className="border-t-2 border-cocoa bg-honey-soft/30 py-16">
        <div className="gutter mx-auto max-w-[110rem]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="font-scrawl text-lg text-toffee block">happy forever homes</span>
              <h2 className="font-plush text-3xl sm:text-4xl font-extrabold text-cocoa">
                Already gone home
              </h2>
              <p className="text-sm sm:text-base text-cocoa-soft mt-1">
                These little angels have already found loving families across Dubai and the UAE.
              </p>
            </div>
            <Link
              href="/gone-home"
              className="btn btn-ghost !text-sm whitespace-nowrap self-start sm:self-auto"
            >
              View all adopted puppies &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {goneHomePuppies.slice(0, 4).map((puppy) => (
              <PuppyCard key={puppy.id} puppy={puppy} compact />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
