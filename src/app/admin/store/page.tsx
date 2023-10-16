'use client';
import React from "react";
import {prisma} from "@/../route"
import { revalidatePath, } from "next/cache"
import { getAPI, deleteAPI, putAPI } from "@/utils/api";

interface Post {
  id: string;
  title: string;
  createdAt: string;
  content: string;
  published: boolean;
  kontak: string;
  price: number;
}

export default async function Page() {

    const [postItem, setPostItem] = React.useState<Post[]>([]);

    React.useEffect(() => {
      getPosts();
    }, []);

    async function getPosts() {
      try {
        const response = await getAPI("post/all", {});
        if (response.status) {
          setPostItem(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    

    const deletePost = async(item: any) => {
        try {
            const url = "post/delete/" + item.id;
            const response = await deleteAPI(url);
            if(response.status){
                getPosts();
            }
        } catch (error) {
            console.log(error)
        }
    }

    const unpublishPost = async(item: any) => {
        try {
          const url = "post/unpublish/" + item.id;
          const response = await putAPI(url,{});
          if (response.status) {
            getPosts();
          }
        } catch (error) {
          console.log(error);
        }
    }

    const publishPost = async(item: any) => {
        try {
          const url = "post/publish/" + item.id;
          const response = await putAPI(url,{});
          if (response.status) {
            getPosts();
          }
        } catch (error) {
          console.log(error);
        }
    }

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
            {postItem.map((item: any) => (
              <tr className="bg-slate-500 text-white">
                <td className="p-3">{item.title}</td>
                <td className="p-3">Rp.{item.price}</td>
                <td className="p-3">{item.kontak}</td>
                <td className="p-3">{String(item.published)}</td>
                <td>
                  <button
                    onClick={() => {
                      deletePost(item);
                    }}
                    type="button"
                    className="p-2 bg-red-500 rounded-lg"
                  >
                    delete
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      unpublishPost(item);
                    }}
                    type="button"
                    className="p-2 bg-yellow-500 rounded-lg"
                  >
                    unpublish
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      publishPost(item);
                    }}
                    type="button"
                    className="p-2 bg-green-500 rounded-lg"
                  >
                    publish
                  </button>
                </td>
              </tr>
            ))}
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
    );
}
