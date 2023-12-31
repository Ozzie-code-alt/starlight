import React from 'react'

import Image from 'next/image'
type ButtonProps = {
type: 'button' | 'submit'
title: string
icon?: string
variant: string
full?: boolean
}


const Buttons = ({type,
title,
icon,
full,
variant}:ButtonProps) => {
  return (
   <button type={type} className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}> {/*Dynamic template strings*/}
      {icon && <Image src={icon} alt={title} width={24} height={24} /> } {/*if icon exists then we render image */}
      <label className='bold-16 whitespace-nowrap cursor-pointer'>{title}</label>
   </button>
  )
}

export default Buttons