// 'use client';

import { Button, Card, Navbar } from 'flowbite-react';
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiArrowSmLeft } from 'react-icons/hi';
import Link from 'next/link'
// import User from '../components/userDetails';
import {prisma} from "@/../route"
import ListSurat from '../components/listSurat';

export default function Page(){
    return (
        <div className='min-h-screen'>
           <nav className='max-w-full h-15 flex flex-row bg-white items-center'>
           
            <Link className="flex items-center" href='/' passHref replace>
                <HiArrowSmLeft className='text-black h-10 w-10 m-4' ></HiArrowSmLeft>
                <div className='mx-auto  w-screen justify-center'>
                    <p className='text-black font-bold'>Persuratan</p>
                </div>
            </Link>
            {/* <div>
                <h2>Cari jenis surat</h2>
                <div className='w-300px'>
                    <form action=""></form>
                </div>
            </div> */}
           </nav>
           <div className="mx-auto">
                <ListSurat/>
           </div>
           {/* <div className='bg-gray-200 rounded-3xl  sm:rounded-none p-3 overflow-y-auto'>
            {surat.map((item)=>
            <Link href='/administrasi/form' passHref>
                <div className='items-center justify-center flex flex-row shadow-xl transition ease-in-out bg-white max-w-sm p-4 mx-3 m-2 pt-3 rounded-md hover:scale-90'>
                    <h1 className='text-black flex-1'>
                       {item.name} 
                    </h1>
                    
                        <HiArrowSmRight className='h-6 w-6 text-black hover:text-gray-300' />
                    
                </div>
                <div className='bg-white mx-3 flex flex-col rounded-md'>
                    <p className='mx-3 p-2'>Dokumen yang dibutuhkan</p>
                </div>
            </Link>
            )}
            </div>    */}
            {/* <User /> */}
        </div>
        
    )
}