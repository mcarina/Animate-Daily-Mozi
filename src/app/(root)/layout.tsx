import Navbar from '@/components/navbar';
import React from 'react';

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) 
{
  return (
    <main className="">
        <div className="">
            {children}
        </div>
    </main>

  );
}