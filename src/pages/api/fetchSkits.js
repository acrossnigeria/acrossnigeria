import Skits from "@/models/Skits";
import db from "../../../utils/db";
const handler =async(req,res)=>{
    await db.connect();
    const skits= await Skits.find();
    await db.disconnect();
    res.send(skits);
};
export default handler;