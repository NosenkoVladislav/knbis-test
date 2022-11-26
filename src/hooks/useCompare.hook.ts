import { useState, useEffect } from "react";
import _ from "lodash";

export const useCompareHook = <T>(currentData: T[]) => {
  const [initialData, setInitialData] = useState<T[]>([]);
  const [isEqual, setIsEqual] = useState(false);

  useEffect(() => {
    if (currentData.length && !initialData.length) {
      setInitialData(currentData);
    } else {
      setIsEqual(_.isEqual(initialData, currentData));
    }
  }, [currentData, initialData]);

  return { initialData, isEqual };
};
