import { DropResult } from "react-beautiful-dnd";

export const reorder = <T>(initData: T[], result: DropResult, setterFunc: (reorderData: T[]) => void) => {
  if (!result.destination) return;
  const items = Array.from(initData);
  const [reorderedData] = items.splice(result.source.index, 1);
  items.splice(result.destination.index, 0, reorderedData);

  setterFunc(items);
};
