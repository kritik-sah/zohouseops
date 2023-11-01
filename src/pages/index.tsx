import Task from "@/components/home/Task";
import LowerNav from "@/components/navs/LowerNav";
import Seprator from "@/components/separator";
import { Drawer } from "antd";
import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
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
      <div className="relative min-h-screen w-full bg-zo-dark">
        <div className="p-6 border-b border-zo-stroke">
          <h1 className="text-zo-primary text-xl">Hello Hemant!</h1>
          <p className="text-zo-secondary text-sm my-2">
            You started shift at 8:12 AM
          </p>
        </div>

        <div className="p-6 min-h-screen overflow-y-scroll overflow-x-hidden">
          {working ? (
            <>
              <h2 className="text-zo-primary text-2xl">Today&apos;s Task</h2>

              <div className="my-6 flex flex-col gap-1">
                <div className="bg-zo-yellow w-full px-2 py-4 text-sm text-center text-zo-stroke">
                  🔥 Event started, Finish URGENT task
                </div>
                <Task title="Wash Dishes in Kitchen" from="GK" />
                <Task title="Wash Dishes in Kitchen" from="GK" urgent={true} />
                <Task
                  title="Wash Dishes in Kitchen"
                  from="GK"
                  inprogress={true}
                />
                <Task
                  title="Wash Dishes in Kitchen"
                  from="GK"
                  inprogress={true}
                  urgent={true}
                />
                <Task
                  title="Wash Dishes in Kitchen"
                  from="GK"
                  inprogress={true}
                  urgent={true}
                  completed={true}
                />
                <Task
                  title="Wash Dishes in Kitchen"
                  from="GK"
                  inprogress={true}
                  urgent={true}
                  completed={true}
                />
                <Task
                  title="Wash Dishes in Kitchen"
                  from="GK"
                  inprogress={true}
                  urgent={true}
                  completed={true}
                />
                <Task
                  title="Wash Dishes in Kitchen"
                  from="GK"
                  inprogress={true}
                  urgent={true}
                  completed={true}
                />
                <Task
                  title="Wash Dishes in Kitchen"
                  from="GK"
                  inprogress={true}
                  urgent={true}
                  completed={true}
                />
                <Task
                  title="Wash Dishes in Kitchen"
                  from="GK"
                  inprogress={true}
                  urgent={true}
                  completed={true}
                />
              </div>
              <div className="px-6 my-6 mb-[8rem] flex flex-col items-center justify-center gap-4">
                <h3 className="text-zo-primary text-lg">Done for the day?</h3>
                <button
                  onClick={showDrawer}
                  className="bg-zo-primary font-semibold text-base text-zo-stroke px-16 py-4"
                >
                  End Shift
                </button>
              </div>
            </>
          ) : (
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
              <h1 className="text-zo-green text-7xl font-bold">21</h1>
              <p className="text-zo-primary text-2xl text-center">
                Tasks Completed Succesfully
              </p>
              <div className="border border-zo-stroke w-full flex flex-col items-center">
                <div className="flex items-center justify-start gap-4 p-6 w-full">
                <div className="h-6 w-6 relative">
                    <Image
                      src="/assets/svgs/Start.svg"
                      alt="Start Shift"
                      layout="fill"
                    />
                  </div>
                  <p className="text-zo-secondary">
                    Shift Started at{" "}
                    <span className="text-zo-primary">8:30 AM</span>
                  </p>
                </div>
                <Seprator />
                <div className="flex items-center justify-start gap-4 p-6 w-full">
                  <div className="h-6 w-6 relative">
                    <Image
                      src="/assets/svgs/End.svg"
                      alt="End Shift"
                      layout="fill"
                    />
                  </div>
                  <p className="text-zo-secondary">
                    Shift ended at{" "}
                    <span className="text-zo-primary">6:20 PM</span>
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
          className={`${spaceGrotesk.className} !bg-zo-dark `}
        >
          <div className="flex items-center justify-center my-4">
            <div className="h-20 w-20 relative">
              <Image
                src="/assets/svgs/endTask.svg"
                alt="End Shift"
                layout="fill"
              />
            </div>
          </div>
          <div className="my-4 text-center">
            <h2 className="text-2xl text-zo-primary">
              Do you want to end your shift?
            </h2>
          </div>
          <div className="w-full space-y-4">
            <button
              onClick={() => {
                setWorking(false);
                onClose();
              }}
              className="bg-zo-primary w-full font-semibold px-16 py-4 text-zo-stroke"
            >
              Yes, End Shift
            </button>
            <button
              onClick={onClose}
              className="bg-transparent border border-zo-primary text-zo-primary w-full font-semibold px-16 py-4"
            >
              No, Continue Shift
            </button>
          </div>
        </Drawer>

        <LowerNav active="home" />
      </div>
    </main>
  );
}
