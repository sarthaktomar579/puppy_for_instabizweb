import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import puppiesData from '@/data/puppies.json';
import { Puppy } from '@/types';
import PuppyDetailClient from './PuppyDetailClient';

interface PuppyPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const allPuppies = puppiesData as Puppy[];
  return allPuppies.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: PuppyPageProps): Metadata {
  const allPuppies = puppiesData as Puppy[];
  const puppy = allPuppies.find((p) => p.slug === params.slug);

  if (!puppy) {
    return {
      title: 'Puppy Not Found | TeddyPups U.A.E.',
    };
  }

  return {
    title: `${puppy.name}, ${puppy.breed} puppy | TeddyPups U.A.E.`,
    description: `Meet ${puppy.name}, a delightful ${puppy.gender} ${puppy.breed} puppy available at TeddyPups Dubai. Health-guaranteed, vaccinated, and microchipped.`,
    openGraph: {
      title: `${puppy.name}, ${puppy.breed} | TeddyPups U.A.E.`,
      description: puppy.description,
      images: puppy.featuredImage ? [{ url: puppy.featuredImage }] : [],
    },
  };
}

export default function PuppyDetailPage({ params }: PuppyPageProps) {
  const allPuppies = puppiesData as Puppy[];
  const puppy = allPuppies.find((p) => p.slug === params.slug);

  if (!puppy) {
    notFound();
  }

  const relatedPuppies = allPuppies
    .filter((p) => p.slug !== puppy.slug && p.status !== 'Gone Home')
    .slice(0, 3);

  return <PuppyDetailClient puppy={puppy} relatedPuppies={relatedPuppies} />;
}
