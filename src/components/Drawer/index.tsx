import { DrawerProps } from "@/types/drawer";
import React, { useState, useRef, useEffect, ReactNode } from "react";



const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children, className }) => {
  const [isVisible, setIsVisible] = useState<boolean>(isOpen);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close the drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "transform translate-y-0 bg-[#2020204b] h-screen flex flex-col justify-end" : "transform translate-y-full"
      }`}
    >
      <div
        ref={drawerRef}
        className={`font-space-grotesk bg-zo-dark p-4 shadow-md ${className || ""} overflow-scroll overflow-x-hidden scrollBarHidden`}
      >
        {children}
      </div>
    </div>
  );
};

export default Drawer;
