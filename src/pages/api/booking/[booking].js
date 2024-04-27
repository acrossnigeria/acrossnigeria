import Booking from "@/models/Booking";
import db from "../../../../utils/db";

const handler = async (req, res) => {
    if(req.method==='POST' && req.query.booking==='fetch'){
     try {
            await db.connect();
            const selectedDate = await Booking.find().lean();
            const convertedDate = selectedDate.map(db.convertDocToObj);
            return res.status(200).json(convertedDate); // Send the response back to the client
        } catch (error) {
            return res.status(500).json({ error: "Error fetching data" }); // Send error response
        }
    } 
    else if(req.method==='POST' && req.query.booking==='save'){
        const data= req.body;
                try {
            await db.connect();
            await Booking.insertMany(data);
                 await db.disconnect();
              res.send({ message: 'Date updated successfully' }); // Send the response back to the client
        } catch (error) {
            console.error("Error fetching data:", error);
            return res.status(500).json({ error: "Error updating Booking" }); // Send error response
        }
    }
    else {
        return res.status(400).json({ error: "Invalid request" }); // Send error response for invalid request method or query
    }
}
export default handler;