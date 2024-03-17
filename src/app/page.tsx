import Link from 'next/link'
import React from 'react'
import { pelanggan } from '@/data/pengunjung'

export default function page() {
  return (
    <div className=' gap-4 p-4 grid mini:grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5 super:grid-cols-6'>
      {pelanggan.map((item, index) => (
        <ul key={index} className=' bg-slate-500 justify-center items-center rounded-lg flex-col p-3'>
          <p>{item.nama}</p>
          {item.daftar.map((item, index) => (
            <ul key={index}>
              <p>{item.judul}</p>
              <p>{item.harga}</p>
              {item.reward.map((item, index) => (
                <ul key={index}>
                  <p>{item.event}</p>
                  <p>{item.hadiah}</p>
                </ul>
              ))}
            </ul>
          ))}
        </ul>
      ))}
    </div>
  )
}
