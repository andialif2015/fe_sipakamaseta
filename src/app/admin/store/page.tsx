import {prisma} from "@/../route"
import { revalidatePath, } from "next/cache"


// export const revalidate = 3

export default async function Page() {


    async function deleteUser(userData: FormData) {
        'use server'
        const num = Number(userData.get('id'))
        const del = await prisma.post.delete({
            where: {
                id: num
                // title: userData.get('title') as string,
                // price: userData.get('price') as string
            },
        })
        revalidatePath('/admin/store')
        revalidatePath('/store')
    }

    async function unpublishPost(userData: FormData) {
        'use server'
        const num = Number(userData.get('id'))
        const del = await prisma.post.update({
            where: {
                id: num
                // title: userData.get('title') as string,
                // price: userData.get('price') as string
            },
            data: {
                published: false
            }
        })
        revalidatePath('/admin/store')
        revalidatePath('/store')
    }

    async function publishPost(userData: FormData) {
        'use server'
        const num = Number(userData.get('id'))
        const del = await prisma.post.update({
            where: {
                id: num
                // title: userData.get('title') as string,
                // price: userData.get('price') as string
            },
            data: {
                published: true
            }
        })
        revalidatePath('/admin/store')
    }

    const postItem = await prisma.post.findMany({})
    // const  

    return (
        <div className="min-h-screen ml-64 p-4">
            <table className="table-auto">
                <thead className="bg-slate-700 text-md text-slate-400 ">
                    <tr className="">
                        <th className="p-3">Judul Produk</th>
                        <th className="p-3">Harga Produk</th>
                        <th className="p-3">Kontak Penjual</th>
                        <th className="p-3">Status Produk</th>
                        <th className="p-3">Delete</th>
                        <th className="p-3">Unpublish</th>
                        <th className="p-3">Publish</th>
                    </tr>
                </thead>
                <tbody>
                    {postItem.map((item)=>

                    <tr className="bg-slate-500 text-white">
                        <td className="p-3">{item.title}</td>
                        <td className="p-3">Rp.{item.price}</td>
                        <td className="p-3">{item.kontak}</td>
                        <td className="p-3">{String(item.published)}</td>
                        <td>
                            <form action={deleteUser}>
                                <input name="id" type="hidden" value={String(item.id)} />
                                <button type='submit' className="p-2 bg-red-500 rounded-lg">delete</button>
                            </form>
                        </td>
                        <td>
                            <form action={unpublishPost}>
                                <input name="id" type="hidden" value={String(item.id)} />
                                <button type='submit' className="p-2 bg-red-700 rounded-lg">unpublish</button>
                            </form>
                        </td>
                        <td>
                            <form action={publishPost}>
                                <input name="id" type="hidden" value={String(item.id)} />
                                <button type='submit' className="p-2 bg-green-500 rounded-lg">publish</button>
                            </form>
                        </td>
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
