'use client';
import { prisma } from "@/../route";
import { HiArrowSmLeft } from 'react-icons/hi';
import Link from 'next/link';
import InputItem from "./inputItem";
import fs from 'fs';
import Docxtemplater from 'docxtemplater';
import fetch from 'node-fetch';
import PizZip from 'pizzip';
import { redirect } from "next/navigation";
import { env } from "process";
import ModalSurvey from "@/app/administrasi/survey/page";
import axios from "axios";
import React from "react";

// const DROPBOX_ACCESS_TOKEN = 'sl.BmgpDEj30tuqLgipr5ctDIIFC55mx_OaPRt310msNC2SHJSS9y2CeNolMaJFh1yxSUvuw5wde3dpIEYoHF1uVns_74dUouDt80yodSdL9b0IlZRkdiZRvBdMQkGFyKsdP9huS_1gJ5hi';
// const DROPBOX_ACCESS_TOKEN = 'sl.BmieS3gIp024yn4sevk8Q5JdzMVM1LA23H07kZu2KCpKUw-jyPem7PSSXyCmnWkJIHjjUvUBZGf_K2l8-ql39xgMOV5UtB7ADLR21T5cBnhA8fFQGuf0Ai-ukB5mF3K9bVCz41wITffa';

// async function generateDocx(dataX: { get: any; }) {
//   'use server'
//   try {
//     const templateName = "temp_suketlokasitanah.docx"
//     const path = require('path');
//     const templateFilePath = path.resolve(process.cwd(), `./public/templates/${templateName}`);
//     const templateContent = fs.readFileSync(templateFilePath);

//     var zip = new PizZip(templateContent);
//     const doc = new Docxtemplater();
//     doc.loadZip(zip);
//     doc.setData({
//       namepemiliki: dataX.get('namepemilik') as string,
//       alamattanah: dataX.get('alamattanah') as string,
//       luastanah: dataX.get('luastanah') as string,
//       luasbangunan: dataX.get('luasbangunan') as string,
//       dusun: dataX.get('dusun') as string,
//       nosertiftanah: dataX.get('nosertiftanah') as string,
//     });

//     doc.render();
//     return doc.getZip().generate({
//       type: "nodebuffer",
//       compression: "DEFLATE",
//     });
//   } catch (error) {
//     console.log("(ZIP ERROR)", error);
//     throw error;
//   }
// }

// async function uploadFileToDropbox(buffer: Buffer) {
//   'use server'
//   try {
//     const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
//     const fileName = `output_${timestamp}.docx`;
//     const url = `https://content.dropboxapi.com/2/files/upload`;
//     const headers = {
//       'Authorization': `Bearer ${DROPBOX_ACCESS_TOKEN}`,
//       'Dropbox-API-Arg': JSON.stringify({
//         path: `/Surat-Sipakamaseta/${fileName}`,
//         mode: 'add',
//         autorename: true,
//         mute: false,
//       }),
//       'Content-Type': 'application/octet-stream',
//     };

//     const response = await fetch(url, {
//       method: 'POST',
//       headers: headers,
//       body: buffer,
//     });

//     if (response.status === 200) {
//       console.log('File uploaded to Dropbox successfully.');
//     } else {
//       console.error('Error uploading file to Dropbox:', response.statusText);
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     throw error;
//   }
// }

async function addData(dataX: { get: any; }) {
  // 'use server'
  try {
    // const buffer = await generateDocx(dataX);

    // await uploadFileToDropbox(buffer);

    await prisma.suketlokasitanah.create({
      data: {
        namepemilik: dataX.get('namepemilik') as string,
        alamattanah: dataX.get('alamattanah') as string,
        luastanah: dataX.get('luastanah') as string,
        luasbangunan: dataX.get('luasbangunan') as string,
        dusun: dataX.get('dusun') as string,
        nosertiftanah: dataX.get('nosertiftanah') as string,
      },
    });

    console.log('User input data added to the database.');
  } catch (error) {
    console.error('Error:', error);
  }
}

export default function Page() {
  const [isModalOpen, setShowModal] = React.useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  const [nama, setNama] = React.useState("");

  async function addData(dataX: FormData) {

    const name = await prisma.suketwaliortu.create({
      data: {
        name: dataX.get('name') as string,
        nohp: dataX.get('nohp') as string,
      }
    });
  }

  async function submitData(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name") as string,
      nohp: formData.get('nohp') as string,
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
        <h1 className="font-bold">Surat Keterangan Lokasi Tanah</h1>
      </div>
      <form className="w-full max-w-lg mx-auto p-4" onSubmit={submitData}>
        <InputItem />
      </form>

      <ModalSurvey
        show={isModalOpen}
        onClose={closeModal}
        name={nama}
      ></ModalSurvey>
    </div>
  );
}
