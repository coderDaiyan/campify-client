export interface TProduct {
  number: any;
  name: string;
  price: number;
  stockQuantity: number;
  description: string;
  category: { name: string };
  ratings: number;
  images: string[];
  _id: string;
}
