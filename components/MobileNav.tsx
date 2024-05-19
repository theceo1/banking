 'use client'
 import {
   Sheet,
   SheetClose,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
 } from "@/components/ui/sheet"
 import { sidebarLinks } from "@/constants"
 import { cn } from "@/lib/utils"
 import Image from "next/image"
 import { usePathname } from "next/navigation"
 import Link from "next/link"
 
 const MobileNav = ({ user }: MobileNavProps) => {
   const pathname = usePathname();
   return (
     <section className="w-full max-w-[264px]">
       <Sheet>
         <SheetTrigger>
           <Image
             src="/icons/hamburger.svg"
             alt="menu"
             width={30}
             height={30}
             className="cursor-pointer"
           />
         </SheetTrigger>
         <SheetContent side="right" className="border-none bg-white">
           <Link href="/" className="cursor-pointer flex items-center gap-1 px-4">
             <Image
               src="/icons/logo.svg"
               alt="TrustBank logo"
               width={34}
               height={34}
             />
             <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
               TrustBank
             </h1>
           </Link>
           <div className="mobilenav-sheet">
             <SheetClose asChild>
               <nav className="flex h-full flex-col gap-6 pt16 text-white">
                 {sidebarLinks?.map((item) => {
                   const isActive =
                     pathname === item.route || pathname.startsWith(`${item.route}/`);

                   return (
                     <SheetClose asChild key={item.route}>
                       <Link
                         href={item.route}
                         key={item.label}
                         className={cn(
                           "mobilenav-sheet_close w-full",
                           isActive && "bg-bank-gradient"
                         )}
                         aria-current={isActive ? "page" : undefined}
                       >
                         <Image
                           src={item.imgURL}
                           alt={item.label}
                           width={20}
                           height={20}
                           className={cn({
                             "brightness-[3] invert-0": isActive,
                           })}
                         />
                         <p className={cn(
                           "sidebar-label",
                           isActive && "text-white"
                         )}>
                           {item.label}
                         </p>
                       </Link>
                     </SheetClose>
                   );
                 })}
               </nav>
             </SheetClose>
           </div>
           <SheetHeader>
             <SheetTitle>Are you absolutely sure?</SheetTitle>
             <SheetDescription>
               This action cannot be undone. This will permanently delete your
               account and remove your data from our servers.
             </SheetDescription>
           </SheetHeader>
         </SheetContent>
       </Sheet>
     </section>
   );
 };

 export default MobileNav;

