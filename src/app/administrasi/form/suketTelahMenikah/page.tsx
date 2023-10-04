'use client';
import { prisma } from "@/../route"
import { HiArrowSmLeft } from 'react-icons/hi';
import Link from 'next/link'
import InputItem from "./inputItem";
import axios from "axios";
import ModalSurvey from "@/app/administrasi/survey/page";
import React from "react";


export default function Page() {
  const [isModalOpen, setShowModal] = React.useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  const [nama, setNama] = React.useState("");

  async function addData(dataX: FormData) {

    const name = await prisma.sukettelahmenikah.create({
      data: {
        namepria: dataX.get('namepria') as string, //raka tes
        nohppria: dataX.get('nohppria') as string, //kelihatan kah
        tempatLpria: dataX.get('tempatlahirpria') as string,
        tglLpria: dataX.get('tglpria') as string,
        alamatpria: dataX.get('alamatpria') as string,
        agamapria: dataX.get('agamapria') as string,
        workpria: dataX.get('workpria') as string,
        namewanita: dataX.get('namewanita') as string,
        nohpwanita: dataX.get('nohpwanita') as string,
        tempatLwanita: dataX.get('tempatlahirwanita') as string,
        tglLwanita: dataX.get('tglwanita') as string,
        alamatwanita: dataX.get('alamatwanita') as string,
        agamawanita: dataX.get('agamawanita') as string,
        workwanita: dataX.get('workwanita') as string,
      }
    })

    // console.log(dataX)

  }

  async function submitData(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const fd = new FormData(event.currentTarget);

    const data = {
      namepria: fd.get('namepria') as string, //raka tes
      nohppria: fd.get('nohppria') as string, //kelihatan kah
      tempatLpria: fd.get('tempatlahirpria') as string,
      tglLpria: fd.get('tglpria') as string,
      alamatpria: fd.get('alamatpria') as string,
      agamapria: fd.get('agamapria') as string,
      workpria: fd.get('workpria') as string,
      namewanita: fd.get('namewanita') as string,
      nohpwanita: fd.get('nohpwanita') as string,
      tempatLwanita: fd.get('tempatlahirwanita') as string,
      tglLwanita: fd.get('tglwanita') as string,
      alamatwanita: fd.get('alamatwanita') as string,
      agamawanita: fd.get('agamawanita') as string,
      workwanita: fd.get('workwanita') as string,
    }

    // let res
    if (res.status) {

    }
  }
  return (


    <div className="min-h-screen">
      <div className="flex flex-row items-center">
        <Link href='/administrasi' passHref>
          <HiArrowSmLeft className="h-10 w-10 m-4" />
        </Link>

        <h1 className="font-bold">Surat Keterangan Telah Menikah</h1>

      </div>
      <form className="w-full max-w-lg mx-auto p-4" onSubmit={submitData}>
        <InputItem></InputItem>
      </form>
      <ModalSurvey
        show={isModalOpen}
        onClose={closeModal}
        name={nama}
      ></ModalSurvey>
    </div>



  )
}