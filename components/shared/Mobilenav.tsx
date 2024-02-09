import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import Navitems from "./Navitems"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
const Mobilenav = () => {
  return (
    <nav className='md:hidden'>
    <Sheet>
        <SheetTrigger className="align-middle">
            <Image src="/assets/icons/menu.svg" alt="menu"
            className="cursor-pointer" width={24} height={24}></Image>
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
            <Image src="/assets/images/logo.svg" alt="logo" width={128} height={38}></Image>
            <Separator className="border border-gray-50" />
            <Navitems />
        </SheetContent>
    </Sheet>

    </nav>
  )
}

export default Mobilenav