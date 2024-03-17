import Link from 'next/link'
import React from 'react'

const data = [
    { 'halaman': 'page 1', 'dir': '/' },
    { 'halaman': 'page 2', 'dir': '/home' }
]
export default function Navbar() {
    return (
        <footer className=' w-full h-12 bg-slate-500 justify-center items-center flex gap-10 bottom-0 fixed'>
            {data.map((item, index) => (
                <Link href={item.dir} key={index}>
                    <p className=' text-lg font-bold text-white hover:text-red-500'>{item.halaman}</p>
                </Link>
            ))}
        </footer>
    )
}
