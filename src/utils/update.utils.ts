export const update = <T extends { id: number }>(initialData: T[], item: T) =>
  initialData.map((task) => (task.id === item.id ? item : task));

export const add = <T>(initialData: T[], item: T) => [{ ...item, id: initialData.length + 1 }, ...initialData];
