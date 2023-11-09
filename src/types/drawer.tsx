import { ReactNode } from "react";

export interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    className?: string;
  }