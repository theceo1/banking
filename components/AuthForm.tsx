'use client';

import { Divide, Loader2, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { CustomInput } from './CustomInput';
import { authFormSchema } from '@/lib/utils';
import SignIn from '@/app/(auth)/sign-in/page';
import { useRouter } from 'next/navigation';


const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(false);
    
      try {
              // Call an external API (Appwrite & plaid token) endpoint to link bank accounts
        
          if (type === 'sign-up') {
          const newUser = await signUp(data);
          if (newUser) {
            setUser(newUser);
          }
          }
        }

        if (type === 'sign-in') {
          const response = await signIn({
            email: data.email,
            password: data.password
        })

          if (response) router.push('/');
        }  
    } 
    catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  };
  
  // 3. Handle the form submission.

  return (
    <section className='auth-form'>
      <header>
        <Link href="/" className='cursor-pointer flex items-center gap-1'>
          <Image
            src='/icons/logo.svg'
            width={34}
            height={34}
            alt='TrustBank logo'
          />
          <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>
            TrustBank
          </h1>
        </Link>

        <div className='flex flex-col gap-1 md:gap-3'>
          <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
            {user
              ? 'Link Account'
              : type === 'sign-in'
                ? 'Sign In'
                : 'Sign Up'
            }
            <p className='text-16 font-normal text-gray-600'>
              {user
                ? 'Link your account to get started'
                : 'Please enter your details'}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className='flex flex-col gap-4'>
          {/* PlaidLink */}
        </div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
             {type === 'sign-up' && (
              <>
              <div className='flex gap-4'>
                <CustomInput control={form.control} name='firstName' label='First Name' placeholder='Enter your first name' />
                <CustomInput control={form.control} name='lastName' label='Last Name' placeholder='Enter your last name' />
              </div>
                <CustomInput control={form.control} name='address1' label='Address' placeholder='Enter a specific Address' />
                <CustomInput control={form.control} name='city' label='City' placeholder='Enter a specific City' />
              <div className='flex gap-4'>
                <CustomInput control={form.control} name='state' label='State' placeholder='Enter your state' />
                <CustomInput control={form.control} name='zipCode' label='Zip Code' placeholder='Example: 01010' />
              </div>
              <div className='flex gap-4'>
                <CustomInput control={form.control} name='dateOfBirth' label='Date of Birth' placeholder='yyyy-mm-dd' />
                <CustomInput control={form.control} name='ssn' label='SSN' placeholder='ex. 1234' />
              </div>
                <CustomInput control={form.control} name='phoneNumber' label='Phone Number' placeholder='Enter your phone number' />

              </>
             )} 
              <CustomInput control={form.control} name='email' label='Email' placeholder='Enter your email' />

              <CustomInput control={form.control} name='password' label='Password' placeholder='Enter your password' />

          <div className='flex flex-col gap-4'>
            <Button type='submit' disabled={isloading} className='form-btn'>
              {isloading ? (
                <>  
                  <Loader2 size={20} className='animate-spin' /> &nbsp;
                  Loading...
                </>
             ) : type === 'sign-in' 
             ? 'Sign In' : 'Sign Up'}     
            </Button>
          </div>
            </form>
          </Form>

          <footer className='flex justify-center gap-1'>
              <p className='text-14 font-normal text-grey-600'>
                {type === 'sign-in' 
                ? 'Don’t have an account?' 
                : 'Already have an account?'
                }</p>
              <Link
                href={type === 'sign-in' ? '/sign-up' : '/sign-in'}
                className='form-link'
              >
                {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
              </Link>
          </footer>
        </>
      )}
    </section>
  )
}

export default AuthForm
