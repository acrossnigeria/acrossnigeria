import Link from 'next/link';
import Image from 'next/image';
const BlogPostCard = (props) => {
    const{title, image, link}=props;
     return (
    <Link href={link}legacyBehavior><a 
  className="relative flex mb-4 gap-0 items-center mx-auto bg-transparent border border-gray-200 rounded-lg shadow-lg shadow-gray-700 md:flex-row md:max-w-xl
   hover:bg-gray-100 h-36 w-full xl:w-[400px] lg:w-[300px] md:w-200px] overflow-clip">
 <Image className="rounded-t-lg relative md:rounded-none md:rounded-s-lg"
    src={image} alt={title} layout="fill"
        objectFit="cover"
        quality={100}/>
  
</a></Link>
  );
};

export default BlogPostCard;
<div className=''></div>