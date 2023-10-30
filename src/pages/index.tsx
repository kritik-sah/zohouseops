import Task from "@/components/home/Task";
import LowerNav from "@/components/navs/LowerNav";
import { Drawer } from "antd";
import { Space_Grotesk } from "next/font/google";
import { useState } from "react";
import { FaRegHandPeace } from "react-icons/fa";
import { HiOutlineChevronDoubleLeft, HiOutlineChevronDoubleRight } from "react-icons/hi";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Home() {
  const [open, setOpen] = useState(false);
  const [working, setWorking] = useState(true);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <main
      className={`${spaceGrotesk.className} flex items-center justify-center`}
    >
      <div className="relative min-h-screen w-full max-w-sm bg-[#121212]">
        <div className="p-6 border-b border-[#404040]">
          <h1 className="text-white text-xl">Hello Hemant!</h1>
          <p className="text-[#5f5f5f] text-sm my-2">
            You started shift at 8:12 AM
          </p>
        </div>

        <div className="p-6 min-h-screen overflow-y-scroll overflow-x-hidden">
          {working ? (
            <>
              <h2 className="text-white text-2xl">Today&apos;s Task</h2>

              <div className="my-6 flex flex-col gap-1">
                <div className="bg-[#FED602] w-full px-6 py-4 font-medium text-[#262626]">
                  🔥 Event started, Finish URGENT task
                </div>
                <Task />
                <Task urgent={true} />
                <Task inprogress={true} />
                <Task inprogress={true} urgent={true} />
                <Task inprogress={true} urgent={true} completed={true} />
                <Task inprogress={true} urgent={true} completed={true} />
                <Task inprogress={true} urgent={true} completed={true} />
                <Task inprogress={true} urgent={true} completed={true} />
                <Task inprogress={true} urgent={true} completed={true} />
                <Task inprogress={true} urgent={true} completed={true} />
              </div>
              <div className="px-6 mb-[8rem] flex flex-col items-center justify-center gap-4">
                <h3 className="text-white text-lg">Done for the day?</h3>
                <button
                  onClick={showDrawer}
                  className="bg-white font-semibold text-xl px-16 py-4"
                >
                  End Shift
                </button>
              </div>
            </>
          ) : (
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
              <h1 className="text-[#67DF48] text-7xl font-bold">21</h1>
              <p className="text-white text-2xl text-center">Tasks Completed Succesfully</p>
              <div className="border border-[#5f5f5f] w-full flex flex-col items-center">
                <div className="flex items-center justify-start gap-4 p-6 w-full">
                  <HiOutlineChevronDoubleRight className="text-[#5f5f5f]" />
                  <p className="text-[#5f5f5f]">
                    Shift Started at <span className="text-white">8:30 AM</span>
                  </p>
                </div>
                <div className="w-[80%] border-b border-[#5f5f5f]"></div>
                <div className="flex items-center justify-start gap-4 p-6 w-full">
                  <HiOutlineChevronDoubleLeft className="text-[#5f5f5f]" />
                  <p className="text-[#5f5f5f]">
                    Shift ended at <span className="text-white">6:20 PM</span>
                  </p>
                </div>
              </div>

            </div>
          )}
        </div>

        <Drawer
          placement={"bottom"}
          width={500}
          onClose={onClose}
          open={open}
          closable={false}
          className={`${spaceGrotesk.className} !bg-[#202020] `}
        >
          <div className="flex items-center justify-center my-4">
            <FaRegHandPeace className="text-4xl text-white" />
          </div>
          <div className="my-4 text-center">
            <h2 className="text-2xl text-white">
              Do you want to end your shift?
            </h2>
          </div>
          <div className="w-full space-y-4">
            <button
              onClick={() => {
                setWorking(false);
              }}
              className="bg-white w-full font-semibold text-xl px-16 py-4"
            >
              Yes, End Shift
            </button>
            <button
              onClick={showDrawer}
              className="bg-transparent border border-white text-white w-full font-semibold text-xl px-16 py-4"
            >
              No, Continue Shift
            </button>
          </div>
        </Drawer>

        <LowerNav />
      </div>
    </main>
  );
}
