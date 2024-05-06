import Naijavibes from "@/models/Naijavibes";
import db from "../../../../utils/db";
import VibesVotes from "@/models/Vibevotes";

const handler =async(req,res)=>{
    const data=req.body;
    console.log(data)
    const {id, amount, fileType, category}=data;
    await db.connect();
    const vibes= await Naijavibes.findById(id);
    const voting=vibes.votes;
    const votes=voting+amount;
    vibes.votes=votes;
    await vibes.save();
    console.log("number of votes is:", vibes.votes)
    VibesVotes.insertMany({vibeId:id, votes:amount, fileType:fileType, category:category})
    await db.disconnect();
};
export default handler;
