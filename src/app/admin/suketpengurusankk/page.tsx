import { prisma } from "@/../route"
import { revalidatePath, } from "next/cache"


export default async function Page() {
    async function refreshData() {
        'use server'
        revalidatePath('/admin/suketpengurusankk')

    }

    const postItem = await prisma.suketuruskk.findMany({})

    return (
        <div className="min-h-screen ml-64 p-4">
            <form action={refreshData}>
                <button type="submit" className="bg-blue-500 p-4 mb-5 text-white rounded-xl">Update Data</button>
            </form>
            <table className="table-auto">
                <thead className="bg-slate-700 text-md text-slate-400 ">
                    <tr className="">
                        <th className="p-3">Dibuat pada</th>
                        <th className="p-3">Nama</th>
                        <th className="p-3">Nomor HP</th>
                        <th className="p-3">Tempat Lahir</th>
                        <th className="p-3">Tanggal Lahir</th>
                        <th className="p-3">Alamat</th>
                        <th className="p-3">Agama</th>
                        <th className="p-3">Jenis Kelamin</th>
                        <th className="p-3">Pekerjaan</th>
                        <th className="p-3">Status Surat</th>

                    </tr>
                </thead>
                <tbody>
                    {postItem.map((item: any) =>

                        <tr className="bg-slate-500 text-white">
                            <td className="p-3">{String(item.createdAt)}</td>
                            <td className="p-3">{item.name}</td>
                            <td className="p-3">{item.nohp}</td>
                            <td className="p-3">{item.tempatL}</td>
                            <td className="p-3">{item.tglL}</td>
                            <td className="p-3">{item.alamat}</td>
                            <td className="p-3">{item.agama}</td>
                            <td className="p-3">{item.gender}</td>
                            <td className="p-3">{item.work}</td>
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