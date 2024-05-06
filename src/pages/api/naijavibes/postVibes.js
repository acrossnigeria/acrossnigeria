import Naijavibes from "@/models/Naijavibes";
import db from "../../../../utils/db";
const handler = async(req,res)=>{
   if(req.method==='POST'){
        const data = req.body;
        try{await db.connect()
        Naijavibes.insertMany(data);
        await db.disconnect();
    res.send({ message: ` Congratulations, your NaijaVibes ${data.fileType} has been uploaded!` });}
    catch (error) {
            console.error("Error Uploading data:", error);
            return res.status(500).json({ error: "Error updating Booking" }); // Send error response
        }
   
    }
}

export default handler;