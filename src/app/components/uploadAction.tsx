'use client'
import axios from "axios"
// import { useState } from "react"
// import { BeatLoader } from "react-spinners"
// import React from "react"
import {NumericFormat, PatternFormat} from 'react-number-format';
import AlertDialogComp from "./alertDialog";
import { useRouter } from 'next/navigation';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function handleFile() {
    const preset_key = "hyidm3qm"
    const cloud_name = "dlunh7tzm"    
    const [image, setImage] = React.useState('')
    const [loading, setLoading] = React.useState(true)
    // const [spin, setSpin] = useState(false)
    function handle(event : any) {
        // setSpin(true)
        // setLoading(true)
        const file = event.target.files[0]
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', preset_key)
        axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
        .then(res => setImage(res.data.url))
        .catch(err => console.log(err))
        setLoading(false)
        // setSpin(false);
    }
    const router = useRouter()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    function handleSubmit() {
        handleClose
        router.push('/')
      };



    return(
        <div className="flex flex-col">
            <div className='flex flex-wrap mx-4 mb-6'>
                <label className='font-semibold w-full' htmlFor="">Kontak</label>
                <div className="flex flex-row w-full">
                    <div className="h-full font-semibold pl-2 text-white text-center w-14 bg-gray-700 rounded-l-lg flex items-center"><p className=''>+62</p></div>
                    <PatternFormat
                    className="w-full bg-gray-200 rounded-r-lg"
                    name='kontak'
                    format="###########"
                    />{/* yes */}
                </div>
            </div>
            <div className="flex flex-wrap mx-4 mb-6">
                <label className="font-semibold w-full" htmlFor="">Harga Produk</label>
                <div className="flex w-full">
                <h2 className="font-semibold text-xl flex items-center my-2 mr-3">Rp.</h2>
                <NumericFormat
                name="price"
                className="w-full bg-gray-200 rounded-lg"
                thousandSeparator
                allowLeadingZeros={false}
                allowNegative={false} 
                />
                </div>
            </div>
            <div className='flex flex-wrap mx-4 mb-6'>
                <label className='font-semibold w-full' htmlFor="image">Gambar Produk</label>
                <input className='w-full bg-gray-200 rounded-lg' type="file" accept=".png, .jpg, .jpeg" name="image" onChange={handle}/>
                
                    <input type="hidden" name="urlImg" value={image} />

                    <img className="rounded-lg my-3" src={image} alt="" />
                
                

            </div>

            {/* {loading ? ( 
                <button className='bg-gray-500 text-white mx-4 my-2 p-2 rounded-lg disabled:opacity-5 cursor-not-allowed' type="button">Tambah Produk</button>

                ): (<button className='text-2xl bg-black text-white my-2 p-2 rounded-lg' type='button'>Tambah Produk</button>)} */}
                {/* <AlertDialogComp></AlertDialogComp> */}
                <div  className="mx-4">
                    {loading ? (
                    <Button 
                    variant="outlined" disabled>
                        Tambah Produk
                    </Button>) 
                    : (<Button variant="outlined" onClick={handleClickOpen}>
                        Tambah Produk
                    </Button>) }
                    <Dialog
                        open={open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description">
                            
                        <DialogTitle>{"Cocokji?"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                Data yang telah diupload tidak dapat dirubah. Pastikan keterangan barang telah sesuai. ^_^
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Kembali</Button>
                            <Button form="addStore" type='submit' onClick={handleSubmit}>Kirim</Button>
                        </DialogActions>
                    </Dialog>
                </div>
                {/* // <button className='bg-black text-white my-2 p-2 rounded-lg' type='submit'>Tambah Produk</button> */}
        </div>

    )

    // function handleFile(event : any) {
        
    //     const preset_key = "hyidm3qm"
    //     const cloud_name = "dlunh7tzm"
    //     const file = event.target.files[0]
    //     const formData = new FormData()
    //     formData.append('file', file)
    //     formData.append('upload_preset', preset_key)
    //     axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
    //     .then(res => console.log(res),)
    //     .catch(err => console.log(err))
    // }
    // return(res)
}


// export async function addItem(dataForm: FormData){
//     const postData = await prisma.post.create({
//         data: {
//             title: dataForm.get('title') as string,
//             price: dataForm.get('price') as string
            
//         }
//     })
// }