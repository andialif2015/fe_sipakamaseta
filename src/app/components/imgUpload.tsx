'use client'
import axios from 'axios';


// import { CldUploadWidget } from 'next-cloudinary';

export default function Page()  {
  const preset_key = "hyidm3qm"
  const cloud_name = "dlunh7tzm"

  function handleFile(event : any) {
      const file = event.target.files[0]
      const formData = new FormData()
      formData.append('file', file)
      formData.append('upload_preset', preset_key)
      axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
    return (
      <div className='flex flex-wrap mx-4 mb-6'>
        <label className='font-semibold w-full' htmlFor="">Gambar Produk</label>
        <input className='w-full sm:w-1/2 bg-gray-200 rounded-lg' type="file" name="image" onChange={handleFile}/>
      </div>
    )
}