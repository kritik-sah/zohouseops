import Image from "next/image";
import React, { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";

const Laundry = (props: any) => {
    const {countAction, count, setImage, image, title, id} = props;
  // const [uplodedLaundry, setUplodedLaundry] = useState<any>(null);
  // const [uploadError, setuploadError] = useState<any>(null);

  const uploadLaundry = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type && file.type.indexOf("image") === -1) {
        console.log("File is not an image.");
        setImage(null);
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result;
        // setuploadError(null);
        // setUplodedLaundry(base64);
        setImage(base64)
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <div className="bg-zo-stroke p-6 mt-6">
        <h3 className="text-2xl text-zo-primary mb-4">{title}</h3>
      <div className="flex items-center justify-between gap-4 py-4 mb-4 w-full border-b border-zo-secondary">
        <p className="text-zo-primary">No. of Clothes</p>
        <div className="flex items-center text-lg gap-4">
            <button onClick={()=>countAction((prev : number)=> prev - 1)} className="text-zo-primary disabled:text-zo-secondary" disabled={count < 1}><HiMinus /></button>
            <span className={count >= 1 ? "text-zo-primary" : "text-zo-secondary"}>{count}</span>
            <button onClick={()=>countAction((prev : number)=> prev + 1)} className="text-zo-primary"><HiPlus /></button>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <p className="text-zo-primary">Clothes Photo</p>
        <label htmlFor={id}>
          <span className="text-zo-highlight text-sm">
            {image ? "Retake" : "Upload"}
          </span>
          <input
            onChange={(e) => uploadLaundry(e)}
            className="hidden"
            id={id}
            type="file"
            accept=".png, .jpg, .jpeg"
          />
        </label>
      </div>
      {image ? (
        <>
          <div className="relative bg-zo-stroke border border-zo-secondary flex items-center justify-center min-h-[160px] min-w-[264] w-full mt-6 mb-2">
            <Image
              src={image}
              alt="photo"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <p className="text-zo-secondary text-xs">
            Photo taken on Mon 11 Sep 2:34 PM
          </p>
        </>
      ) : (
        <>
          <div className="bg-zo-stroke border border-zo-secondary flex items-center justify-center min-h-[160px] min-w-[264] w-full mt-6 mb-2">
            <div className="h-10 w-10 relative">
              <Image
                src="/assets/svgs/Camera.svg"
                alt="Take photo"
                layout="fill"
              />
            </div>
          </div>
          <p className="text-zo-secondary text-xs">
            Photo taken will appear here
          </p>
        </>
      )}
    </div>
  );
};

export default Laundry;
