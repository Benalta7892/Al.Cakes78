export type Mold = {
  size: string;
  price: number;
};

export type Cake = {
  id: number;
  name: string;
  slug: string;
  images: string[];
  description: string;
  ingredients: string[];
  molds: Mold[];
  price: number;
  isFeatured: boolean;
};
