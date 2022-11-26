import React, { FC } from "react";
import cn from "classnames";
import CircularProgress from "@mui/material/CircularProgress";

import { LoaderProps } from "./loader.types";

import styles from "./loader.module.css";

export const Loader: FC<LoaderProps> = ({ isAbsolute = false }) => {
  const classList = cn(styles.loader, { [styles.absolute]: isAbsolute });

  return (
    <div className={classList}>
      <CircularProgress color="inherit" />
    </div>
  );
};
