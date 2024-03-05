import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Testimonials from "@/components/Testimonials";
import Cards from "@/components/Cards"
import Hero from "@/components/Hero";
import Info from "@/components/Info";



export const games=[
{title:"GIVE AWAY QUIZZES",
description:"Lorem Ipsum Descriptions",link:"/giveaway"},
{title:"SKITS ACROSS NIGERIA",description:"Lorem Ipsum Descriptions",link:""},
{title:"MYSTERY BOXES",description:"Lorem Ipsum Descriptions",link:""},
{title:"STATE TREASURE HUNT SHOW",description:"Lorem Ipsum Descriptions",link:""},
{title:"MEGA CASH OUT",description:"Lorem Ipsum Descriptions",link:""},
{title:"ACROSS NIGERIA REALITY SHOW",description:"Lorem Ipsum Descriptions",link:""},
{title:"NAIJA VIBES", description:"Lorem Ipsum Descriptions",link:""}]
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title={"Home Page"}>
<Hero/>
<Info/>
   <div className="grid left-0 grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 mx-auto  items-center max-w-screen-xl px-4 sm:px-6 lg:px-2"> { games.map((card)=>(<Cards key={card.title} title={card.title} link={card.link} description={card.description}/>))}</div>
   <Testimonials/>
   </Layout>
  );
}
