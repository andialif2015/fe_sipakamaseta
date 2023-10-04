import {prisma} from "@/../route"
import { HiArrowSmLeft } from 'react-icons/hi';
import Link from 'next/link'
// import FormItem from "@/app/components/formItem";
import InputItem from "./InputItem";


export default function Page(){

    async function addData(dataX : FormData) {
      // dataX.append('image', 'ini')
        
        'use server'
        const name = await prisma.imbS.create({
            data: {
                name: dataX.get('name') as string,

                nik: dataX.get('nik') as string,
                // email: dataX.get('email') as string,
                nohp: dataX.get('nohp') as string,
                tempatL : dataX.get('tempatlahir') as string,
                tglL:  dataX.get('tgl') as string,
                alamat: dataX.get('alamat') as string,
                agama : dataX.get('agama') as string,
                gender: dataX.get('gender') as string,
                work : dataX.get('pekerjaan') as string,
                alamatB: dataX.get('alamatB') as string,
                type : dataX.get('type') as string,
                buildsize : dataX.get('buildsize') as string,
            }
        })
        
        // console.log(dataX)

    }
    return (


    <div className="min-h-screen">
      <div className="flex flex-row items-center">
        <Link href='/administrasi' passHref>
          <HiArrowSmLeft className="h-10 w-10 m-4" />
        </Link>

        <h1 className="font-bold">Surat Izin Membangun Sementara</h1>

      </div>
    <form className="w-full max-w-lg mx-auto p-4" action={addData}>
      <InputItem></InputItem>
      </form> 
    </div>
  
)}