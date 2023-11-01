import React, { useEffect, useState } from "react";
import { Space_Grotesk } from "next/font/google";
import LowerNav from "@/components/navs/LowerNav";
import Image from "next/image";
import Seprator from "@/components/separator";
import { Drawer } from "antd";
import Button from "@/components/buttons";
import { toast } from "react-toastify";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const Profile = () => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [unlockDoor, setUnlockDoor] = useState(false);

  const unlockDoorFunc = () => {
    setUnlockDoor(true);
  };
  const lockDoorFunc = () => {
    setUnlockDoor(false);
  }

  useEffect(() => {
    if(unlockDoor){
        setTimeout(lockDoorFunc, 1000 * 60)
    }
  }, [unlockDoor])
  


  return (
    <main
      className={`${spaceGrotesk.className} flex items-center justify-center`}
    >
      <div className="relative min-h-screen pb-[8rem] w-full bg-zo-dark">
        <div className="p-6 my-6 text-center">
          <h1 className="text-zo-primary text-2xl">Hemant Kumar</h1>
          <p className="text-zo-secondary">hemant.kumar098@gmail.com</p>
        </div>
        <div className="px-6 space-y-6">
          <div className="p-6 border border-zo-stroke">
            <p className="mb-6 text-zo-primary">Tasks Completed</p>
            <div className="flex gap-2 justify-between">
              <div className="">
                <h3 className="text-2xl text-zo-primary">8</h3>
                <p className="text-zo-secondary text-sm">Today</p>
              </div>
              <div className="">
                <h3 className="text-2xl text-zo-primary">56</h3>
                <p className="text-zo-secondary text-sm">This Week</p>
              </div>
              <div className="">
                <h3 className="text-2xl text-zo-primary">344</h3>
                <p className="text-zo-secondary text-sm">This Month</p>
              </div>
            </div>
          </div>
          {unlockDoor ? (
            <div className="bg-zo-stroke w-full h-[164px] flex flex-col gap-6 items-center justify-center">
              <div className="h-10 w-10 relative">
                <Image
                  src="/assets/svgs/LockOpen.svg"
                  alt="unlock main door"
                  layout="fill"
                />
              </div>
              <p className="text-zo-primary font-bold">Main Door Unlocked</p>
            </div>
          ) : (
            <div
              onClick={unlockDoorFunc}
              className="bg-zo-stroke w-full h-[164px] flex flex-col gap-6 items-center justify-center"
            >
              <div className="h-10 w-10 relative">
                <Image
                  src="/assets/svgs/Lock.svg"
                  alt="unlock main door"
                  layout="fill"
                />
              </div>
              <p className="text-zo-highlight font-bold">Unlock Main Door</p>
            </div>
          )}

          <div className="bg-zo-stroke w-full ">
            <div className="border border-zo-stroke w-full flex flex-col items-center">
              <div className="flex items-start justify-start gap-4 p-6 w-full">
                <div className="h-6 w-6 relative">
                  <Image
                    src="/assets/svgs/Order.svg"
                    alt="Order"
                    layout="fill"
                  />
                </div>
                <p className="text-zo-primary">Request Housekeeping Supplies</p>
              </div>
              <Seprator type="black" />
              <div
                onClick={() => setShowFeedback(true)}
                className="flex items-start justify-start gap-4 p-6 w-full"
              >
                <div className="h-6 w-6 relative">
                  <Image
                    src="/assets/svgs/Warning.svg"
                    alt="Report Maintenance Issue"
                    layout="fill"
                  />
                </div>
                <p className="text-zo-primary">Report Maintenance Issue</p>
              </div>
            </div>
          </div>
          <div className="w-full mb-6 bg-zo-dark border border-zo-stroke">
            <div className="flex items-start justify-start gap-4 p-6 w-full">
              <div className="h-6 w-6 relative">
                <Image
                  src="/assets/svgs/Logout.svg"
                  alt="Order"
                  layout="fill"
                />
              </div>
              <p className="text-zo-primary">Logout</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-zo-secondary">Version 1.0</p>
          </div>
        </div>

        <Drawer
          placement={"bottom"}
          width={500}
          onClose={() => setShowFeedback(false)}
          open={showFeedback}
          height={"100vh"}
          closable={false}
          destroyOnClose={true}
          className={`${spaceGrotesk.className} !bg-zo-dark`}
        >
          <div className="relative flex items-center justify-center w-full mt-12 lg:mt-0">
            <div className="absolute top-1/2 -translate-y-1/2 left-0">
              <div
                className="h-8 w-8 relative"
                onClick={() => setShowFeedback(false)}
              >
                <Image
                  src="/assets/svgs/leftArrow.svg"
                  alt="Room"
                  layout="fill"
                />
              </div>
            </div>
            <h2 className="font-bold text-zo-primary">
              Report Maintenance Issue
            </h2>
          </div>
          <div className="mt-8">
            <textarea
              className="bg-zo-stroke min-h-[140px] border border-zo-primary w-full resize-none focus:outline-none p-4 text-zo-primary placeholder:text-zo-secondary"
              placeholder="Describe your issue here"
            />
          </div>

          <div className="fixed bottom-6 left-0 left w-full p-6">
            <Button
              text="Submit Issue"
              onClick={() => {
                setShowFeedback(false);
                toast.success("Thanks! Issue submitted.", {
                  hideProgressBar: true,
                  position: toast.POSITION.BOTTOM_RIGHT,
                  className: "alert-success",
                  icon: (
                    <Image
                      src="/assets/svgs/Clock.svg"
                      alt=""
                      height="24"
                      width="24"
                    />
                  ),
                });
              }}
            />
            {/* <Button text="Finish" onClick={()=>{console.log("Finish")}} /> */}
          </div>
        </Drawer>

        <LowerNav active="profile" />
      </div>
    </main>
  );
};

export default Profile;
