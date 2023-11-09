import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LowerNavProps } from "@/types/lowerNav";



const LowerNav: React.FC<LowerNavProps> = ({ active }) => {
  return (
    <div className="fixed bottom-0 w-full bg-[#121212] p-6 border-t border-[#202020]">
      <div className="flex w-full gap-6 items-center justify-around text-2xl">
        <Link href="/">
          <div className="h-6 w-6 relative">
            <Image
              src={
                active === "home"
                  ? "/assets/svgs/CheckboxActive.svg"
                  : "/assets/svgs/Checkbox.svg"
              }
              alt="home"
              layout="fill"
            />
          </div>
        </Link>
        <Link href="/">
          <div className="h-6 w-6 relative">
            <Image
              src={
                active === "chat"
                  ? "/assets/svgs/ChatActive.svg"
                  : "/assets/svgs/Chat.svg"
              }
              alt="Chat"
              layout="fill"
            />
          </div>
        </Link>
        <Link href="/profile">
          <div className="h-6 w-6 relative">
            <Image
              src={
                active === "profile"
                  ? "/assets/svgs/ProfileNavActive.svg"
                  : "/assets/svgs/ProfileNav.svg"
              }
              alt="profile"
              layout="fill"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LowerNav;
