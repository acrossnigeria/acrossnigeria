import Image from 'next/image';
import Link from 'next/link';

const PersonCard = ({ imageUrl, name, age, occupation }) => {
  return (
    <div className="p-8 flex flex-1 items-center lg:px-44 mx-auto space-x-4">
      <div className="relative w-96 h-80">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className='grid md:pl-32 grid-cols-1'>
        <h2 className="text-xl font-bold">{name}</h2>
        <p className='font-semibold'>{`Age: ${age}`}</p>
        <p className='font-semibold'>{`Occupation: ${occupation}`}</p>
        <div className="bg-gray-100 border-l-4 border-gray-500 text-gray-700 p-2">
  <p className="text-lg font-bold mb-4 italic">{'"Whatever a woman would like to say to the world."'}</p>
  <p className="text-sm">-Amina Yusuf</p>
</div><Link className='underline mt-8 text-green-500' href="/shoutout/booking">Make a shout Out</Link>

      </div>
       
    </div>
  );
};

export default PersonCard;