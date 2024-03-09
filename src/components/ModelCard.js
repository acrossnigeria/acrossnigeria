import Image from 'next/image';

const PersonCard = ({ imageUrl, name, age, occupation }) => {
  return (
    <div className="p-12 flex flex-1 items-center mx-auto space-x-4">
      <div className="relative w-96 h-80">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className='grid md:pl-32 grid-cols-1 grid-rows-3'>
        <h2 className="text-xl font-bold">{name}</h2>
        <p>{`Age: ${age}`}</p>
        <p>{`Occupation: ${occupation}`}</p>
      </div>
    </div>
  );
};

export default PersonCard;