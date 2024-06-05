// import { getProductById } from "@/utils/fetchData";
// import Image from "next/image";
// import AddToCart from "./AddToCart";

// type Props = {
//   productId: string;
// };
// const ProductDetail = async ({ productId }: Props) => {
//   const product = await getProductById(productId);
//   console.log("Product Detail", product);

//   return (
//     <>
//       <div className="container m-auto ">
//         <div className="flex items-center my-8 mx-8 justify-normal border border-gray-400 rounded-xl max-md:flex-col ">
//           <div className="w-auto">
//             <Image
//               src={product.link}
//               alt={product.brandName}
//               width={500}
//               height={500}
//               className="p-4 w-96 h-96 rounded-[2.5rem]"
//             />
//           </div>
//           <div className="p-4 m-4 w-full">
//             <h1 className=" font-bold text-2xl">
//               Brand Name: {product.brandName}
//             </h1>
//             <p className="text-gray-600 flex flex-col">
//               <span className="font-semibold">Description:</span>
//               <span>{product.description}</span>
//             </p>
//             <p className="text-gray-600 ">
//               <span className="font-semibold">MRP:</span>
//               <span className=" text-gray-400 line-through ">
//                 {product.strickPrice}
//               </span>
//             </p>
//             <p className="text-gray-600">
//               <span className="font-semibold">Final Price:</span>
//               <span>{product.finalPrice}</span>
//             </p>
//             <p className="text-gray-600">
//               <span className="font-semibold">Discount: </span>
//               <span>{product.discount}%</span>
//             </p>
//             <p className=" cursor-pointer text-gray-600">
//               <span className="font-semibold"> Size: </span>
//               <span className="m-1 p-1  text-gray-900 uppercase text-md">
//                 {product.productSize.split(",")}
//               </span>
//             </p>
//             <AddToCart products={product} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default ProductDetail;
