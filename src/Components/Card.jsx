import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragTransition={{bounceStiffness:600, bounceDamping:10}} dragElastic={1.1} className='relative flex-shrink-0 w-60 h-72 rounded-[40px] text-white bg-sky-200 overflow-hidden bg-zinc-900/90 px-5 py-10'>
        <FaRegFileAlt /> 
        <p className='text-sm mt-5'>
            {data.desc}
        </p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between px-8 py-3 mb-3'>
                <h5>{data.fileSize}</h5>
                <span className='w-6 h-6 bg-zinc-200 rounded-full flex items-center justify-center'>
                    {(data.close) ? <IoClose size="1em" color='#000'/> : <LuDownload size="0.8em" color='#000'/>}
                </span>
            </div>
            {data.tag.isOpen && (
                <div className={`tag w-full py-5 ${(data.tag.tagColor === 'blue' ? "bg-blue-600" : "bg-green-600")} flex justify-center`}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>
            ) }
        </div>
    </motion.div>
  )
}

export default Card