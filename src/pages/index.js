import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Testimonials from "@/components/Testimonials";
import Cards from "@/components/Cards"
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import image1 from "../../public/images/giveaway_quiz.jpg";
import image2 from "../../public/images/skits_across.jpg";
import image3 from "../../public/images/king_queen.jpg";
import image4 from "../../public/images/mystery_box.jpg";
import image5 from "../../public/images/state_treasure.jpg";
import image6 from "../../public/images/mega_cashout.jpg";
import image7 from "../../public/images/across_naija_tv.jpg";
import image8 from "../../public/images/naija_vibes.jpg";
import PersonCard from "@/components/ModelCard";
import flameimg from "../../public/images/flame1.svg"
import Image from "next/image";



export const games=[
{title:"GIVE AWAY QUIZZES",
image:image1,link:"/giveaway"},
{title:"SKITS ACROSS NIGERIA",image:image2,link:"/skit"},
{title:"KING AND QUEEN",image:image3,link:"/king_queen"},
{title:"MYSTERY BOXES",image:image4,link:"/mystery"},
{title:"STATE TREASURE HUNT SHOW",image:image5,link:"treasures"},
{title:"MEGA CASH OUT",image:image6,link:"cashout"},
{title:"ACROSS NIGERIA REALITY SHOW",image:image7,link:"acn_show"},
{title:"NAIJA VIBES", image:image8,link:"vibes"}]
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title={"Home Page"}>
<Hero/>
<PersonCard name="Amina Yusuf" age={23} occupation="Dancer" imageUrl="/images/model/model2.jpg"/>
<Info/>
  <div className=""> <p className="grid  mx-auto text-center text-2xl font-sans"><span className="flex text-center mx-auto p-8"><Image src={flameimg} height={30} width={30} alt="hot"/> Our Hottest Products</span></p><div className="grid left-0 grid-cols-2 gap-4  md:grid-cols-2 lg:grid-cols-4 md:gap-4 mx-auto 
   items-center md:max-w-screen-xl px-4 sm:px-3 lg:px-2"> { games.map((card)=>(<Cards key={card.title} title={card.title} 
   link={card.link} image={card.image}/>))}</div></div>
 
   </Layout>
  );
}
