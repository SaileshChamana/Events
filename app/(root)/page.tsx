
import { Button } from '@/components/ui/button'

import Image from 'next/image'
import Link from 'next/link'

export default function Home(){

  return (
    <>
      <section className="bg-primary-50 bg-cover py-5 md:py-10 bg-lights3 bg-no-repeat h-[90vh] flex flex-col justify-center bg-bottom">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8 text-white">
            <h1 className="h1-bold">Host, Connect, Celebrate: Your Events, Our Platform!</h1>
            <p className="p-regular-20 md:p-regular-24">Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.</p>
            <Button size="lg" asChild className="button w-full sm:w-fit ">
              <Link href="#events">
                Explore Now
              </Link>
            </Button>
          </div>
          <div className='flex justify-center items-center'>
          <Image 
            src="/assets/images/people3.png"
            alt="hero"
            width={600}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh] border-b-[8px]"
          /></div>
        </div>
      </section> 

      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Trust by <br /> Thousands of Events</h2>
        <div>
          Search
          Category
        </div>
      </section>
    </>
    )
  }