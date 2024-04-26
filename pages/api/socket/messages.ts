import { NextApiRequest } from "next";

import { NextApiResponseServerIO } from "@/types";
import { currentProfilePages } from "@/lib/current-profile-pages";
import Event from "@/lib/database/models/event.model";
import { createMessage } from "@/lib/actions/message.actions";

export default async function handler(req:NextApiRequest, res: NextApiResponseServerIO) {
    if(req.method !== "POST"){
        return res.status(405).json({ error: "Method not allowed"});
    }

    try {
        const profile = await currentProfilePages(req)
        const { content, fileUrl } = req.body
        const { roomId } = req.query

        if(!profile){
            return res.status(401).json({error: "Unauthorized"})
        }

        if(!roomId){
            return res.status(404).json({error: "Room Id missing"})
        }

        if(!content){
            return res.status(404).json({error: "Content missing"})
        }

        const event = await Event.findById(roomId)
        console.log(event)

        if(!event){
            return res.status(404).json({error: "Event not found"})
        }

        const member = event.chatUsers.includes(profile._id)

        if(!member){
            return res.status(404).json({error: "Member not found"})
        }

        const message = {
            content: content,
            fileUrl: fileUrl,
            sender: profile._id,
            room: roomId as string
        }

        console.log(message)

        const newMessage = await createMessage(message)

        const roomKey = `chat:${roomId}:messages`;

        res?.socket?.server?.io?.emit(roomKey, message)

        return res.status(200).json(newMessage)

    } catch (error) {
        console.log("[MESSAGES_POST]",error);
        return res.status(500).json({message: "Internal error"})
    }
}