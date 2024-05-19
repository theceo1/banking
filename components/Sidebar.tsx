'use client';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = ({ user }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 flex items-center gap-2 cursor-pointer">
          <Image
            src="/icons/logo.svg"
            alt="TrustBank logo"
            width={34}
            height={34}
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">TrustBank</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link href={item.route} key={item.label}
              className={cn(
                'sidebar-link',
                isActive ? 'bg-bank-gradient' : '',
              )}
            >
               <div className='relative size-6'>
                <Image
                  src={item.imgURL}
                   alt={item.label}
                   fill
                   className={cn(
                    isActive ? 'brightness-[3] invert-0' : '',
                  )}
                 />
                </div>
                <p className={cn(
                  isActive ? '!text-white' : 'text-black-2',
                )}>
                  {item.label}
                </p>
            </Link>
          )
        })}

        USER
      </nav>

      FOOTER
    </section>
  )
}

export default Sidebar
