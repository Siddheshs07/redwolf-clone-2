import Link from "next/link";
import React from "react";

const SiteInfo = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-10 mb-10 mx-5 border  rounded-3xl border-gray-300 sm:px-16 px-6 py-10">
      <h1 className="text-xl font-bold  mb-4 ">
        COOL T-SHIRTS & DESIGNER MERCH ONLINE
      </h1>
      <p className=" text-justify leading-10">
        Redwolf is an indie clothing label that brings you the most amazing
        T-shirts and accessories online inspired by everything pop culture!
        Redwolf offers a wide range of products from cool T-shirts and
        sweatshirts to accessories like badges, posters, laptop skins and fridge
        magnets. A T-shirt is a perfect canvas to showcase your creativity,
        passion and personality. At Redwolf, We work with some of the best
        designers and illustrators from all around the globe to offer you a
        fresh and unique selection of designer T-shirts. If you’re looking for a
        T-shirt to help you express yourself and the things you love, we have
        you covered. Check out our collection of cool t shirts online in India.
        From funny T-shirts with epic parodies and hilarious one liners to
        intricate graphic designs inspired by your favorite movie and TV show
        characters. We have something for everyone! Our collection of online t
        shirts are screen printed to perfection on 100% cotton Redwolf T-shirts.
        We provide cash on delivery and free shipping all over India with a
        hassle free return policy to make sure you have a pleasant online
        shopping experience. All artwork posted on this website is intended as
        fan art and is not purported to be official merchandise unless indicated
        otherwise. If you have any issues regarding the artwork, do write in to
        us at
        <span className=" text-red-500">
          <Link href={"mailto:contact@redwolf.in"}> contact@redwolf.in</Link>
        </span>
      </p>
    </div>
  );
};

export default SiteInfo;
