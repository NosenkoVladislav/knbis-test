import { ReactNode } from "react";

export type ModalProps = {
  open: boolean;
  setClose: (value: false) => void;
  children: ReactNode;
};
