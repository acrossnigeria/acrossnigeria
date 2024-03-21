
import BearCarousel, { BearSlideImage } from "bear-react-carousel";
import "bear-react-carousel/dist/index.css";

const images = [
  { id: 1, image: "/images/landing/image1.jpg" },
  { id: 2, image: "/images/landing/image2.jpg" },
  { id: 3, image: "/images/landing/image3.jpg" },
  { id: 4, image: "/images/landing/image4.jpg" },
  { id: 5, image: "/images/landing/image5.jpg" },
  { id: 6, image: "/images/landing/image6.jpg" },
  { id: 7, image: "/images/landing/image7.jpg" },
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
     
      height={{ widthRatio: 21, heightRatio: 18 }}
    />
  );
};

export default CustomBanner;
