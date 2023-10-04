import Link from 'next/link'
import { HiArrowSmRight } from 'react-icons/hi';

const surat = [
    { name: 'Surat Izin Membangun Sementara', to: '/administrasi/form/imbS' },
    { name: 'Surat Pengantar dari Kantor Desa', to: '/administrasi/form/spDariDesa' },
    { name: 'Surat Pengantar ke Kantor Desa', to: '/administrasi/form/spkedesa' },
    { name: 'Surat Keterangan Aktif Perusahaan', to: '/administrasi/form/suketaktifperusahaan' },
    { name: 'Surat Keterangan Belum Memiliki Rumah', to: '/administrasi/form/suketbelumpunyarumah' },
    { name: 'Surat Keterangan Belum Terbit E-KTP', to: '/administrasi/form/suketblmktp' },
    { name: 'Surat Keterangan Domisili', to: '/administrasi/form/suketdomisili' },
    { name: 'Surat Keterangan Ghoib', to: '/administrasi/form/suketghoib' },
    { name: 'Surat Keterangan Jabatan', to: '/administrasi/form/suketjabatan' },
    { name: 'Surat Keterangan Kehilangan Kartu Keluarga', to: '/administrasi/form/suketkehilangankk' },
    { name: 'Surat Keterangan Kehilangan STPD', to: '/administrasi/form/suketkehilanganstpd' },
    { name: 'Surat Keterangan Kekerabatan Anak Kandung', to: '/administrasi/form/suketkekerabatan' },
    { name: 'Surat Keterangan Lahir Desa', to: '/administrasi/form/suketlahirdesa' },
    { name: 'Surat Keterangan Lokasi Tanah', to: '/administrasi/form/suketlokasitanah' },
    { name: 'Surat Keterangan Menantu', to: '/administrasi/form/suketmenantu' },
    { name: 'Surat Keterangan Penduduk Liar', to: '/administrasi/form/suketpendudukliar' },
    { name: 'Surat Keterangan Penegasan Wilayah', to: '/administrasi/form/suketpenegasanwil' },
    { name: 'Surat Keterangan Pengurusan PBB', to: '/administrasi/form/suketpengurusanpbb' },
    { name: 'Surat Keterangan Pernyataan Waris', to: '/administrasi/form/suketpernyataanwaris' },
    { name: 'Surat Keterangan Pisah Rumah', to: '/administrasi/form/suketpisahrumah' },
    { name: 'Surat Keterangan Taksiran Tanah', to: '/administrasi/form/sukettaksirantanah' },
    { name: 'Surat Keterangan Tanah', to: '/administrasi/form/sukettanah' },
    { name: 'Surat Keterangan Tanah Belum Pernah Diperjualbelikan', to: '/administrasi/form/sukettbpd' },
    { name: 'Surat Keterangan Telah Menikah', to: '/administrasi/form/suketTelahMenikah' },
    { name: 'Surat Keterangan Untuk Nikah', to: '/administrasi/form/suketuntuknikah' },
    { name: 'Surat Keterangan Pengurusan Kartu Keluarga', to: '/administrasi/form/suketuruskk' },
    { name: 'Surat Keterangan Wali Orang Tua', to: '/administrasi/form/suketWaliOrtu' },
    { name: 'Surat Pengantar Imunisasi', to: '/administrasi/form/superimunisasi' },
    { name: 'Surat Perjanjian Utang Piutang', to: '/administrasi/form/superutangpiutang' },

    // {name: '', to:'/administrasi/'},
    // { name: 'Surat Lainnya', to: '/administrasi/customsurat' },
]
export default function ListSurat() {

    return (
        <div className='bg-sky-700 rounded-tr-3xl rounded-tl-3xl h-screen mx-auto sm:rounded-none p-3 overflow-y-auto '>
            {surat.map((item) =>
                <div className='mx-auto shadow-xl transition ease-in-out bg-yellow-400 max-w-md p-4 m-2 pt-3 rounded-md hover:scale-90'>
                    <Link href={item.to} className="flex flex-row" passHref>
                        <h1 className='text-white flex-1'>
                            {item.name}
                        </h1>
                        <HiArrowSmRight className='h-6 w-6 text-white hover:text-gray-300' />
                    </Link>
                </div>
            )}
        </div>
    )
}