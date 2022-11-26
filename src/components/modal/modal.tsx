import React, { FC } from "react";
import { Modal as ModalMui, Paper } from "@mui/material";

import { ModalProps } from "./modal.types";

import styles from "./modal.module.css";

export const Modal: FC<ModalProps> = ({ open, setClose, children }) => {
  return (
    <ModalMui
      open={open}
      onClose={setClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper elevation={5} className={styles.content}>
        {children}
      </Paper>
    </ModalMui>
  );
};
