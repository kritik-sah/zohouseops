import Image from "next/image";
import React, { useEffect, useState } from "react";

const UnlockDoor = () => {
  const [unlockDoor, setUnlockDoor] = useState<boolean>(false);
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

  return (
    <>
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
    </>
  );
};

export default UnlockDoor;
