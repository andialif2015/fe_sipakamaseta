import {prisma} from "@/../route"
import { HiArrowSmLeft } from 'react-icons/hi';
import Link from 'next/link'
import InputItem from "./inputItem";


export default function Page(){

    async function addData(dataX : FormData) {
        
        'use server'
        const name = await prisma.sukettelahmenikah.create({
            data: {
                namepria: dataX.get('namepria') as string, //raka tes
                nohppria: dataX.get('nohppria') as string, //kelihatan kah
                tempatLpria : dataX.get('tempatlahirpria') as string,
                tglLpria:  dataX.get('tglpria') as string,
                alamatpria: dataX.get('alamatpria') as string,
                agamapria : dataX.get('agamapria') as string,
                workpria: dataX.get('workpria') as string,
                namewanita: dataX.get('namewanita') as string,
                nohpwanita: dataX.get('nohpwanita') as string,
                tempatLwanita : dataX.get('tempatlahirwanita') as string,
                tglLwanita:  dataX.get('tglwanita') as string,
                alamatwanita: dataX.get('alamatwanita') as string,
                agamawanita : dataX.get('agamawanita') as string,
                workwanita: dataX.get('workwanita') as string,
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

        <h1 className="font-bold">Surat Keterangan Telah Menikah</h1>

      </div>
    <form className="w-full max-w-lg mx-auto p-4" action={addData}>
      <InputItem></InputItem>
      </form> 
    </div>
  
)}