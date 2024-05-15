'use client';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  user: User;
}
const Sidebar: React.FC<SidebarProps> = ({ user }) => {
  const pathname = usePathname();

  return (
    <section className='sidebar'>
      <nav className='flex flex-col gap-4'>
        <Link href='/' className='mb-12 flex items-center gap-2 cursor-pointer'>
          <Image
            src='/icons/logo.svg'
            alt='TrustBank logo'
            width={34}
            height={34}
            className='size-24px max-xl:size-14'
          />
          <h1 className='sidebar-logo'>TrustBank</h1>
        </Link>

        {sidebarLinks?.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
              aria-current={isActive ? 'page' : undefined}
            >
              <div className='relative size-6'>
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({'brightness-[3] invert-0': isActive})}
                />
              </div>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidebar;