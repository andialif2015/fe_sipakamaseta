import {prisma} from "@/../route"
import { HiArrowSmLeft } from 'react-icons/hi';
import Link from 'next/link'
import InputItem from "./inputItem";


export default function Page(){

    async function addData(dataX : FormData) {
        
        'use server'
        const name = await prisma.suketmenantu.create({
            data: {
                name: dataX.get('name') as string,
                nohp: dataX.get('nohp') as string,
                tempatL : dataX.get('tempatlahir') as string,
                tglL:  dataX.get('tgl') as string,
                alamat: dataX.get('alamat') as string,
                nameMertua: dataX.get('namemertua') as string,
                tempatLMertua : dataX.get('tempatlahirmertua') as string,
                tglLMertua:  dataX.get('tglmertua') as string,
                alamatmertua: dataX.get('alamatmertua') as string


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

        <h1 className="font-bold">Surat Keterangan Menantu </h1>

      </div>
    <form className="w-full max-w-lg mx-auto p-4" action={addData}>
      <InputItem></InputItem>
      </form> 
    </div>
  
)}