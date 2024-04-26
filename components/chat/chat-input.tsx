"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import * as z from "zod"
import axios from "axios"
import qs from 'query-string';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
} from "@/components/ui/form"

import { Input } from '@/components/ui/input';
import { Plus, Smile } from 'lucide-react';

interface ChatInputProps {
    apiUrl: string;
    query: Record<string, any>
    name: string
}

const formSchema = z.object({
    content: z.string().min(1),
})

const ChatInput = ({
    apiUrl,
    query,
    name
}: ChatInputProps) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            content: ""
        }
    })

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const url = qs.stringifyUrl({
                url: apiUrl,
                query,
            })

            await axios.post(url, values)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <Form {...form }>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField 
                control={form.control}
                name='content'
                render={({field}) => (
                    <FormItem>
                        <div className='relative p-4 pb-6'>
                            <button type='button' onClick={()=>{}} className='absolute top-7 left-8 h-[24px] w-[24px] bg-violet-400 hover:bg-violet-600 transition rounded-full flex items-center justify-center'>
                                <Plus className='text-white' />
                            </button>
                            <Input disabled={isLoading} className='px-14 py-6 bg-slate-200/90 border-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-zinc-600' placeholder={'Message'} {...field}/>
                            <div className='absolute top-7 right-8'>
                                <Smile />
                            </div>
                        </div>
                    </FormItem>
                )}
            />
        </form>

    </Form>
  )
}

export default ChatInput