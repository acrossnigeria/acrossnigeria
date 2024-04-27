import Layout from '@/components/Layout';
import SkitDisp from '@/components/SkitDisp';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Sample content for demonstration
const contentMap = [
 {
  slug:"tweTwe",
  title:"Twe Twe"},
{slug:"musik",title:"Musik"},
{slug:"dance", title: "Dance"},
{slug:"skitsPranks",title:"Skits & Pranks"}
];

export default function Home() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [content, setContent] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortedSkits, setSortedSkits] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const skitsPerPage = 5;

  useEffect(() => {
    // Sort the skits based on the votes property
    if (data){const sorted = data.slice().sort((a, b) => b.votes - a.votes);
    setSortedSkits(sorted);}
  }, [data]);
  
  // Get current skits
  const indexOfLastSkit = currentPage * skitsPerPage;
  const indexOfFirstSkit = indexOfLastSkit - skitsPerPage;
  const currentSkits = sortedSkits.slice(indexOfFirstSkit, indexOfLastSkit);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setContent(contentMap.find(item => item.slug === option));
  };

  useEffect(() => {
    setData(null)
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/naijavibes/exchange", { params: { 'fileType': "videos", 'subcategory': selectedOption } });
        console.log("selected option is:", selectedOption)
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
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <Layout>
      <div className='px-6 py-4 mt-4 font-semibold mb-6 bg-green-700 w-fit ml-10 rounded-xl'>
        <Link href="/naijavibes/upload" >Get involved</Link>
      </div>
      <div className="flex h-screen">
        {/* Left side menu */}
        <div className="bg-gray-200 w-1/4 p-4">
          <h1 className="text-xl font-bold mb-4">Options</h1>
          <ul>
            {contentMap.map((item, index) => (
             <div key={index}>
              <li  className="cursor-pointer mb-2" onClick={() => handleOptionClick(item.slug)}>
                {item.title}
              </li></div> 
            ))}
          </ul>
        </div>

        {/* Main content */}
        <div className="flex-1 p-4">
          <h1 className="text-xl font-bold mb-4">{content ? content.title : "Select an option"}</h1>
          <div className="bg-gray-100 p-4">
          {currentSkits&&currentSkits.map((item,index)=>(
            <div key={index}>   <SkitDisp content={item} link={`/naijavibes/naijavideos/${item._id}`}/>
          <p >{item.title}</p>
          </div> 
          )) }
            {error && <p>Error: {error.message}</p>}
          </div>
        </div>
        <div className="flex justify-center my-4">
        {Array.from({ length: Math.ceil(sortedSkits.length / skitsPerPage) }, (_, i) => (
          <button key={i} onClick={() => paginate(i + 1)} className={`mx-1 py-1 px-3 ${currentPage === i + 1 ? 'bg-gray-500 text-white' : 'bg-gray-200'}`}>{i + 1}</button>
        ))}
      </div>
      </div>
    </Layout>
  );
}
