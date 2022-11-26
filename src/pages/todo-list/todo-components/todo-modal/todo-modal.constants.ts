import { object, string } from "yup";

import { TodoModel } from "models";

export const validationSchema = object().shape({
  content: string().min(3, "Too short...").required("This field is required"),
});

const initialData: TodoModel = {
  id: 0,
  content: "",
  done: false,
  order: 0,
};

export const getInitialValues = (editData?: TodoModel | null) => {
  return editData
    ? {
        id: editData.id,
        content: editData.content,
        done: editData.done,
        order: editData.order,
      }
    : initialData;
};
