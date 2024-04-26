import React from 'react'
import User from '@/lib/database/models/user.model'
import { useChatQuery } from '@/hooks/use-chat-query';
import { Loader2 } from 'lucide-react';

interface ChatMessageProps {
    name: string;
    member: string;
    chatId: string;
    apiUrl: string;
    socketUrl: string;
    socketQuery: Record<string, string>;
    paramKey: "RoomId";
    paramValue: string;
}

const ChatMessages = ({
    name,
    member,
    chatId,
    apiUrl,
    socketUrl,
    socketQuery,
    paramKey,
    paramValue
}: ChatMessageProps) => {

  const queryKey = `chat:${chatId}`

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useChatQuery({
    queryKey,
    apiUrl,
    paramKey,
    paramValue
  })

  if(isFetchingNextPage){
    return (
      <div className='flex flex-col flex-1 justify-center items-center'>
        <Loader2 className='h-7 w-7 animate-spin my-4 text-zinc-500'/>
        <p className='text-xs text-zinc-500'>
          Loading Messages...
        </p>
      </div>
    )
  }
  return (
    <div className='flex-1 flex flex-col py-4 overflow-y-auto'>
        hello
        
    </div>
  )
}

export default ChatMessages