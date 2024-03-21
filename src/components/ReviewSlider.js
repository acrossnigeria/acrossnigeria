
import BearCarousel, { BearSlideImage } from "bear-react-carousel";
import "bear-react-carousel/dist/index.css";

const images = [
  { id: 1, image: "/images/landing/image1.jpg" },
  { id: 2, image: "/images/landing/image2.jpg" },
  { id: 3, image: "/images/landing/image3.jpg" }
];

const bearSlideItemData = images.map((row) => {
  return {
    key: row.id,
    children: <BearSlideImage imageUrl={row.image} />
  };
});

const CustomBanner = () => {
  return (
    <BearCarousel
      data={bearSlideItemData}
      isEnableLoop
      autoPlayTime={3000}
      isEnableAutoPlay
      isEnablePagination
     className="bg-green-700 text-green-700"
      height={{ widthRatio: 21, heightRatio: 18 }}
    />
  );
};

export default CustomBanner;
