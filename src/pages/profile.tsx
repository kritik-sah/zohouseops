import React, { useEffect, useState } from "react";
import { Space_Grotesk } from "next/font/google";
import LowerNav from "@/components/navs/LowerNav";
import Image from "next/image";
import Seprator from "@/components/separator";
import { Drawer } from "antd";
import Button from "@/components/buttons";
import { toast } from "react-toastify";
import { HiMinus, HiPlus } from "react-icons/hi";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const Profile = () => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [showRequestSupply, setShowRequestSupply] = useState(false);
  const [unlockDoor, setUnlockDoor] = useState(false);
  const [searchInput, setSearchInput] = useState<any>("");
  const [addedSupply, setAddedSupply] = useState<any>([
    {
      name: "Tissue Box (100 pcs)",
      count: 1,
      id: 1,
    },
    {
      name: "Dettol Handwash (1L)",
      count: 1,
      id: 2,
    },
    {
      name: "Green Tea Packet",
      count: 1,
      id: 3,
    },
    {
      name: "Sandwich Bread",
      count: 1,
      id: 4,
    },
  ]);

  const unlockDoorFunc = () => {
    setUnlockDoor(true);
  };
  const lockDoorFunc = () => {
    setUnlockDoor(false);
  };

  useEffect(() => {
    if (unlockDoor) {
      setTimeout(lockDoorFunc, 1000 * 60);
    }
  }, [unlockDoor]);

  const searchSupply = (e: any) => {
    setSearchInput(e.target.value);
  };

  const updateCount = (itemId: any, newCount: any) => {
    if (newCount !== 0) {
      const updatedSupply = addedSupply.map((item: any) => {
        if (item.id === itemId) {
          return { ...item, count: newCount };
        }
        return item;
      });

      setAddedSupply([...updatedSupply]);

      console.log(
        "🚀 ~ file: profile.tsx:68 ~ updateCount ~ updatedSupply:",
        updatedSupply
      );
    } else {
      const updatedSupply = addedSupply.filter((item: any) => {
        return item.id !== itemId;
      });
      setAddedSupply([...updatedSupply]);
      console.log(
        "🚀 ~ file: profile.tsx:76 ~ updateCount ~ updatedSupply:",
        updatedSupply
      );
    }
  };

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
              className="bg-zo-stroke w-full h-[164px] flex flex-col gap-6 items-center justify-center cursor-pointer"
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
              <div
                onClick={() => setShowRequestSupply(true)}
                className="flex items-start justify-start gap-4 p-6 w-full cursor-pointer"
              >
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
                className="flex items-start justify-start gap-4 p-6 w-full cursor-pointer"
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
            <div className="flex items-start justify-start gap-4 p-6 w-full cursor-pointer">
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
          </div>
        </Drawer>

        <Drawer
          placement={"bottom"}
          width={500}
          onClose={() => setShowRequestSupply(false)}
          open={showRequestSupply}
          height={"100vh"}
          closable={false}
          destroyOnClose={true}
          className={`${spaceGrotesk.className} !bg-zo-dark`}
        >
          <div
            className={`${spaceGrotesk.className} relative flex items-center justify-center w-full mt-12 lg:mt-0`}
          >
            <div className="absolute top-1/2 -translate-y-1/2 left-0">
              <div
                className="h-8 w-8 relative"
                onClick={() => setShowRequestSupply(false)}
              >
                <Image
                  src="/assets/svgs/leftArrow.svg"
                  alt="Room"
                  layout="fill"
                />
              </div>
            </div>
            <h2 className="font-bold text-zo-primary !font-space-grotesk">
              Request Hosuekeeping Supplies
            </h2>
          </div>
          <div className="mt-8">
            <div className="relative mb-6 bg-zo-stroke flex items-center justify-between gap-2 h-14 border border-zo-stroke hover:border-zo-primary focus:outline-zo-primary">
              <span className="h-6 w-6 ml-4 relative">
                <Image src="/assets/svgs/Search.svg" alt="Room" layout="fill" />
              </span>
              <input
                onChange={(e) => searchSupply(e)}
                value={searchInput}
                className="w-full p-2 bg-zo-stroke outline-none font-space-grotesk placeholder:text-zo-secondary placeholder:font-space-grotesk text-zo-primary"
                type="text"
                name="search"
                id="search"
                placeholder="Add item"
              />
              <span
                onClick={() => setSearchInput("")}
                className="h-6 w-6 mr-4 relative"
              >
                <Image src="/assets/svgs/Cancel.svg" alt="Room" layout="fill" />
              </span>
              {searchInput ? (
                <>
                  <div className="absolute w-full top-[105%] bg-zo-stroke shadow-xl">
                    <div className="text-zo-primary p-6">
                      <p>Tissue Box (100 pcs)</p>
                    </div>
                    <Seprator type="black" />
                    <div className="text-zo-primary p-6">
                      <p>Tissue Box (200 pcs)</p>
                    </div>
                  </div>
                </>
              ) : null}
            </div>

            <div className="space-y-1">
              {addedSupply?.length &&
                addedSupply?.map((item: any) => (
                  <div
                    key={item?.id}
                    className="flex items-center justify-between gap-4 bg-zo-stroke p-6 text-zo-primary"
                  >
                    <p>{item?.name}</p>
                    <div className="flex items-center text-lg gap-4">
                      <button
                        onClick={() => updateCount(item?.id, item?.count - 1)}
                        className="text-zo-primary disabled:text-zo-secondary"
                      >
                        <HiMinus />
                      </button>
                      <span className={"text-zo-highlight"}>{item?.count}</span>
                      <button
                        onClick={() => updateCount(item?.id, item?.count + 1)}
                        className="text-zo-primary"
                      >
                        <HiPlus />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Drawer>

        <LowerNav active="profile" />
      </div>
    </main>
  );
};

export default Profile;
