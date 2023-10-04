'use client';
import { prisma } from "@/../route"
import { HiArrowSmLeft } from 'react-icons/hi';
import Link from 'next/link'
// import FormItem from "@/app/components/formItem";
import InputItem from "./InputItem";
import ModalSurvey from "@/app/administrasi/survey/page";
import axios from "axios";
import React from "react";


export default function Page() {

  const [isModalOpen, setShowModal] = React.useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  const [nama, setNama] = React.useState("");

  async function addData(dataX: FormData) {

    const name = await prisma.imbS.create({
      data: {
        name: dataX.get('name') as string,
        nik: dataX.get('nik') as string,
        nohp: dataX.get('nohp') as string,
        tempatL: dataX.get('tempatlahir') as string,
        tglL: dataX.get('tgl') as string,
        alamat: dataX.get('alamat') as string,
        agama: dataX.get('agama') as string,
        gender: dataX.get('gender') as string,
        work: dataX.get('pekerjaan') as string,
        alamatB: dataX.get('alamatB') as string,
        type: dataX.get('type') as string,
        buildsize: dataX.get('buildsize') as string,
      }
    })

    // console.log(dataX)

  }

  async function submitData(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name') as string,
      nik: formData.get('nik') as string,
      nohp: formData.get('nohp') as string,
      tempatL: formData.get('tempatlahir') as string,
      tglL: formData.get('tgl') as string,
      alamat: formData.get('alamat') as string,
      agama: formData.get('agama') as string,
      gender: formData.get('gender') as string,
      work: formData.get('pekerjaan') as string,
      alamatB: formData.get('alamatB') as string,
      type: formData.get('type') as string,
      buildsize: formData.get('buildsize') as string,
    };

    let wali = await axios.post("http://localhost:3002/api/v1/suketwali/buat", data);
    if (wali.status) {
      setNama(data.name);
      setShowModal(true);
    }
  }
  return (


    <div className="min-h-screen">
      <div className="flex flex-row items-center">
        <Link href='/administrasi' passHref>
          <HiArrowSmLeft className="h-10 w-10 m-4" />
        </Link>

        <h1 className="font-bold">Surat Izin Membangun Sementara</h1>

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