import {prisma} from "@/../route"
import { HiArrowSmLeft } from 'react-icons/hi';
import Link from 'next/link'
import FormItem from "@/app/components/formItem";


export default function Page(){

    async function addData(dataX : FormData) {
      // dataX.append('image', 'ini')
        
        'use server'
        // console.log(dataX.get('tglLahir') as string)
        // const stringNo = dataX.get('nowa' as string)
        // const num = parseInt(`$(dataX.get('nowa')`)
        // const num = `0${dataX.get('nowa')as string}`
        const name = await prisma.user.create({
            data: {
                name: dataX.get('name') as string,
                // email: dataX.get('email') as string,
                nowa: dataX.get('nowa') as string,
                alamat: dataX.get('alamat') as string,
                ttl:  dataX.get('tgl') as string
            }
        })
        
        // console.log(dataX)

    }
    return (


    <div className="min-h-screen">
      <div>
        <Link href='/administrasi' passHref>
          <HiArrowSmLeft className="h-10 w-10 m-4" />
        </Link>

      </div>
    <form className="w-full max-w-lg mx-auto p-4" action={addData}>
      <FormItem></FormItem>
      </form>
    </div>
  
)}