import React from 'react'

const Seprator = (props: any) => {
  return (
    <div className={`w-[80%] border-b ${props?.type === "black"? "border-zo-dark" :"border-zo-stroke"}`}></div>
  )
}

export default Seprator