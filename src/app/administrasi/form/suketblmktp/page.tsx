import {prisma} from "@/../route"
import { HiArrowSmLeft } from 'react-icons/hi';
import Link from 'next/link'
import InputItem from "./inputItem";


export default function Page(){

    async function addData(dataX : FormData) {
        
        'use server'
        const name = await prisma.suketblmktp.create({
            data: {
                name: dataX.get('name') as string,
                nik: dataX.get('nik') as string,
                tempatL : dataX.get('tempatlahir') as string,
                tglL:  dataX.get('tgl') as string,
                alamat: dataX.get('alamat') as string,
                dusun: dataX.get('dusun') as string,
                thnktp : dataX.get('tpktp') as string,
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

        <h1 className="font-bold">Surat Keterangan Belum Terbit E-KTP </h1>

      </div>
    <form className="w-full max-w-lg mx-auto p-4" action={addData}>
      <InputItem></InputItem>
      </form> 
    </div>
  
)}