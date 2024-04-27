import Naijavibes from "@/models/Naijavibes";
import db from "../../../../utils/db";
const handler = async(req,res)=>{
    try{ 
        if (req.method==='GET'){
    const { fileType, subcategory } = req.query;
    console.log(fileType,subcategory)
    await db.connect();
    const photoVibes= await Naijavibes.find(
        {fileType:fileType,
      category: subcategory
    });
    await db.disconnect();

    // Send the found documents as a response
    res.status(200).json(photoVibes);}
    else if(req.method==='POST'){
        const {
    name,
    email,
    url,
    fileType,
    category, // Make sure to match the case with the schema (category).
    referencePay,
    title,
    description,
    payment
  } = req.body;
        const newNaijaVibes=new Naijavibes({ name,
    email,
    url,
    fileType,
    category,
    referencePay,
    title,
    description,
    payment});
        const vibes=await newNaijaVibes.save();
        await db.disconnect();
       res.status(201).send({
       message: "Congratulations, your NaijaVibes Photo has been uploaded!",id:vibes._id
        });
    }
}
catch(error){
     console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
}}
export default handler;