import React from 'react'

function IconHeader ({ Icon, active }) {
  return (
    <div className='flex items-center cursor-pointer px-8 py-2 rounded-xl hover:bg-gray-100 active:border-b-2 active:border-blue-500 group'>
        <Icon className={`h-6 mx-auto text-gray-500 group-hover:text-blue-500 ${active && "text-blue-500"}`} />
    </div>
  )
}

export default IconHeader
