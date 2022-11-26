import React, { FC } from "react";
import cn from "classnames";

import { ContainerProps } from "./container.types";
import styles from "./container.module.css";

export const Container: FC<ContainerProps> = ({ children, className }) => {
  const classList = cn(styles.container, className);

  return <div className={classList}>{children}</div>;
};
