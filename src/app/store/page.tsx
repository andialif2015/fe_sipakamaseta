'use server'
import {FaHome, FaPlus, FaWhatsapp} from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import {prisma}  from '../../../route'
import { revalidatePath } from 'next/cache'
  



export default async function Page() {

        const post = await prisma.post.findMany({
            where: { published: true},
        })
        revalidatePath('/store')

    

    return (
        <div className="min-h-screen">
            {/* navbar & search box */}
            <div className="flex flex-row mx-6 py-6 items-center gap-6 justify-between">
                <input className=" border-red-500 rounded-md w-2/3 sm:w-1/3 sm:mx-auto hidden" type="text" placeholder='Cari Barang' />
                <p className='text-2xl basis-3/4 font-semibold'>Ga'de</p>
                <Link href="/store/addItem" passHref>
                    <FaPlus className='w-6 h-6'></FaPlus>
                </Link>
                <Link  href="/" passHref>
                    <FaHome className='w-6 h-6'></FaHome>
                </Link>
            </div>
            {/* Item List */}
            <div className='flex flex-row flex-wrap justify-center gap-4 max-w-full py-4 bg-slate-300 rounded-t-3xl'>
            {post.map((item)=>
                <div className='basis-2/5 sm:basis-1/6 shadow-2xl rounded-xl bg-slate-100'>
                    <div className='flex flex-col h-full relative'>
                        <img className='rounded-xl object-cover w-full h-32 sm:max-h-44' src={item.content} alt="https://flowbite.com/docs/images/carousel/carousel-1.svg" />
                        <p className='text-black flex-1 p-2 font-semibold'>{item.title}</p>
                        <p className='text-black p-2 '>Rp.{item.price}</p>
                        <div className='rounded-b-lg text-right'>
                            <Link className="items-center justify-end" href={item.kontak} target='_blank' passHref>
                                <button className='bg-green-500 p-2 rounded-tl-xl rounded-br-xl'>
                                    <FaWhatsapp className='w-8 h-8 mx-auto my-auto text-white'/>
                                </button>
                                {/* <p className='text-2xl text-black'>Beli</p> */}
                            </Link>
                        </div>
                    </div>
                </div>
            )}
            </div>                

        </div>
    )
}
