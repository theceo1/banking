'use client';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger className="flex justify-center">
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link href="/" className="cursor-pointer flex items-center gap-1 px-4">
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="TrustBank logo"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">TrustBank</h1>
          </Link>
          <div className="mobilenav-sheet_close w-full">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.route}
                    className={cn(
                      "sidebar-link",
                      pathname === item.route ||
                        pathname.startsWith(`${item.route}/`)
                        ? "bg-bank-gradient"
                        : ""
                    )}
                  >
                    <div className="relative size-6">
                      <Image
                        src={item.imgURL}
                        alt={item.label}
                        width={20}
                        height={20}
                        className={cn(
                          pathname === item.route ||
                            pathname.startsWith(`${item.route}/`)
                            ? "brightness-[3] invert-0"
                            : ""
                        )}
                      />
                    </div>
                    <p
                      className={cn("text-16 font-semibold",
                        pathname === item.route ||
                          pathname.startsWith(`${item.route}/`)
                          ? "!text-white"
                          : "text-black-2"
                      )}
                    >
                      {item.label}
                    </p>
                  </Link>
                ))}
                <div className="absolute bottom-0 left-0 w-full text-center text-black-2 text-16">
                  FOOTER
                </div>
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;

