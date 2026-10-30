export interface Puppy {
  id: string;
  slug: string;
  name: string;
  breed: string;
  gender: 'Boy' | 'Girl' | 'Male & Female';
  age: string;
  location: 'In Dubai' | 'Imported for you' | 'Gone Home';
  status: 'Available' | 'Gone Home';
  featuredImage: string;
  images: string[];
  description: string;
  specs: {
    breed?: string;
    'boy or girl'?: string;
    gender?: string;
    age?: string;
    where?: string;
    [key: string]: string | undefined;
  };
  price?: string;
  tags?: string[];
  adoptionStory?: string;
  family?: string;
}

export interface FAQItem {
  id?: string;
  category?: string;
  question: string;
  answer: string;
}

export interface FamilyStory {
  id: string;
  puppyName: string;
  breed: string;
  familyName: string;
  location: string;
  quote: string;
  image: string;
  date?: string;
}

