import React from 'react'
import { redirect } from 'next/navigation';
import { auth, redirectToSignIn } from '@clerk/nextjs'
import { currentProfile } from '@/lib/current-profile';
import Event from '@/lib/database/models/event.model';
import ChatHeader from '@/components/chat/chat-header';
import ChatInput from '@/components/chat/chat-input';
import ChatMessages from '@/components/chat/chat-messages';
import ChatMessage from '@/components/chat/chat-message';

interface ChatRoomProps {
    params: {
        id: string;
    }
}

const Chat = async ({ params }: ChatRoomProps) => {
    const profile = await currentProfile();

    if(!profile){
        redirectToSignIn();
    }

    const event = await Event.findById(params.id)
    
    const members = event.chatUsers;
    console.log(members)

    if(!event || !members.includes(profile._id)){
        redirect("/")
    }

    return (
        <div className='flex flex-col h-full bg-white'>
            {/* <ChatHeader 
                member={userId}
                apiUrl="/api/messages"
                socketUrl="/api/socket/messages"
            />
            
            <ChatInput /> */}
            <ChatHeader eventId={event._id} name={event.title}/>
            {/* <ChatMessages 
                member={profile._id}
                name={event.title}
                chatId={event._id}
                apiUrl='/api/messages'
                socketUrl='/api/socket/messages'
                socketQuery={{
                    roomId: event._id
                }}
                paramKey='RoomId'
                paramValue={event._id}
            /> */}
            <ChatMessage />
            <ChatInput name={event.title} apiUrl="/api/socket/messages" query={{roomId: event._id.toString()}}/>
        </div>
    )
}

export default Chat