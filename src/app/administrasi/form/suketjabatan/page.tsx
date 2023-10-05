'use client';
import { prisma } from "@/../route";
import { HiArrowSmLeft } from 'react-icons/hi';
import Link from 'next/link';
import InputItem from "./inputItem";
import { google } from 'googleapis';
import Docxtemplater from 'docxtemplater';
import fs from 'fs';
import ModalSurvey from "@/app/administrasi/survey/page";
import axios from "axios";
import React from "react";



export default async function Page() {

  const [isModalOpen, setShowModal] = React.useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  const [nama, setNama] = React.useState("");

  async function submitData(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name') as string,
      nohp: formData.get('nohp') as string,
      tempatL: formData.get('tempatlahir') as string,
      tglL: formData.get('tgl') as string,
      gender: formData.get('gender') as string,
      alamat: formData.get('alamat') as string,
      lamajabatan: formData.get('duration') as string,
      jabatan: formData.get('jabatan') as string,
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
        <h1 className="font-bold">Surat Keterangan Jabatan</h1>
      </div>
      <form className="w-full max-w-lg mx-auto p-4" onSubmit={submitData}>
        <InputItem />
        <button type="submit">Generate Certificate</button>
      </form>
      <ModalSurvey
        show={isModalOpen}
        onClose={closeModal}
        name={nama}
      ></ModalSurvey>
    </div>
  );
}
