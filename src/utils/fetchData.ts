import { dataProps } from "@/types";
import axios, { AxiosResponse } from "axios";

export async function getAllCloths() {
  try {
    const res: AxiosResponse = await axios.get(
      "http://localhost:3000/api/products"
    );
    const product = await res.data;
    return product;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getMaleCloths() {
  const product = await getAllCloths();
  return product.filter((event: dataProps) => event.gender === "M");
}
export async function getFemaleCloths() {
  const product = await getAllCloths();
  return product.filter((event: dataProps) => event.gender === "F");
}
export async function filteredBySize() {
  const product = await getAllCloths();
  return product.filter((event: dataProps) => event.productSize);
}
export async function getBrands() {
  const product = await getAllCloths();
  return product.filter((event: dataProps) => event.brandName);
}
export async function getFeaturedProducts() {
  const product = await getAllCloths();
  return product.filter((event: dataProps) => event.isFeatured);
}
export async function getProductById(productId: string) {
  const product = await getAllCloths();
  // console.log(product);
  return product.find((event: dataProps) => event._id === productId);
}
