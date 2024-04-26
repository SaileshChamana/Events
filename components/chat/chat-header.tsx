import React from 'react'

interface ChatHeaderProps {
    eventId: string
    name: string

}

const ChatHeader = ({
    eventId,
    name
}: ChatHeaderProps) => {
  return (
    <div className='text-lg font-semibold px-7 pt-4 flex items-center h-12 border-neutral-200'><p className='text-violet-700'>{name}</p></div>
  )
}

export default ChatHeader