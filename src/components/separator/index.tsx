import { SeparatorProps } from '@/types/separator'
import React from 'react'

const Separator: React.FC<SeparatorProps> = (props) => {
  return (
    <div className={`w-[80%] border-b ${props?.type === "black"? "border-zo-dark" :"border-zo-stroke"}`}></div>
  )
}

export default Separator