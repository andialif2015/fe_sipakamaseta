'use client';
import React from "react"
import { revalidatePath, } from "next/cache"
import { getAPI } from "@/utils/api"

interface PostItem {
    id: string,
    createdAt: string,
    name: string,
    nohp: string,
    tempatL: string,
    tglL: string,
    alamat: string,
    agama: string,
    gender: string,
    work: string,
    status: string,
    fileName: string,
}
export default async function Page() {
    async function refreshData() {
        // 'use server'
        revalidatePath('/admin/suketuruskk')
    }

    const [postItem, setPostItem] = React.useState<PostItem[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await getAPI("suketpengurusankk/all", {});
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
                        <th className="p-3">Nama</th>

                        <th className="p-3">Nomor HP</th>
                        <th className="p-3">Status Surat</th>
                        <th className="p-3">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {postItem.map((item: any) =>
                        <tr className="bg-slate-500 text-white">
                            <td className="p-3">{String(item.createdAt)}</td>
                            <td className="p-3">{item.name}</td>
                            <td className="p-3">{item.nohp}</td>
                            <td className="p-3">{String(item.status)}</td>
                            <td className="p-3"><a href="#">Unduh</a></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}