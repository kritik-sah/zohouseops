import { ProofOfWorkProps } from "@/types/proofOfWork";
import Image from "next/image";
import React from "react";

const ProofOfWork : React.FC<ProofOfWorkProps> = (props) => {
    const {setImage, image, id} = props;

  const uploadProofOfWork = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.length ? e.target.files[0] : null;

    if (file) {
      if (file.type && file.type.indexOf("image") === -1) { // checking if the uploded file is image only
        setImage(null);
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result;
        // setuploadError(null);
        setImage(base64)
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-zo-stroke p-6 mt-6">
      <div className="flex items-center justify-between gap-4">
        <p className="text-white">Proof of Work Photo</p>
        <label htmlFor={id}>
          <span className="text-zo-highlight text-sm">
            {image ? "Retake" : "Upload"}
          </span>
          <input
            onChange={(e) => uploadProofOfWork(e)}
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

export default ProofOfWork;
