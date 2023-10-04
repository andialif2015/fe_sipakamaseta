import {prisma} from "@/../route"
import { revalidatePath, } from "next/cache"


export default async function Page() {
    async function refreshData() {
        'use server'
    revalidatePath('/admin/suketTelahMenikah')

    }
    // revalidatePath('/admin/suketTelahMenikah')
    async function setTrue(title: string) {

    }

    const postItem = await prisma.sukettelahmenikah.findMany({})
    // const  

    return (
        <div className="min-h-screen ml-64 p-4">
            <form action={refreshData}>
                <button type="submit" className="bg-blue-500 p-4 mb-5 text-white rounded-xl">Update Data</button>

            </form>
            <table className="table-auto">
                <thead className="bg-slate-700 text-md text-slate-400 ">
                    <tr className="">
                        <th className="p-3">Dibuat pada</th>
                        <th className="p-3">Nama Pria</th>
                        <th className="p-3">Nomor HP Pria</th>
                        <th className="p-3">Alamat Pria</th>
                        <th className="p-3">Tempat Lahir Pria</th>
                        <th className="p-3">Tanggal Lahir Pria</th>
                        <th className="p-3">Agama Pria</th>
                        <th className="p-3">Pekerjaan Pria</th>
                        <th className="p-3">Nama Wanita</th>
                        <th className="p-3">Nomor HP Wanita</th>
                        <th className="p-3">Alamat Wanita</th>
                        <th className="p-3">Tempat Lahir Wanita</th>
                        <th className="p-3">Tanggal Lahir Wanita</th>
                        <th className="p-3">Agama Wanita</th>
                        <th className="p-3">Pekerjaan Wanita</th>
                        <th className="p-3">Tanggal Nikah</th>
                        <th className="p-3">Lokasi Nikah</th>
                        <th className="p-3">Status Surat</th>

                    </tr>
                </thead>
                <tbody>
                    {postItem.map((item)=>

                    <tr className="bg-slate-500 text-white">
                        <td className="p-3">{String(item.createdAt)}</td>
                        <td className="p-3">{item.namepria}</td>
                        <td className="p-3">{item.nohppria}</td>
                        <td className="p-3">{item.alamatpria}</td>
                        <td className="p-3">{item.tempatLpria}</td>
                        <td className="p-3">{item.tglLpria}</td>
                        <td className="p-3">{item.agamapria}</td>
                        <td className="p-3">{item.workpria}</td>
                        <td className="p-3">{item.namewanita}</td>
                        <td className="p-3">{item.nohpwanita}</td>
                        <td className="p-3">{item.alamatwanita}</td>
                        <td className="p-3">{item.tempatLwanita}</td>
                        <td className="p-3">{item.tglLwanita}</td>
                        <td className="p-3">{item.agamawanita}</td>
                        <td className="p-3">{item.workwanita}</td>
                        <td className="p-3">{item.tglnikah}</td>
                        <td className="p-3">{item.lokasinikah}</td>
                        <td className="p-3">{String(item.status)}</td>
                    </tr>
                    )}
                </tbody>
            </table>
            {/* <div className="flex flex-col gap-3 w-full bg-slate-400 max-w-3xl mx-auto mt-3">
            {postItem.map((item) =>
            <div className="bg-gray-400 rounded-lg max-w-xl p-4 " >
                <div className="flex flex-row gap-4 items-center ">

                    <p>{item.title}</p>
                    <p>{item.price}</p>
                    <p>{item.kontak}</p>
                    <p>{String(item.published)}</p>
                    <div className="flex flex-row gap-4">
                        <button className="bg-green-500 p-2 rounded-md">set true</button>
                        <button className="bg-red-500 p-2 rounded-md">set false</button>
                    </div>                
                </div>
            </div> 

            )}
                </div> */}
        </div>
    )
}