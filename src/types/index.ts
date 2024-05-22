export type NavItems = {
  label: string;
  link?: string;
  children?: NavItems[];
};
export interface dataProps {
  _id: string;
  brandName: string;
  description: string;
  gender: string;
  finalPrice: string;
  strickPrice: string;
  discount: number;
  productSize: string;
  link: string;
  quantity: number;
  id: number;
  isFeatured: boolean;
}
