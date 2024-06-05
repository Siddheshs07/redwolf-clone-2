import { dataProps } from "@/types";
import { getFeaturedProducts } from "@/utils/fetchData";
import Image from "next/image";
import Link from "next/link";

const FeaturedProducts = async () => {
  const products = await getFeaturedProducts();
  return (
    <div className="flex flex-col ">
      <div>
        <h1 className="text-2xl font-bold mb-2 text-center uppercase">
          Featured Products
        </h1>
      </div>
      <div className="grid grid-cols-5  max-md:grid-cols-2">
        {products?.slice(0, 10).map((product: dataProps) => {
          return (
            <div key={product._id}>
              <div className="flex flex-col justify-between items-center gap-0 m-0 p-0">
                <div className="flex justify-between">
                  <Link href={`/products/${product._id}`}>
                    <Image
                      src={product.link}
                      alt={product.brandName}
                      width={200}
                      height={200}
                      className="p-4 w-80 h-96  bg-zinc-300 "
                    />
                  </Link>
                </div>
                <div className=" text-justify">
                  <h1 className="font-bold">{product.brandName}</h1>
                  <p>
                    <span>MRP: </span>
                    <span className=" line-through">
                      {product.strickPrice} ₹
                    </span>
                  </p>
                  <p>
                    <span>Final Price: </span>
                    <span>{product.finalPrice} ₹</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FeaturedProducts;
