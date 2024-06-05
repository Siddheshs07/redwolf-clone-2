import { dataProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

import { getAllCloths } from "@/utils/fetchData";

const ProductsPage = async () => {
  const allProduct = await getAllCloths();
  return (
    <div className=" flex flex-col">
      <div>
        {" "}
        <h1 className="text-2xl font-bold uppercase mb-5 mt-3 text-center ">
          ALL PRODUCTS
        </h1>
      </div>
      <div className="grid grid-cols-5 gap-4 max-md:grid-cols-1 ">
        {allProduct?.map((product: dataProps) => {
          return (
            <div
              key={product._id}
              className="flex flex-col justify-center items-center  rounded-xl"
            >
              <div className="flex justify-center">
                <Link href={`/products/${product._id}`}>
                  {" "}
                  <Image
                    src={product.link}
                    alt={product.brandName}
                    width={200}
                    height={200}
                    priority={true}
                    className="p-4 w-80 h-96 rounded-[2.5rem]"
                  />
                </Link>
              </div>
              <div className=" text-justify">
                <h1 className="font-bold">{product.brandName}</h1>
                <p>
                  <span>MRP: </span>
                  <span className=" line-through">{product.strickPrice} ₹</span>
                </p>
                <p>
                  <span> Final Price: </span>
                  <span>{product.finalPrice} ₹</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
