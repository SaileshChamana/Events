import React from 'react'
import { Button } from '../ui/button'
import { IEvent } from '@/lib/database/models/event.model'
import { addUser } from '@/lib/actions/event.actions'
import { addEventToUser } from '@/lib/actions/user.actions'
import { useRouter,usePathname } from 'next/navigation'



const Checkout = ({ event, userId }: { event: IEvent, userId: string }) => {
  const router = useRouter();
  const pathName = usePathname();
  const onCheckout = async () => {
    const eve = await addUser({userId: userId, eventId: event._id})
    await addEventToUser({userId: userId, eventId: event._id})
    router.push(pathName + '/chatRoom');
  }
  return (
      <Button onClick={onCheckout} role="link" size="lg" className="button sm:w-fit">
        Join
      </Button>
  )
}

export default Checkout