'use server'

import { revalidatePath } from 'next/cache'

import { connectToDatabase } from '@/lib/database'
import User from '@/lib/database/models/user.model'
import Event from '@/lib/database/models/event.model'
import { handleError } from '@/lib/utils'
import { CreateMessageParams } from '@/types'
import Message from '@/lib/database/models/message.model'

export async function createMessage(message: CreateMessageParams) {
    try {
        await connectToDatabase()

        const newMessage = await Message.create(message)
        return JSON.parse(JSON.stringify(newMessage))
    } catch (error) {
        console.log(error)
    }
}