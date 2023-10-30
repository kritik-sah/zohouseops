import React from 'react'

const Task = (props : any) => {
  const {urgent, inprogress, completed} = props;
  return (
    <div className={`${ completed ? "bg-[#293329]" : inprogress ? "bg-[#332D29]" : "bg-[#202020]"}  w-full space-y-6 p-6`}>
    <div className="flex items-start justify-between gap-6">
      <h3 className="text-lg text-[#C8C7C6]">Wash Dishes in Kitchen</h3>
      {!completed ? <span className="text-lg text-[#85A13D]">{inprogress ? "Finish" : "Start"}</span> : null}
    </div>
    <div className="flex items-start justify-between gap-4">
      <p className="text-[#5f5f5f] text-sm">From Mukhiya</p>
      <div className="flex gap-1 text-xs font-semibold">
          {urgent && !completed ? <span className="bg-[#FED602] px-2 py-1 uppercase">urgent</span> : null }
          {inprogress && !completed ? <span className="bg-[#FE9E4B] px-2 py-1 uppercase">in progress</span> : null}
          {completed ? <span className="bg-[#67DF48] px-2 py-1 uppercase">completed</span> : null}
      </div>
    </div>

  </div>
  )
}

export default Task