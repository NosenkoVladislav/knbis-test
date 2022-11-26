import { TodoModel } from "models";
import { ModalProps } from "components/modal/modal.types";

export type TodoModalProps = Omit<ModalProps, "children"> & {
  editData?: TodoModel | null;
  handleEditData: (value: TodoModel) => void;
};
