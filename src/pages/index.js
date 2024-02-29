import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import AvatarDrop from "@/components/AvatarDrop";
import Hero1 from "@/components/Hero1";
import Cards from "@/components/Cards"

export const games=[
{title:"GIVE AWAY QUIZZES",
description:"Lorem Ipsum Descriptions"},
{title:"SKITS ACROSS NIGERIA",description:"Lorem Ipsum Descriptions"},
{title:"MYSTERY BOXES",description:"Lorem Ipsum Descriptions"},
{title:"STATE TREASURE HUNT SHOW",description:"Lorem Ipsum Descriptions"},
{title:"MEGA CASH OUT",description:"Lorem Ipsum Descriptions"},
{title:"ACROSS NIGERIA REALITY SHOW",description:"Lorem Ipsum Descriptions"},
{title:"NAIJA VIBES", description:"Lorem Ipsum Descriptions"}]
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title={"Home Page"}>
       <Hero1/> <Testimonials/>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 mx-auto  items-center max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"> { games.map((card)=>(<Cards key={card.title} title={card.title} description={card.description}/>))}</div>
   </Layout>
  );
}
