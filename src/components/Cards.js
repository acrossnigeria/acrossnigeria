import Link from 'next/link';
import Image from 'next/image';
import img from "../../public/images/logo1.png"
const BlogPostCard = (props) => {
    const{title, description}=props;
   
  return (
    <Link href="#" legacyBehavior><a 
  className="flex mb-4 flex-row gap-4 items-center mx-auto bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl
   hover:bg-gray-100 h-52 w-full lg:w-[400px] md:w-[400px] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
 <div className='p4'> <Image width={100} height={100} className="rounded-t-lg left-0 md:rounded-none md:rounded-s-lg"
    src={img} alt=""/></div>
  <div className="justify-between p-4 leading-normal">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
  </div>
</a></Link>
  );
};

export default BlogPostCard;
<div className=''></div>