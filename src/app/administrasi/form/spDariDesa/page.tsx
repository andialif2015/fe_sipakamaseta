"use client";
import { prisma } from "@/../route";
import { HiArrowSmLeft } from "react-icons/hi";
import Link from "next/link";
import FormItem from "@/app/components/formItem";
import { revalidatePath } from "next/cache";
import { generateWordDocument } from "@/utils/helper";
import path from "path";
import fs from "fs";
import React from "react";
import ModalSurvey from "@/app/administrasi/survey/ModalSurvey";
import axios from "axios";
import { postAPI } from "@/utils/api";

export default function Page() {
  const [isModalOpen, setShowModal] = React.useState(false);
  const [nama, setNama] = React.useState("");

  const pathTemplate = path.join(
    __dirname,
    "../../../../../../public/templates/temp_spDariDesa.docx"
  );

  async function submitSp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    let data = {
      name: formData.get("name") as string,
      nik: formData.get("nik") as string,
      nohp: formData.get("nohp") as string,
      alamat: formData.get("alamat") as string,
      wargaN: formData.get("warga") as string,
      tempatL: formData.get("tempatlahir") as string,
      tglL: formData.get("tgl") as string,
      agama: formData.get("agama") as string,
      work: formData.get("pekerjaan") as string,
      tujuan: formData.get("for") as string,
    };

    const resp = await postAPI("spfromdesa/buat", data);
    if (resp.status) {
      setNama(data.name);
      setShowModal(true);
    }
  }
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="min-h-screen">
        <div className="flex flex-row items-center">
          <Link href="/administrasi" passHref>
            <HiArrowSmLeft className="h-10 w-10 m-4" />
          </Link>

          <h1 className="font-bold">Surat Pengantar Dari Desa</h1>
        </div>
        <form className="w-full max-w-lg mx-auto p-4" onSubmit={submitSp}>
          <FormItem></FormItem>
        </form>
      </div>
      <ModalSurvey
        show={isModalOpen}
        onClose={closeModal}
        name={nama}
      ></ModalSurvey>
    </>
  );
}
