import React from 'react'

const ChatMessage = () => {
  return (
    <div className='pl-7 h-[54vh] w-[95vw]'>
        <div className='py-6 flex flex-col gap-2'>
            <div><span className='text-cyan-400'>Anurag</span>: Hello! Welcome to the chat!</div>
            
            <div className='justify-end flex'><span className='text-cyan-400'>You</span>: Hey... nice to meet ya!</div>
            <div><span className='text-cyan-400'>Anurag</span>: How are you doing?</div>
            <div className='justify-end flex'><span className='text-cyan-400'>You</span>: I am doing great! What about you?</div>
            <div><span className='text-cyan-400'>Anurag</span>: I'm perfect!</div>
            <div><span className='text-cyan-400'>Sailesh</span>: Heyy! are you gonna join the event with us?</div>
            <div className='justify-end flex'><span className='text-cyan-400'>You</span>: Yep! it sounds really interesting</div>
            <div><span className='text-cyan-400'>Anurag</span>: That's great!</div>
            <div><span className='text-cyan-400'>Sailesh</span>: Let's get along and make the event a big hit!</div>
            <div><span className='text-cyan-400'>Sailesh</span>: Also maybe you could invite some people you know</div>
            <div className='justify-end flex'><span className='text-cyan-400'>You</span>: I already did XD</div>
            <div><span className='text-cyan-400'>Anurag</span>: Cool!</div>
        </div>
    </div>
  )
}

export default ChatMessage