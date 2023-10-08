import Docxtemplater from 'docxtemplater';
import fs from 'fs';
import path from 'path';
import PizZip from 'pizzip';
// import { prisma } from "@/../route";


export async function generateWordDocument(data: FormData, templatePath: string, jenis: string, _id: number) {
  try {

    const templateContent = fs.readFileSync(templatePath, "binary");
    const zip = new PizZip(templateContent);
    const doc = new Docxtemplater(zip);
    let dataForm = {};
    if (jenis == 'spdaridesa') {
      dataForm = setDataSPDesa(data);
    }

    doc.setData(dataForm);

    doc.render();

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const fileName = `output_${timestamp}.docx`;

    const outputPath = path.join(__dirname, `../../../../../../public/dokumen/${fileName}`);
    const buffer = doc.getZip().generate({ type: 'nodebuffer' }); // Use generate() to get buffer

    // await prisma.spfromdesa.update({
    //   where: {
    //     id: _id,
    //   },
    //   data: {
    //     fileName: fileName
    //   }
    // });

    fs.writeFileSync(outputPath, buffer); // Write the buffer to the file

    return true;

  } catch (error) {
    throw error
  }
}

function setDataSPDesa(data: FormData) {
  return {
    name: data.get('name') as string,
    tempatlahir: data.get('tempatlahir') as string,
    tgl: data.get('tgl') as string,
    nik: data.get('nik') as string,
    warga: data.get('warga') as string,
    agama: data.get('agama') as string,
    pekerjaan: data.get('pekerjaan') as string,
    alamat: data.get('alamat') as string,
    for: data.get('for') as string,
  }
}

