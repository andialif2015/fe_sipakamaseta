'use client';
import React from "react"
import { revalidatePath, } from "next/cache"
import { getAPI } from "@/utils/api"

interface PostItem {
    id: string,
    createdAt: string,
    namepria: string,
    nohppria: string,
    tempatLpria: string,
    tglLpria: string,
    agamapria: string,
    workpria: string,
    alamatpria: string,
    namewanita: string,
    nohpwanita: string,
    tempatLwanita: string,
    tglLwanita: string,
    agamawanita: string,
    workwanita: string,
    alamatwanita: string,
    tglnikah: string,
    lokasinikah: string,
    status: string,
    fileName: string,
}

export default async function Page() {
    async function refreshData() {
        'use server'
        revalidatePath('/admin/suketTelahMenikah')

    }


    const [postItem, setPostItem] = React.useState<PostItem[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await getAPI("sukettelahmenikah/all", {});
                if (resp.status) {
                    setPostItem(resp.data.data);
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        };

        // Call the async function
        fetchData();
    }, []);

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
                    {postItem.map((item: any) =>

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
        </div>
    )
}