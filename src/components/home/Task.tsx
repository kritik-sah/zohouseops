import React, { useState } from "react";
import { Completed, Inprogress, Urgent } from "../badges";
import Seprator from "../separator";
// import Image from "next/image";
import "node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";
import Image from "next/image";
import Button from "../buttons";
import Laundry from "../proofOfWork";
import ProofOfWork from "../proofOfWork/ProofOfWork";
import Drawer from "../Drawer";
import { TaskType } from "@/types/task";

const Task : React.FC<TaskType> = (props) => {
  const { urgent, inprogress, completed, title, from } = props;
  const [openTaskInfo, setOpenTaskInfo] = useState<boolean>(false);
  const [uplodedProof, setuplodedProof] = useState<any>(null);
  const [pickUpClothCount, setPickUpClothCount] = useState<number>(0);
  const [dropClothCount, setDropClothCount] = useState<number>(0);
  const [uplodedPickedLaundry, setuplodedPickedLaundry] = useState<any>(null); // need help
  const [uplodedDropLaundry, setuplodedDropLaundry] = useState<any>(null); // need help in types


  const closeTaskInfo = () => {
    setOpenTaskInfo(false);
  };

  return (
    <>
      <div
        onClick={() => setOpenTaskInfo(true)}
        className={`${
          completed
            ? "bg-zo-green-dark"
            : inprogress
            ? "bg-zo-orange-dark"
            : "bg-zo-stroke"
        }  w-full space-y-6 p-6`}
      >
        <div className="flex items-start justify-between gap-6">
          <h3 className="text-base text-zo-primary">{title}</h3>
          {!completed ? (
            <span className="text-sm text-zo-highlight">
              {inprogress ? "Finish" : "Start"}
            </span>
          ) : null}
        </div>
        <div className="flex items-start justify-between gap-4">
          <p className="text-zo-secondary text-sm">{`From ${from}`}</p>
          <div className="flex gap-1 text-xs font-semibold">
            {urgent && !completed ? <Urgent /> : null}
            {inprogress && !completed ? <Inprogress /> : null}
            {completed ? <Completed /> : null}
          </div>
        </div>
      </div>

      <Drawer isOpen={openTaskInfo} onClose={closeTaskInfo} className="max-h-screen " >
        <div className="flex items-center justify-between w-full mt-12 lg:mt-0">
          <div className="h-8 w-8 relative" onClick={() => closeTaskInfo()}>
            <Image src="/assets/svgs/leftArrow.svg" alt="Room" layout="fill" />
          </div>
          <div className="flex gap-2 items-center justify-between">
            {/* <Urgent /> */}
            <Inprogress />
          </div>
        </div>
        <div className="">
          <h2 className="text-zo-primary text-2xl my-6">
            Deliver Towels in townsville
          </h2>
          <p className="text-zo-primary text-base">
            Please pick 2 fresh towels from laundry area and deliver it to
            mentioned room.
          </p>

          {/* proof of work  */}
          <ProofOfWork id="pow" setImage={setuplodedProof} image={uplodedProof} />

          <Laundry title='Pick Up' id="pickup" countAction={setPickUpClothCount} count={pickUpClothCount} setImage={setuplodedPickedLaundry} image={uplodedPickedLaundry} />
          <Laundry title='Drop' id="drop" countAction={setDropClothCount} count={dropClothCount} setImage={setuplodedDropLaundry} image={uplodedDropLaundry} />

          {/* Task info  */}
          <div className="bg-zo-dark border border-zo-stroke w-full p-6 my-6 flex flex-col items-center mb-44 space-y-6">
            <Player
              playsInline
              poster="/assets/poster.png"
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
            <div className="flex items-center justify-start gap-4 w-full">
              <div className="h-6 w-6 relative">
                <Image src="/assets/svgs/Room.svg" alt="Room" layout="fill" />
              </div>
              <p className="text-zo-secondary">
                Room: <span className="text-zo-primary">Townsville</span>
              </p>
            </div>
            <Seprator />
            <div className="flex items-center justify-start gap-4 w-full mt-6">
              <div className="h-6 w-6 relative">
                <Image
                  src="/assets/svgs/Profile.svg"
                  alt="profile"
                  layout="fill"
                />
              </div>
              <p className="text-zo-secondary">
                Requested by{" "}
                <span className="text-zo-primary">Aman 23 min ago</span>
              </p>
            </div>
          </div>
          <div className="fixed bottom-6 left-0 left w-full p-6">
            <Button
              text="Start"
              onClick={() => {
                console.log("Start");
              }}
            />
            {/* <Button text="Finish" onClick={()=>{console.log("Finish")}} /> */}
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Task;
