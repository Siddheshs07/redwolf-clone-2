import { topBannerItems } from "@/constants/top-banner-items";
import Image from "next/image";
import classes from "./css/TopBanner.module.css";

const TopBanner = () => {
  return (
    <div className={classes.slider}>
      <div className={classes.sliderTrack}>
        {topBannerItems.map((item, index) => {
          return (
            <div key={index} className={`${classes.slide}`}>
              <Image
                src={item.url}
                alt={item.title}
                width={165}
                height={90}
                className={classes.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopBanner;
