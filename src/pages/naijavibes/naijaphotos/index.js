import Layout from '@/components/Layout';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Sample content for demonstration
const contentMap = [
  { slug: "naijaFaces", title: "NAIJA FACES" },
  { slug: "sexxypix", title: "SEXXY PIX" },
  { slug: "naijaScenes", title: "NAIJA SCENES" },
  { slug: "naijaNature", title: "NAIJA NATURE" },
];

export default function Home() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [content, setContent] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setContent(contentMap.find(item => item.slug === option));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/naijavibes/exchange", { params: { 'fileType': "photos", 'subcategory': selectedOption } });
        setData(response.data);
        console.log(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (selectedOption) {
      fetchData();
    }
  }, [selectedOption]);

  return (
    <Layout>
      <div className='px-6 py-4 mt-4 cursor-pointer font-semibold mb-6 bg-green-700 w-fit ml-10 rounded-xl'>
        <Link href="/naijavibes/upload" >Get involved</Link>
      </div>
      <div className="flex h-screen">
        {/* Left side menu */}
        <div className="bg-gray-200 w-1/4 p-4">
          <h1 className="text-xl font-bold mb-4">Picture options</h1>
          <ul>
            {contentMap.map((item, index) => (
              <li key={index} className="cursor-pointer mb-2 underline bg-green-700 max-w-40 font-bold text-white p-4 rounded-xl" onClick={() => handleOptionClick(item.slug)}>
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Main content */}
        <div className="flex-1 p-4">
          <h1 className="text-xl font-bold mb-4">{content ? content.title : "Select an option"}</h1>
          <div className="bg-gray-100 p-4 font-semibold">
            {loading ? <p>Waiting for Your Selection...</p> : content ? content.description : null}
            {error && <p>Error: {error.message}</p>}
          </div>
        </div>
      </div>
    </Layout>
  );
}
