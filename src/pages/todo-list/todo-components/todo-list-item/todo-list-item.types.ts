import { TodoModel } from "models";

export interface TodoListItemProp extends TodoModel {
  keyDnd: number;
  handleEdit: (value: TodoModel) => void;
  handleEditData: (value: TodoModel) => void;
  handleDelte: (id: number) => void;
}
