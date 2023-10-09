// 'use client'
import { HiArrowSmLeft } from 'react-icons/hi';
import Link from 'next/link';
// import {prisma} from "@/../route"
import { revalidatePath } from 'next/cache';
import Handle from '@/app/components/uploadAction'

export default function Page() {

    async function addData(dataF: FormData) {
        'use server'
        const linkwa = `https://wa.me/+62${dataF.get("kontak") as string}`
        // const form = await prisma.post.create({
        //     data: {
        //         title: dataF.get('title') as string,
        //         price: dataF.get('price') as string,
        //         content: dataF.get('urlImg') as string,
        //         kontak: linkwa,
        //     }
        // })
        revalidatePath('/store')
        revalidatePath('/')



    }
    return (
        <div className="min-h-screen">
            <div className='flex flex-row content-center p-4'>
                <Link className='flex m-2 hover:text-gray-500' href="/store">
                    <HiArrowSmLeft className='h-6 w-6 t m-2 ext-black' />
                    <h1 className="font-bold text-center m-2">Tambah Produk Kamu</h1>
                </Link>

            </div>


            <form className='mx-auto w-full max-w-lg p-3' id='addStore' action={addData}>
                <div className='flex flex-col'>
                    <div className='flex flex-wrap mx-4 mb-6'>
                        <label className='font-semibold w-full' htmlFor="">Nama Produk</label>
                        <input className='w-full bg-gray-200 rounded-lg' type="text" name="title" />
                    </div>
                    {/* <div className='flex flex-wrap mx-4 mb-6'>
                        <label className='font-semibold w-full' htmlFor="">Harga Produk</label>
                        <input className='w-full sm:w-1/2 bg-gray-200 rounded-lg' type="number" name="price" />
                    </div> */}
                    {/* <div className='flex flex-wrap mx-4 mb-6'>
                        <label className='font-semibold w-full' htmlFor="">Kontak</label>
                        <input className='w-full sm:w-1/2 bg-gray-200 rounded-lg' type="text" name="kontak" />
                    </div> */}

                    <Handle />
                </div>
                {/* <button className='bg-black text-white ml-4 p-2 rounded-lg' type='submit'>Tambah Produk</button> */}


            </form>
        </div>
    )
}