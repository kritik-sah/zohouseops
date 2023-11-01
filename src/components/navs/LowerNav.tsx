import React from 'react'
import { MdChatBubbleOutline, MdOutlineCheckBox } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi";

const LowerNav = () => {
  return (
    <div className="fixed bottom-0 w-full bg-[#121212] p-6 border-t border-[#202020]">
        <div className="flex w-full gap-6 items-center justify-around text-2xl">
          <MdOutlineCheckBox className="text-[#A7CD43]"/>
          <MdChatBubbleOutline className="text-white" />
          <HiOutlineUserCircle className="text-white" />

        </div>
        
      </div>
  )
}

export default LowerNav